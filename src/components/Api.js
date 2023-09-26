export default class Api {
  constructor({ url, headers }) {
      this._url = url;
      this._headers = headers;
  }

  _getRequest (url, options) {
      return fetch(url, options)
      .then((response) => {
          if(response.ok) {
              return response.json()
          }

          throw new Error('Что-то пошло не так...')
      })
      .catch((error) => {
          console.log(error);
      })
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
      return this._getRequest(`${this._url}/tasks/${id}`, {
          method: 'DELETE',
          headers: this._headers
      })
  }
}
