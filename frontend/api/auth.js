import api from "./api";

export async function loginUser(username, password) {
  const res = await api.post("/auth/token", new URLSearchParams({ username, password }));
  return res.data;
}

export async function registerUser(username, password) {
  const res = await api.post("/auth/register", { username, password });
  return res.data;
}
