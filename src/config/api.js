// Axios-based API client with proxy-friendly base URL
import axios from 'axios';

// Backend API base URL configuration
const DEFAULT_BASE = 'https://api.gotapmode.info/api';
//const DEFAULT_BASE = 'http://192.168.50.56:8000/api';
export const BACKEND_BASE = (import.meta?.env?.VITE_API_BASE || DEFAULT_BASE).replace(/\/$/, '');

// Frontend base URL for NFC card writing
const DEFAULT_FRONTEND_BASE = 'https://www.gotapmode.info';
//const DEFAULT_FRONTEND_BASE = 'https://192.168.50.56:';
export const FRONTEND_BASE = (import.meta?.env?.VITE_FRONTEND_BASE || DEFAULT_FRONTEND_BASE).replace(/\/$/, '');

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
      if (config.headers && 'Content-Type' in config.headers) {
        delete config.headers['Content-Type'];
      }
    }
  } catch {}
  return config;
});

/**
 * Response interceptor
 * 
 * Handles API response errors and preserves response objects for error handling.
 * Transforms error responses into consistent error objects with response data.
 */
http.interceptors.response.use(
  (res) => res,
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
 */
export const api = {
  get: (path, config) => http.get(path, config).then(r => r.data),
  post: (path, data, config) => http.post(path, data, config).then(r => r.data),
  put: (path, data, config) => http.put(path, data, config).then(r => r.data),
  patch: (path, data, config) => http.patch(path, data, config).then(r => r.data),
  delete: (path, config) => http.delete(path, config).then(r => r.data),
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
  stats: () => api.get('/admin/stats'),

  // User management
  getUsers: () => api.get('/admin/users'),
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
  getCards: () => api.get('/admin/cards'),
  deleteCard: (id) => api.delete(`/admin/cards/${id}`),
  getSoftDeletedCards: () => api.get('/admin/cards/soft-deleted'),
  restoreCard: (id) => api.post(`/admin/cards/${id}/restore`),
  forceDeleteCard: (id) => api.delete(`/admin/cards/${id}/force`),

  // Administrator management
  getAdministrators: () => api.get('/admin/administrators'),
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
  
  // Profile and personal data management
  getPersonalData: () => api.get('/card-users/personal-data'),
  updatePersonalData: (data) => api.post('/card-users/personal-data', data),
  getProfile: () => api.get('/card-users/profile'),
  updateProfile: (data) => api.post('/card-users/profile', data),
  updateCompleteProfile: (data) => api.post('/card-users/complete-profile', data),
  
  // Card activation
  activateCard: (activationCode) => api.post('/cards/activate', { activation_code: activationCode }),
  
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