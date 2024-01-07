import { token_key } from "../config";
import apiFetch from "./apifetch";

export async function onLogin(credentials) {
  const u = await apiFetch("/login", { body: credentials });
  const { token, ...user } = u;
  sessionStorage.setItem(token_key, token);
  return user;
}


export async function logout() {
  await apiFetch("/logout", { method: "DELETE" });
  sessionStorage.removeItem(token_key);
  localStorage.removeItem('properties');
}
