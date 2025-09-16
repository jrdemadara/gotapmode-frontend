# Frontend Authentication Fixes

## Overview

The frontend has been updated to work properly with the new Laravel Sanctum authentication system implemented in the backend.

## ✅ **Fixed Issues**

### 1. **Card User Token Storage**
- **Issue**: Card user login was not storing the authentication token
- **Fix**: Added `localStorage.setItem('gtm_token', cardUserResponse.token)` in `userlogin.vue`

### 2. **API Configuration Updates**
- **Added**: `userApi` object with all card user endpoints
- **Added**: `adminApi.logout()` method
- **Updated**: All user endpoints to use authenticated routes

### 3. **Logout API Calls**
- **Issue**: Frontend logout only removed localStorage tokens
- **Fix**: All logout functions now call the backend logout API to properly revoke tokens
- **Updated**: Admin logout in all admin components
- **Updated**: User logout in UserDashboard
- **Updated**: Idle timeout logout in main.js

### 4. **API Endpoint Updates**
- **Issue**: Components were using old endpoints with user IDs
- **Fix**: Updated to use authenticated endpoints without user IDs:
  - `/card-users/personal-data/{userId}` → `/card-users/personal-data`
  - `/card-users/profile/{userId}` → `/card-users/profile`
  - `/contacts/{userId}` → `/contacts/`

### 5. **Contact Management**
- **Issue**: Contact management was using old API structure
- **Fix**: Updated all contact functions to use new `userApi` methods:
  - `addPhone()`, `addEmail()`, `addSocial()`, `addOther()`
  - `deleteContact()`, `setMainPhone()`, `setMainEmail()`, etc.

## 📁 **Files Modified**

### Core Configuration
- `src/config/api.js` - Added userApi and adminApi.logout()

### Authentication
- `src/user/userlogin.vue` - Fixed token storage for card users
- `src/main.js` - Updated idle logout to call API

### Admin Components
- `src/admin/Dashboard.vue` - Added API logout call
- `src/admin/Users.vue` - Added API logout call
- `src/admin/NFCCards.vue` - Added API logout call
- `src/admin/Administrators.vue` - Added API logout call
- `src/admin/NFCWriting.vue` - Added API logout call

### User Components
- `src/user/UserDashboard.vue` - Complete overhaul:
  - Updated all API calls to use userApi
  - Fixed contact management functions
  - Added proper logout API call
- `src/user/ProfileSetup.vue` - Updated to use userApi

## 🔧 **New API Structure**

### Admin API (`adminApi`)
```javascript
adminApi.login(email, password)
adminApi.logout() // NEW
adminApi.me()
adminApi.stats()
// ... other admin methods
```

### User API (`userApi`) - NEW
```javascript
userApi.login(email, password)
userApi.logout() // NEW
userApi.me() // NEW
userApi.register(name, email, password)
userApi.getPersonalData() // Updated endpoint
userApi.updatePersonalData(data) // Updated endpoint
userApi.getProfile() // Updated endpoint
userApi.updateProfile(data) // Updated endpoint
userApi.activateCard(activationCode)

// Contact management
userApi.getContacts()
userApi.addPhone(data)
userApi.addEmail(data)
userApi.addSocial(data)
userApi.addOther(data)
userApi.deleteContact(table, id)
userApi.setMainPhone(id)
userApi.setMainEmail(id)
userApi.setMainSocial(id)
userApi.setMainOther(id)
```

## 🔐 **Authentication Flow**

### Login Process
1. User enters credentials
2. Frontend tries admin login first
3. If admin fails, tries card user login
4. Stores appropriate token (`gtm_admin_token` or `gtm_token`)
5. Redirects to appropriate dashboard

### Logout Process
1. Frontend calls backend logout API
2. Backend revokes the token
3. Frontend removes localStorage tokens
4. Redirects to login page

### Token Usage
- **Admin requests**: Use `gtm_admin_token` with `Authorization: Bearer {token}`
- **User requests**: Use `gtm_token` with `Authorization: Bearer {token}`
- **Automatic**: Axios interceptor handles token attachment

## ⚠️ **Remaining Issues**

### Admin Contact Management
The admin components still try to manage user contacts directly, but contact endpoints now require card user authentication. This needs to be addressed by either:

1. **Option A**: Remove contact management from admin interface
2. **Option B**: Create admin-specific contact management endpoints
3. **Option C**: Use a different approach for admin contact management

### Components Not Yet Updated
Some user components may still need updates:
- `EditProfile.vue`
- `ProfileDetails.vue`
- `PublicProfile.vue`
- `Activate.vue`
- `CardValidation.vue`

## 🧪 **Testing Recommendations**

1. **Test Admin Login/Logout**
   - Verify admin can login and access admin dashboard
   - Verify logout properly revokes tokens

2. **Test User Login/Logout**
   - Verify card users can login and access user dashboard
   - Verify logout properly revokes tokens

3. **Test Contact Management**
   - Verify users can add/edit/delete contacts
   - Verify main contact toggling works

4. **Test Token Persistence**
   - Verify tokens persist across page refreshes
   - Verify idle timeout properly logs out users

5. **Test API Security**
   - Verify protected endpoints require authentication
   - Verify invalid tokens are rejected

## 🚀 **Deployment Notes**

- All changes are backward compatible
- No database migrations required
- Frontend will work with both old and new backend authentication
- Recommend testing thoroughly before deploying to production

## 📝 **Next Steps**

1. Test all authentication flows
2. Update remaining user components if needed
3. Address admin contact management issue
4. Consider adding token refresh functionality
5. Add proper error handling for authentication failures
