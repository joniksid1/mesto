import Popup from "./Popup.js";

export default class PopupSubmit extends Popup {
  constructor({ popupSelector, formSubmitter }) {
    super(popupSelector);
    this.modalWindow = document.querySelector(popupSelector);
    this.formSubmitter = formSubmitter;
    this._popupForm = this.modalWindow.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
    this.modalWindow.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.formSubmitter();
    });
  };

}
