import { useState } from "react";
import api from "@/api/api";
import { API_ENDPOINTS } from "@/constants/config";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (username: string, password: string) => {
    setLoading(true);
    try {
      const res = await api.post(API_ENDPOINTS.AUTH_LOGIN, new URLSearchParams({ username, password }));
      localStorage.setItem("token", res.data.access_token);
      return true;
    } catch (err) {
      console.error("Login failed:", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  return { login, logout, loading };
};
