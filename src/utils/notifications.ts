// Notification types
export type NotificationType = 'success' | 'error' | 'info' | 'warning';

interface NotificationOptions {
  duration?: number;
  position?: 'top' | 'bottom';
}

// Simple notification system
export const showNotification = (
  message: string, 
  type: NotificationType = 'info',
  options: NotificationOptions = {}
) => {
  // Default options
  const { duration = 3000, position = 'top' } = options;

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `
    fixed ${position}-4 left-1/2 transform -translate-x-1/2
    px-4 py-2 rounded-lg shadow-lg
    ${type === 'error' ? 'bg-red-500 text-white' :
      type === 'success' ? 'bg-green-500 text-white' :
      type === 'warning' ? 'bg-yellow-500 text-white' :
      'bg-blue-500 text-white'}
    transition-all duration-300 z-50
  `;
  notification.textContent = message;

  // Add to DOM
  document.body.appendChild(notification);

  // Remove after duration
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, duration);

  // Also log to console in development
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[${type.toUpperCase()}] ${message}`);
  }
};