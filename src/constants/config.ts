export const APP_CONFIG = {
  API_URL: import.meta.env.VITE_API_URL,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  SUPPORTED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  DEFAULT_NOTIFICATION_DURATION: 3000
};