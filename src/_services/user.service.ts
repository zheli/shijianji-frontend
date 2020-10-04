import { config } from "../config";
import axios from "axios";

export const userService = {
  login,
  logout,
  register
};

function login(email, password) {
  return axios.post(`${config.apiUrl}/v1/auth/sign-in`, {email: email, password: password});
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function register(user) {
  return axios.post(`${config.apiUrl}/v1/auth/sign-up`, user);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if(!response.ok) {
      if (response.status === 401) {
        logout();
        // eslint-disable-next-line no-restricted-globals
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
