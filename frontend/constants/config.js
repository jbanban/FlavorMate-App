// constants/config.ts
export const BASE_URL = "http://127.0.0.1:8000"; // or your FastAPI backend URL

// Example API endpoints for convenience
export const API_ENDPOINTS = {
  RECIPES: `${BASE_URL}/recipes/`,
  USERS: `${BASE_URL}/users/`,
  AUTH_LOGIN: `${BASE_URL}/auth/login/`,
  AUTH_REGISTER: `${BASE_URL}/auth/register/`,
};
