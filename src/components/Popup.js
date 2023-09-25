export default class Popup {
  constructor(popupSelector) {
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  open() {
    this.modalWindow.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

  close() {
    this.modalWindow.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };

  setEventListeners() {
    this.modalWindow.addEventListener('mouseup', (evt) => {
      const targetClassList = evt.target.classList;
      if (targetClassList.contains('popup') || targetClassList.contains('popup__close-button')) {
        this.close();
      }
    })
  }

}
