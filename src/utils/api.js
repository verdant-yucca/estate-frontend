import {jwt, serverUrl} from "./constants";

class Api {
  constructor({ serverUrl, headers }) {
    this._serverUrl = serverUrl;
    this._headers = headers;
  };

  _checkResponse = res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    };

  getInitialCards(page) {
    return fetch(`${this._serverUrl}/estate?page=${page}`, {
      headers: this._headers
    })
      .then (this._checkResponse);
  };

  addCard(data) {
    return fetch(`${this._serverUrl}/estate`, {
      method: 'POST',
      headers: {
        "Authorization": jwt,
        // "Content-Type": 'multipart/form-data',
        // "Content-Type": 'application/x-www-form-urlencoded',

      },
      body: data
    })
      .then (this._checkResponse);
  };

  deleteCard(estateId) {
    return fetch(`${this._serverUrl}/estate/${estateId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then (this._checkResponse);
  };

  telegramMessage(subject, name, phoneNumber, message) {
    return fetch(`${this._serverUrl}/transfer/sendTlgMessage`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        subject: subject,
        name: name,
        phoneNumber: phoneNumber,
        message: message
    })
    })
      .then (this._checkResponse);
  };

  openCard(estateId) {
    return fetch(`${this._serverUrl}/estate/${estateId}`, {
      method: 'GET',
      headers: this._headers
    })
      .then (this._checkResponse);
  };

  getReviews() {
    return fetch(`${this._serverUrl}/review`, {
      method: 'GET',
      headers: this._headers
    })
      .then (this._checkResponse);
  };
}

const api = new Api({
  serverUrl: serverUrl,
  headers: {
    'Content-Type': 'application/json',
    "Authorization": jwt
  }
});

export default api;
