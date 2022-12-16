import { serverUrl} from "./constants";

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

  getInitialCards() {
    return fetch(`${this._serverUrl}/estate`, {
      headers: this._headers
    })
      .then (this._checkResponse);
  };

  addCard(title, price, address, images ) {
    return fetch(`${this._serverUrl}/estate`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        title: title,
        price: price,
        address: address,
        images: images
      })
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

}

const api = new Api({
  serverUrl: serverUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
