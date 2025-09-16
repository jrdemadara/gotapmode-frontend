# Signup Authentication Fix

## Issue
The signup process was failing with a 401 Unauthorized error when trying to activate a card because the `/cards/activate` endpoint now requires authentication, but during signup, the user hasn't logged in yet.

## Root Cause
The signup flow was:
1. Register user
2. Try to activate card (❌ **FAILS** - requires authentication)
3. Store user data
4. Redirect to profile setup

## Solution
Modified the signup flow to:
1. Register user
2. **Login user** (get authentication token)
3. **Store token and user data**
4. **Activate card** (now authenticated ✅)
5. Redirect to profile setup

## Code Changes

### `frontend/src/user/Signup.vue`

**Before:**
```javascript
async function onSubmit() {
  const user = await api.post('/card-users/register', { name: guessedName, email: email.value, password: password.value })
  await api.post('/cards/activate', { activation_code: activation.value, user_id: user.id }) // ❌ 401 Error
  localStorage.setItem('gtm_user', JSON.stringify(user))
  router.push({ name: 'profile-setup' })
}
```

**After:**
```javascript
async function onSubmit() {
  // Step 1: Register the user
  const user = await userApi.register(guessedName, email.value, password.value)
  
  // Step 2: Login the user to get authentication token
  const loginResponse = await userApi.login(email.value, password.value)
  
  // Step 3: Store the token and user data
  localStorage.setItem('gtm_token', loginResponse.token)
  localStorage.setItem('gtm_user', JSON.stringify(loginResponse.user))
  
  // Step 4: Activate the card (now authenticated)
  await userApi.activateCard(activation.value)
  
  router.push({ name: 'profile-setup' })
}
```

## Benefits
1. **Security**: Card activation now properly requires authentication
2. **Consistency**: Uses the same authentication flow as other operations
3. **Token Management**: User is properly authenticated after signup
4. **Error Handling**: Better error handling with proper API methods

## Testing
The signup process should now work correctly:
1. User enters activation code, email, and password
2. User is registered in the system
3. User is automatically logged in
4. Card is activated with proper authentication
5. User is redirected to profile setup

## Related Files
- `frontend/src/user/Signup.vue` - Main fix
- `frontend/src/config/api.js` - Already had proper userApi methods
- `Backend/routes/api.php` - Card activation endpoint properly protected
