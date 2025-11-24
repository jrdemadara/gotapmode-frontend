// Axios-based API client with proxy-friendly base URL
import axios from 'axios';

// Backend API base URL configuration


//  const DEFAULT_BASE = 'https://api.gotapmode.info/api';
const DEFAULT_BASE = 'http://127.0.0.1:8000/api';

export const BACKEND_BASE = (import.meta?.env?.VITE_API_BASE || DEFAULT_BASE).replace(/\/$/, '');

// Frontend base URL for NFC card writing
// const DEFAULT_FRONTEND_BASE = 'https://www.gotapmode.info';
const DEFAULT_FRONTEND_BASE = 'http://127.0.0.1:5173';
export const FRONTEND_BASE = (import.meta?.env?.VITE_FRONTEND_BASE || DEFAULT_FRONTEND_BASE).replace(/\/$/, '');

/**
 * Client-side API response cache with TTL
 * 
 * Caches GET requests to reduce API calls and improve performance.
 * Cache entries expire after their TTL and are automatically cleaned up.
 */
class ApiCache {
  constructor() {
    this.cache = new Map();
    this.defaultTTL = 60000; // 1 minute default TTL
    this.cleanupInterval = 300000; // Clean up expired entries every 5 minutes
    
    // Start cleanup interval
    if (typeof window !== 'undefined') {
      setInterval(() => this.cleanup(), this.cleanupInterval);
    }
  }

  /**
   * Generate cache key from request config
   */
  getKey(config) {
    const method = (config.method || 'get').toLowerCase();
    const url = config.url || '';
    const params = config.params ? JSON.stringify(config.params) : '';
    const data = config.data ? JSON.stringify(config.data) : '';
    return `${method}:${url}:${params}:${data}`;
  }

  /**
   * Get cached response if available and not expired
   */
  get(key) {
    const entry = this.cache.get(key);
    if (!entry) return null;
    
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.data;
  }

  /**
   * Store response in cache with TTL
   */
  set(key, data, ttl = null) {
    const expiresAt = Date.now() + (ttl || this.defaultTTL);
    this.cache.set(key, { data, expiresAt });
  }

  /**
   * Remove specific cache entry
   */
  delete(key) {
    this.cache.delete(key);
  }

  /**
   * Clear all cache entries matching a pattern (optimized)
   */
  clearPattern(pattern) {
    // Collect keys to delete first (prevents modification during iteration)
    const keysToDelete = [];
    for (const key of this.cache.keys()) {
      if (key.includes(pattern)) {
        keysToDelete.push(key);
      }
    }
    // Delete in batch
    keysToDelete.forEach(key => this.cache.delete(key));
  }

  /**
   * Clear all cache
   */
  clear() {
    this.cache.clear();
  }

  /**
   * Remove expired entries
   */
  cleanup() {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.expiresAt) {
        this.cache.delete(key);
      }
    }
  }
}

// Create singleton cache instance
const apiCache = new ApiCache();

/**
 * Request deduplication - prevents duplicate simultaneous requests
 */
class RequestDeduplicator {
  constructor() {
    this.pendingRequests = new Map();
  }

  /**
   * Deduplicate a request - if same request is already pending, return that promise
   */
  async dedupe(key, requestFn) {
    if (this.pendingRequests.has(key)) {
      return this.pendingRequests.get(key);
    }
    
    const promise = requestFn()
      .finally(() => {
        // Remove from pending after completion
        this.pendingRequests.delete(key);
      });
    
    this.pendingRequests.set(key, promise);
    return promise;
  }

  /**
   * Generate a key from request config
   */
  getKey(config) {
    const method = (config.method || 'get').toLowerCase();
    const url = config.url || '';
    const params = config.params ? JSON.stringify(config.params) : '';
    return `${method}:${url}:${params}`;
  }
}

const requestDeduplicator = new RequestDeduplicator();

/**
 * Cache TTLs for different endpoint types (in milliseconds)
 */
const cacheTTLs = {
  '/admin/stats': 300000, // 5 minutes
  '/admin/users': 60000, // 1 minute
  '/admin/administrators': 60000, // 1 minute
  '/admin/cards': 60000, // 1 minute
  '/card-users/profile': 60000, // 1 minute
  '/card-users/personal-data': 60000, // 1 minute
  '/card-users/me': 300000, // 5 minutes
  '/contacts/': 60000, // 1 minute
  '/contacts/': 60000, // 1 minute (public contacts)
};

