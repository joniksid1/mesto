import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, formSubmitter }) {
    super(popupSelector);
    this.modalWindow = document.querySelector(popupSelector);
    this._button = this.modalWindow.querySelector('.popup__button');
    this._buttonText = this._button.textContent;
    this.formSubmitter = formSubmitter;
    this._inputList = this.modalWindow.querySelectorAll('.popup__input');
    this._popupForm = this.modalWindow.querySelector('.popup__form');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.id] = input.value;
    });
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach(input => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this.modalWindow.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.formSubmitter(this._getInputValues());
    });
  };

  close() {
    super.close();
    this._popupForm.reset();
  };

  showLoader() {
    this._button.textContent = 'Сохранение...';
  }

  removeLoader() {
    this._button.textContent = this._buttonText;
  }
}
