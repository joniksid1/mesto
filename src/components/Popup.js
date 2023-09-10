export default class Popup {
  constructor({ popupSelector }) {
    this.popupSelector = popupSelector;
    this.modalWindow = document.querySelector(popupSelector);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close(evt.currentTarget.querySelector('.popup_opened'));
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close(evt.currentTarget);
    }
  }

  open() {
    this.modalWindow.classList.add('popup_opened');
    this.modalWindow.addEventListener('click', this._handleOverlayClose.bind(this));
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  };

  close() {
    this.modalWindow.classList.remove('popup_opened');
    this.modalWindow.removeEventListener('click', this._handleOverlayClose.bind(this));
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  };

  setEventListeners() {
    const closeButton = this.modalWindow.querySelector('.popup__close-button');
    closeButton.addEventListener('click', this.close.bind(this));
  };

}