/**
 * HTTP client configuration
 * 
 * Creates an axios instance with base configuration for API requests.
 * Includes timeout, headers, and CORS settings optimized for the application.
 */
export const http = axios.create({
  baseURL: BACKEND_BASE,
  // Do NOT set Content-Type globally; let axios/browser infer per request
  headers: { 'Accept': 'application/json' },
  timeout: 15000,
  // We use Bearer tokens, not cookies; credentials are unnecessary and can trigger stricter CORS
  withCredentials: false,
});

/**
 * Request interceptor
 * 
 * Automatically adds authentication tokens to requests based on the endpoint.
 * Admin endpoints use admin tokens, user endpoints use user tokens.
 * Handles FormData requests by removing Content-Type header for proper boundary setting.
 * Checks cache for GET requests before making network call.
 */
http.interceptors.request.use((config) => {
  try {
    const isAdminEndpoint = (config.url || '').startsWith('/admin');
    const token = isAdminEndpoint ? localStorage.getItem('gtm_admin_token') : localStorage.getItem('gtm_token');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    // If sending FormData, ensure Content-Type is unset so browser sets boundary
    if (config.data instanceof FormData) {
      // Ensure headers object exists
      config.headers = config.headers || {};
      // Remove Content-Type to let browser set it with proper boundary
      if ('Content-Type' in config.headers) {
        delete config.headers['Content-Type'];
      }
      // Prevent axios from transforming FormData - it needs to be sent as-is
      // Don't override transformRequest if it's already set
      if (!config.transformRequest) {
        config.transformRequest = [(data) => {
          // If it's FormData, return it as-is without transformation
          if (data instanceof FormData) {
            return data;
          }
          return data;
        }];
      }
    }

    // Check cache for GET requests
    const method = (config.method || 'get').toLowerCase();
    if (method === 'get' && !config.skipCache) {
      const cacheKey = apiCache.getKey(config);
      const cached = apiCache.get(cacheKey);
      if (cached) {
        // Return cached response by creating a fake promise
        config.adapter = () => Promise.resolve({
          data: cached,
          status: 200,
          statusText: 'OK',
          headers: {},
          config,
        });
        return config; // Return early if cached
      }
      
      // Deduplicate GET requests (prevent duplicate simultaneous requests)
      // Temporarily disabled - may cause hanging issues with adapter override
      // TODO: Implement proper request deduplication without adapter override
      // if (!config.skipDedupe && !config.adapter) {
      //   const dedupeKey = requestDeduplicator.getKey(config);
      //   const originalRequest = http.request.bind(http);
      //   config.adapter = () => requestDeduplicator.dedupe(dedupeKey, () => {
      //     const requestConfig = { ...config };
      //     delete requestConfig.adapter;
      //     return originalRequest(requestConfig);
      //   });
      // }
    }
  } catch {}
  return config;
});

/**
 * Response interceptor
 * 
 * Handles API response errors and preserves response objects for error handling.
 * Transforms error responses into consistent error objects with response data.
 * Caches successful GET responses.
 */
http.interceptors.response.use(
  (res) => {
    // Cache successful GET responses
    const method = (res.config.method || 'get').toLowerCase();
    if (method === 'get' && res.status === 200 && !res.config.skipCache) {
      const cacheKey = apiCache.getKey(res.config);
      const url = res.config.url || '';
      
      // Determine TTL based on endpoint
      let ttl = apiCache.defaultTTL;
      for (const [pattern, patternTTL] of Object.entries(cacheTTLs)) {
        if (url.includes(pattern)) {
          ttl = patternTTL;
          break;
        }
      }
      
      apiCache.set(cacheKey, res.data, ttl);
    }
    
    return res;
  },
  (error) => {
    // Preserve response object so callers can branch on status codes
    if (error?.response) {
      const e = new Error(error.response?.data?.message || error.message || 'Request failed');
      e.response = error.response;
      e.config = error.config;
      return Promise.reject(e);
    }
    return Promise.reject(error);
  }
);

/**
 * Generic API methods
 * 
 * Provides basic HTTP methods that automatically extract data from responses.
 * All methods return promises that resolve to the response data.
 * GET requests are automatically cached. POST/PUT/DELETE invalidate related cache.
 */
