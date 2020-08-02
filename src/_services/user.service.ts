import { config } from "../config";

export const userService = {
  login,
  logout,
  register
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({username, password})
  };

  return fetch(`${config.apiUrl}/auth/sign-in`, requestOptions).then(handleResponse);
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }

  return fetch(`${config.apiUrl}/auth/sign-up`, requestOptions).then(handleResponse);
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
