export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout'
  },
  FOLLOW: {
    STATS: (userId: string) => `/api/follow/stats/${userId}`,
    FOLLOWERS: (userId: string) => `/api/follow/followers/${userId}`,
    FOLLOWING: (userId: string) => `/api/follow/following/${userId}`,
    FOLLOW: (userId: string) => `/api/follow/${userId}`,
    UNFOLLOW: (userId: string) => `/api/follow/${userId}`
  },
  USER: {
    PROFILE: (username: string) => `/api/users/${username}`,
    PRODUCTS: (userId: string) => `/api/users/${userId}/products`
  }
};