export const api = {
  get: (path, config = {}) => {
    return http.get(path, config).then(r => r.data);
  },
  post: (path, data, config = {}) => {
    // Invalidate related cache on POST
    apiCache.clearPattern(path);
    // For FormData, ensure proper headers are set
    if (data instanceof FormData) {
      config = {
        ...config,
        headers: {
          ...config.headers,
          // Don't set Content-Type for FormData - let browser set it with boundary
        }
      };
    }
    return http.post(path, data, config).then(r => r.data);
  },
  put: (path, data, config = {}) => {
    // Invalidate related cache on PUT
    apiCache.clearPattern(path);
    return http.put(path, data, config).then(r => r.data);
  },
  patch: (path, data, config = {}) => {
    // Invalidate related cache on PATCH
    apiCache.clearPattern(path);
    return http.patch(path, data, config).then(r => r.data);
  },
  delete: (path, config = {}) => {
    // Invalidate related cache on DELETE
    apiCache.clearPattern(path);
    return http.delete(path, config).then(r => r.data);
  },
};

/**
 * Cache utility functions for manual cache management
 */
export const cacheUtils = {
  /**
   * Clear cache for a specific endpoint pattern
   */
  clear: (pattern) => apiCache.clearPattern(pattern),
  
  /**
   * Clear all cache
   */
  clearAll: () => apiCache.clear(),
};

/**
 * Admin API methods
 * 
 * Provides all admin-specific API endpoints for user management, card management,
 * administrator management, and contact management. All methods require admin authentication.
 */
export const adminApi = {
  // Authentication and session management
  login: (email, password) => api.post('/admin/login', { email, password }),
  logout: () => api.post('/admin/logout'),
  me: () => api.get('/admin/me'),
  stats: (skipCache = false) => api.get('/admin/stats', skipCache ? { skipCache: true } : {}),
  
  // Password reset
  forgotPassword: (email) => api.post('/admin/forgot-password', { email }),
  verifyResetCode: (email, code) => api.post('/admin/verify-reset-code', { email, code }),
  resetPassword: (email, code, password, password_confirmation) => api.post('/admin/reset-password', { email, code, password, password_confirmation }),

  // User management
  getUsers: (page = 1, perPage = 10, search = '', skipCache = false) => {
    const params = new URLSearchParams()
    params.append('page', page)
    params.append('per_page', perPage)
    if (search) params.append('search', search)
    return api.get(`/admin/users?${params.toString()}`, skipCache ? { skipCache: true } : {})
  },
  getUser: (id) => api.get(`/admin/users/${id}`),
  getSoftDeletedUsers: () => api.get('/admin/users/soft-deleted'),
  updateUser: (id, data) => api.put(`/admin/users/${id}`, data),
  updateUserPersonalData: (id, data) => api.post(`/admin/users/${id}/personal-data`, data),
  updateUserProfile: (id, data, config = {}) => api.post(`/admin/users/${id}/profile`, data, config),
  updateUserProfilePhoto: (id, formData, config = {}) => api.post(`/admin/users/${id}/profile/picture`, formData, config),
  softDeleteUser: (id) => api.delete(`/admin/users/${id}`),
  restoreUser: (id) => api.post(`/admin/users/${id}/restore`),

  // Contact management functions
  addUserPhone: (userId, data) => api.post(`/admin/users/${userId}/phones`, data),
  addUserEmail: (userId, data) => api.post(`/admin/users/${userId}/emails`, data),
  addUserSocial: (userId, data) => api.post(`/admin/users/${userId}/socials`, data),
  addUserOther: (userId, data) => api.post(`/admin/users/${userId}/others`, data),

  removeUserPhone: (userId, phoneId) => api.delete(`/admin/users/${userId}/phones/${phoneId}`),
  removeUserEmail: (userId, emailId) => api.delete(`/admin/users/${userId}/emails/${emailId}`),
  removeUserSocial: (userId, socialId) => api.delete(`/admin/users/${userId}/socials/${socialId}`),
  removeUserOther: (userId, otherId) => api.delete(`/admin/users/${userId}/others/${otherId}`),

  setMainPhone: (userId, phoneId) => api.post(`/admin/users/${userId}/phones/${phoneId}/set-main`),
  setMainEmail: (userId, emailId) => api.post(`/admin/users/${userId}/emails/${emailId}/set-main`),
  setMainSocial: (userId, socialId) => api.post(`/admin/users/${userId}/socials/${socialId}/set-main`),
  setMainOther: (userId, otherId) => api.post(`/admin/users/${userId}/others/${otherId}/set-main`),

  getUserPhones: (userId) => api.get(`/contacts/${userId}`).then(r => r.phones || []),
  getUserEmails: (userId) => api.get(`/contacts/${userId}`).then(r => r.emails || []),
  getUserSocials: (userId) => api.get(`/contacts/${userId}`).then(r => r.socials || []),
  getUserOthers: (userId) => api.get(`/contacts/${userId}`).then(r => r.others || []),

  // NFC Card management
  createNfcCard: (data) => api.post('/admin/cards', data),
  getCards: (page = 1, perPage = 10, search = '', skipCache = false) => {
    const params = new URLSearchParams()
    params.append('page', page)
    params.append('per_page', perPage)
    if (search) params.append('search', search)
    return api.get(`/admin/cards?${params.toString()}`, skipCache ? { skipCache: true } : {})
  },
  deleteCard: (id) => api.delete(`/admin/cards/${id}`),
  getSoftDeletedCards: () => api.get('/admin/cards/soft-deleted'),
  restoreCard: (id) => api.post(`/admin/cards/${id}/restore`),
  forceDeleteCard: (id) => api.delete(`/admin/cards/${id}/force`),

  // Administrator management
  getAdministrators: (page = 1, perPage = 10, search = '', skipCache = false) => {
    const params = new URLSearchParams()
    params.append('page', page)
    params.append('per_page', perPage)
    if (search) params.append('search', search)
    return api.get(`/admin/administrators?${params.toString()}`, skipCache ? { skipCache: true } : {})
  },
  createAdministrator: (data) => api.post('/admin/administrators', data),
  updateAdministrator: (id, data) => api.put(`/admin/administrators/${id}`, data),
  softDeleteAdministrator: (id) => api.delete(`/admin/administrators/${id}`),
  getSoftDeletedAdministrators: () => api.get('/admin/administrators/soft-deleted'),
  restoreAdministrator: (id) => api.post(`/admin/administrators/${id}/restore`),
};

