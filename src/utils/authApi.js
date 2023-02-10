import {jwt, serverUrl} from "./constants";

class AuthApi {
  constructor({serverUrl, headers}) {
    this._serverUrl = serverUrl;
    this._headers = headers;
  };

  register = (password, email) => {
    return fetch(`${serverUrl}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "password": password,
        "email": email
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch(err => console.log(err))
  }

  login = (password, email) => {
    return fetch(`${serverUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "password": password,
        "email": email
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
  }

  check = () => {
    return fetch(`${serverUrl}/checkAuth`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": jwt
      }
    })
      .then((res) => {
        if (res.ok) {
          return
        }
        return Promise.reject(res.status);
      })
  }
}

const authApi = new AuthApi({
  serverUrl: serverUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default authApi;
