// Axios-based API client with proxy-friendly base URL
import axios from 'axios';

const DEFAULT_BASE = 'https://192.168.50.56:8443/api';
export const BACKEND_BASE = (import.meta?.env?.VITE_API_BASE || DEFAULT_BASE).replace(/\/$/, '');

// Frontend base URL for NFC card writing
const DEFAULT_FRONTEND_BASE = 'https://GoTapMode.info';
export const FRONTEND_BASE = (import.meta?.env?.VITE_FRONTEND_BASE || DEFAULT_FRONTEND_BASE).replace(/\/$/, '');

export const http = axios.create({
  baseURL: BACKEND_BASE,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
  withCredentials: false,
});

http.interceptors.request.use((config) => {
  try {
    const isAdminEndpoint = (config.url || '').startsWith('/admin');
    const token = isAdminEndpoint ? localStorage.getItem('gtm_admin_token') : localStorage.getItem('gtm_token');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch {}
  return config;
});

http.interceptors.response.use(
  (res) => res,
  (error) => {
    const msg = error?.response?.data?.message || error?.message || 'Request failed';
    return Promise.reject(new Error(msg));
  }
);

export const api = {
  get: (path, config) => http.get(path, config).then(r => r.data),
  post: (path, data, config) => http.post(path, data, config).then(r => r.data),
  put: (path, data, config) => http.put(path, data, config).then(r => r.data),
  patch: (path, data, config) => http.patch(path, data, config).then(r => r.data),
  delete: (path, config) => http.delete(path, config).then(r => r.data),
};

export const adminApi = {
  login: (email, password) => api.post('/admin/login', { email, password }),
  me: () => api.get('/admin/me'),
  stats: () => api.get('/admin/stats'),
  getUsers: () => api.get('/admin/users'),
  getUser: (id) => api.get(`/admin/users/${id}`),
  getSoftDeletedUsers: () => api.get('/admin/users/soft-deleted'),
  updateUser: (id, data) => api.put(`/admin/users/${id}`, data),
  softDeleteUser: (id) => api.delete(`/admin/users/${id}`),
  restoreUser: (id) => api.post(`/admin/users/${id}/restore`),

  // Contact management functions
  addUserPhone: (userId, data) => api.post('/contacts/phones', { user_id: userId, ...data }),
  addUserEmail: (userId, data) => api.post('/contacts/emails', { user_id: userId, ...data }),
  addUserSocial: (userId, data) => api.post('/contacts/socials', { user_id: userId, ...data }),
  addUserOther: (userId, data) => api.post('/contacts/others', { user_id: userId, ...data }),

  removeUserPhone: (userId, phoneId) => api.delete(`/contacts/phones/${phoneId}`),
  removeUserEmail: (userId, emailId) => api.delete(`/contacts/emails/${emailId}`),
  removeUserSocial: (userId, socialId) => api.delete(`/contacts/socials/${socialId}`),
  removeUserOther: (userId, otherId) => api.delete(`/contacts/others/${otherId}`),

  setMainPhone: (userId, phoneId) => api.post(`/contacts/phones/${phoneId}/set-main`),
  setMainEmail: (userId, emailId) => api.post(`/contacts/emails/${emailId}/set-main`),
  setMainSocial: (userId, socialId) => api.post(`/contacts/socials/${socialId}/set-main`),
  setMainOther: (userId, otherId) => api.post(`/contacts/others/${otherId}/set-main`),

  getUserPhones: (userId) => api.get(`/contacts/${userId}`).then(r => r.phones || []),
  getUserEmails: (userId) => api.get(`/contacts/${userId}`).then(r => r.emails || []),
  getUserSocials: (userId) => api.get(`/contacts/${userId}`).then(r => r.socials || []),
  getUserOthers: (userId) => api.get(`/contacts/${userId}`).then(r => r.others || []),

  // NFC Card management
  createNfcCard: (data) => api.post('/admin/nfc-cards', data),

  // Administrator management
  getAdministrators: () => api.get('/admin/administrators'),
  createAdministrator: (data) => api.post('/admin/users', data),
  updateAdministrator: (id, data) => api.put(`/admin/administrators/${id}`, data),
};


