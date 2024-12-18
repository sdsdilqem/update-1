// Error types
export interface ApiError {
  message: string;
  statusCode: number;
}

// Safe error handler that avoids Symbol cloning issues
export const handleApiError = (error: unknown, defaultMessage: string): ApiError => {
  // Default error response
  const defaultError: ApiError = {
    message: defaultMessage,
    statusCode: 500
  };

  try {
    if (!error || typeof error !== 'object') {
      return defaultError;
    }

    // Handle Axios error response
    if ('response' in error && error.response) {
      const response = error.response as any;
      return {
        message: response.data?.message || defaultMessage,
        statusCode: response.status || 500
      };
    }

    // Handle regular Error objects
    if (error instanceof Error) {
      return {
        message: error.message || defaultMessage,
        statusCode: 500
      };
    }

    return defaultError;
  } catch {
    return defaultError;
  }
};

// Custom error class for consistent error handling
export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'AppError';
  }
}