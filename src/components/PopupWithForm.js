import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, formSubmitter }) {
    super(popupSelector);
    this.modalWindow = document.querySelector(popupSelector);
    this.formSubmitter = formSubmitter;
    this._inputList = this.modalWindow.querySelectorAll('.popup__input');
    this._popupForm = this.modalWindow.querySelector('.popup__form');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  //   this._formValues = {};
  //   this._inputList.forEach(input => {
  //     if (input.name === 'place-name') {
  //       this._formValues['name'] = input.value;
  //     } else if (input.name === 'image-link') {
  //       this._formValues['link'] = input.value;
  //     }
  //   });
  //   return this._formValues;
  // }

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
}
