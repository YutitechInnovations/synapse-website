# Image Upload Troubleshooting Guide

## Issue Description
The image upload functionality is showing "Failed to upload image. Please try again." error message.

## 🚨 **QUICK FIXES**

### For 422 Error
If you're getting a **422 Unprocessable Entity** error, the issue is likely that the backend expects snake_case field names instead of camelCase. This has been fixed in the updated code by changing:
- `fileName` → `file_name`
- `fileType` → `file_type` 
- `fileSize` → `file_size`

### For 400 Error / "Failed to generate pre-signed URL"
The backend expects only the `file_name` field in the request body:
```json
{
  "file_name": "your-image.png"
}
```
This has been fixed in the updated code.

## Potential Causes and Solutions

### 1. Environment Variables Not Set
**Problem**: The API base URL is not configured properly.

**Solution**: 
- Check if `NEXT_PUBLIC_COMMON_BASE_URL` is set in your environment
- Create a `.env.local` file in the root directory with:
```
NEXT_PUBLIC_COMMON_BASE_URL=https://your-api-domain.com
```

### 2. API Endpoint Issues
**Problem**: The backend API endpoints might not be available or configured correctly.

**Solutions**:
- Verify the backend server is running
- Check if the `/blogs/get_presigned_url` endpoint exists
- Ensure the backend supports the expected request format

### 3. Network Configuration Issues
**Problem**: CORS, authentication, or network connectivity issues.

**Solutions**:
- Check browser console for CORS errors
- Verify authentication tokens are present
- Test network connectivity to the API server

### 4. File Validation Issues
**Problem**: File size or type restrictions.

**Solutions**:
- Ensure file size is under 5MB
- Use supported image formats: JPEG, PNG, GIF, WebP
- Check file extension matches the actual file type

### 5. Cloud Storage Configuration
**Problem**: Presigned URL generation or cloud storage access issues.

**Solutions**:
- Verify cloud storage credentials are configured on the backend
- Check if the presigned URL is valid and accessible
- Ensure proper permissions for file upload

## Debugging Steps

### Step 1: Use the Debug Components
The blog creation page now includes debug components:
1. **Environment Checker**: Verifies environment variables and browser state
2. **Image Upload Debugger**: Tests API connectivity and presigned URL generation

### Step 2: Check Browser Console
Look for:
- Network errors (404, 500, CORS)
- JavaScript errors
- Authentication failures

### Step 3: Verify API Response
The debugger will show:
- API base URL configuration
- Presigned URL response
- Detailed error messages

### Step 4: Test with Different Files
Try uploading:
- Different image formats
- Smaller file sizes
- Files with simple names (no special characters)

## Code Improvements Made

### 1. Created Blogs Service (`src/services/blogs.js`)
- Centralized API calls for blog operations
- Better error handling and messages
- Consistent response format

### 2. Enhanced Error Handling
- More specific error messages
- File validation (size and type)
- Better user feedback

### 3. Improved Image Upload Process
- File validation before upload
- Better loading states
- Detailed error reporting

## Quick Fixes to Try

1. **Restart the development server**:
   ```bash
   npm run dev
   ```

2. **Clear browser cache and localStorage**:
   - Open browser dev tools
   - Go to Application tab
   - Clear localStorage and sessionStorage

3. **Check environment variables**:
   - Use the Environment Checker component
   - Verify `NEXT_PUBLIC_COMMON_BASE_URL` is set

4. **Test API connectivity**:
   - Use the Image Upload Debugger component
   - Check if presigned URL request succeeds

## Common Error Messages and Solutions

### "Failed to get upload URL"
- Check if backend server is running
- Verify API endpoint exists
- Check authentication tokens

### "422 Unprocessable Entity"
- **Most Common Fix**: The backend expects snake_case field names instead of camelCase
- Change `fileName` to `file_name`, `fileType` to `file_type`, `fileSize` to `file_size`
- This has been fixed in the updated code
- Use the "Test Different Formats" button in the debugger to verify the correct format

### "400 Bad Request" / "Failed to generate pre-signed URL"
- **Root Cause**: Authentication issue - blogs endpoint requires proper Bearer token
- **Evidence**: Postman works with `{{admin_token}}`, frontend fails without proper auth
- **Immediate Fix**: Code updated to explicitly send authentication headers
- **Long-term Fix**: Ensure consistent token storage and retrieval
- **Solutions**:
  - ✅ **Implemented**: Explicit authentication headers in API calls
  - ✅ **Implemented**: Multiple token source checking (localStorage + cookies)
  - 🔧 **Backend Fix Needed**: Ensure blogs endpoint has same auth requirements as testimonials
  - 📋 **Frontend Tasks**:
    - Verify token is properly stored after login
    - Check token expiration and refresh logic
    - Ensure consistent token naming across the app

### "Upload failed with status: 403"
- Check file permissions
- Verify cloud storage credentials
- Check CORS configuration

### "File size must be less than 5MB"
- Compress the image
- Use a smaller image file
- Convert to a more efficient format

### "Please upload a valid image file"
- Use supported formats: JPEG, PNG, GIF, WebP
- Check file extension matches content
- Try a different image file

## Next Steps

1. Use the debug components to identify the specific issue
2. Check the browser console for detailed error messages
3. Verify backend API configuration
4. Test with the provided debugging tools
5. Apply the appropriate fix based on the identified issue

## Support

If the issue persists after trying these solutions:
1. Check the debug output from the components
2. Review browser console errors
3. Verify backend API status
4. Contact the development team with the debug information 