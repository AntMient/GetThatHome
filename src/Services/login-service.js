import { token_key } from "../config";
import apiFetch from "../Services/apifetch";

export function createUser(userData) {
  return apiFetch("/signup", { body: userData }).then((u) => {
    const { token, ...user } = u;
    sessionStorage.setItem(token_key, token);
    return user;
  });
}

export function getUser() {
  return apiFetch("/login").then((userData) => {
    const { _token, ...user } = userData;
    return user;
  });
}
