/**
 * Utility functions for handling profile images
 */

/**
 * Converts a profile image path to a full URL
 * Handles both relative paths and full URLs
 * @param {string} imagePath - The image path from the API
 * @returns {string} - Full URL for the image
 */
export function getImageUrl(imagePath) {
  if (!imagePath) return ''
  
  // If it's already a full URL or data URL, return as is
  if (imagePath.startsWith('http') || imagePath.startsWith('data:')) {
    return imagePath
  }
  
  // It's a relative path, convert to full URL
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
  return `${window.location.origin}${normalizedPath}`
}

/**
 * Adds cache busting parameter to an image URL
 * @param {string} imageUrl - The image URL
 * @returns {string} - URL with cache busting parameter
 */
export function addCacheBusting(imageUrl) {
  if (!imageUrl) return ''
  
  const separator = imageUrl.includes('?') ? '&' : '?'
  return `${imageUrl}${separator}v=${Date.now()}`
}

/**
 * Processes a profile image path for display
 * Converts relative paths to full URLs and adds cache busting
 * @param {string} imagePath - The image path from the API
 * @returns {string} - Processed URL ready for display
 */
export function processProfileImage(imagePath) {
  if (!imagePath) return ''
  
  const fullUrl = getImageUrl(imagePath)
  return addCacheBusting(fullUrl)
}