/**
 * User API methods
 * 
 * Provides all user-specific API endpoints for authentication, profile management,
 * contact management, and card activation. All methods require user authentication.
 */
export const userApi = {
  // Authentication and session management
  login: (email, password) => api.post('/card-users/login', { email, password }),
  logout: () => api.post('/card-users/logout'),
  me: () => api.get('/card-users/me'),
  register: (name, email, password) => api.post('/card-users/register', { name, email, password }),
  
  // Password reset
  forgotPassword: (email) => api.post('/card-users/forgot-password', { email }),
  verifyResetCode: (email, code) => api.post('/card-users/verify-reset-code', { email, code }),
  resetPassword: (email, code, password, password_confirmation) => api.post('/card-users/reset-password', { email, code, password, password_confirmation }),
  
  // Profile and personal data management
  getPersonalData: () => api.get('/card-users/personal-data'),
  updatePersonalData: (data) => api.post('/card-users/personal-data', data),
  getProfile: () => api.get('/card-users/profile'),
  updateProfile: (data) => api.post('/card-users/profile', data),
  updateCompleteProfile: (data) => api.post('/card-users/complete-profile', data),
  uploadCover: (formData) => http.post('/card-users/profile/cover', formData, {
    timeout: 30000, // 30 second timeout for file uploads
    headers: {
      // Let browser set Content-Type with boundary for FormData
    }
  }),
  
  // Card activation
  activateCard: (activationCode) => api.post('/cards/activate', { activation_code: activationCode }),
  
  // Password change
  changePassword: (data) => api.post('/card-users/change-password', data),
  
  // Contact management
  getContacts: () => api.get('/contacts/'),
  addPhone: (data) => api.post('/contacts/phones', data),
  addEmail: (data) => api.post('/contacts/emails', data),
  addSocial: (data) => api.post('/contacts/socials', data),
  addOther: (data) => api.post('/contacts/others', data),
  deleteContact: (table, id) => api.delete(`/contacts/${table}/${id}`),
  setMainPhone: (id) => api.post(`/contacts/phones/${id}/set-main`),
  setMainEmail: (id) => api.post(`/contacts/emails/${id}/set-main`),
  setMainSocial: (id) => api.post(`/contacts/socials/${id}/set-main`),
  setMainOther: (id) => api.post(`/contacts/others/${id}/set-main`),
};