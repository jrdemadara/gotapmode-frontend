// Axios-based API client with proxy-friendly base URL
import axios from 'axios';

const DEFAULT_BASE = 'http://127.0.0.1:8000/api';
// const DEFAULT_BASE = 'https://api.gotapmode.info/api';
export const BACKEND_BASE = (import.meta?.env?.VITE_API_BASE || DEFAULT_BASE).replace(/\/$/, '');

// Frontend base URL for NFC card writing
const DEFAULT_FRONTEND_BASE = 'https://www.gotapmode.info';
//const DEFAULT_FRONTEND_BASE = 'https://192.168.50.56:';
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
  logout: () => api.post('/admin/logout'),
  me: () => api.get('/admin/me'),
  stats: () => api.get('/admin/stats'),
  getUsers: () => api.get('/admin/users'),
  getUser: (id) => api.get(`/admin/users/${id}`),
  getSoftDeletedUsers: () => api.get('/admin/users/soft-deleted'),
  updateUser: (id, data) => api.put(`/admin/users/${id}`, data),
  updateUserPersonalData: (id, data) => api.post(`/admin/users/${id}/personal-data`, data),
  updateUserProfile: (id, data) => api.post(`/admin/users/${id}/profile`, data),
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

export const userApi = {
  login: (email, password) => api.post('/card-users/login', { email, password }),
  logout: () => api.post('/card-users/logout'),
  me: () => api.get('/card-users/me'),
  register: (name, email, password) => api.post('/card-users/register', { name, email, password }),
  getPersonalData: () => api.get('/card-users/personal-data'),
  updatePersonalData: (data) => api.post('/card-users/personal-data', data),
  getProfile: () => api.get('/card-users/profile'),
  updateProfile: (data) => api.post('/card-users/profile', data),
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


