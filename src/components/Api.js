export default class Api {
  constructor({ url, headers }) {
      this._url = url;
      this._headers = headers;
  }

  _getRequest(url, options) {
    return fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((errorData) => {
            const errorMessage = errorData.message || 'Request failed';
            const errorWithStatus = new Error(errorMessage);
            errorWithStatus.status = response.status;
            throw errorWithStatus;
          });
        }
      })
      .catch((error) => {
        alert(`Статус ошибки: ${error.status}, Сообщение: ${error.message}`);
      });
  }

  getUserInfo () {
    return this._getRequest(`${this._url}/users/me`, {
        method: 'GET',
        headers: this._headers
    })
  }

  setUserInfo (data) {
    return this._getRequest(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: data.nameInput,
          about: data.about
        }),
      }
    )
  }

  changeAvatar (data) {
    return this._getRequest(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data['avatar-link'],
      }),
      }
    )
  }

  getInitialCards () {
      return this._getRequest(`${this._url}/cards`, {
          method: 'GET',
          headers: this._headers
      })
  }

  createCard (data) {
      return this._getRequest(`${this._url}/cards`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify(data)
      })
  }

  deleteCard (id) {
      return this._getRequest(`${this._url}/cards/${id}`, {
          method: 'DELETE',
          headers: this._headers
      })
  }

  setlike (id) {
    return this._getRequest(`${this._url}/cards/${id}/likes`, {
        method: 'PUT',
        headers: this._headers,
    })
  }

  removeLike (id) {
    return this._getRequest(`${this._url}/cards/${id}/likes`, {
        method: 'DELETE',
        headers: this._headers,
    })
  }
}
