// Конфиг с селекторами и классами для валидации форм

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorSelector: '.popup__input-error_type_',
  inputErrorFrameClass: 'popup__input_error-frame',
};

// Объект с экземплярами валидаторов всех форм

export const formValidators = {}

export class FormValidator {
  constructor(validationConfig, form) {
    this._form = form;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inputErrorSelector = validationConfig.inputErrorSelector;
    this._inputErrorFrameClass = validationConfig.inputErrorFrameClass;
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
  }

  _checkInputValidity(input) {
    if (input.checkValidity()) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  };

  _showInputError(input) {
    const errorElement = this._form.querySelector(`${this._inputErrorSelector}${input.name}`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorFrameClass);
  };

  _hideInputError(input) {
    const errorElement = this._form.querySelector(`${this._inputErrorSelector}${input.name}`);
    errorElement.textContent = '';
    input.classList.remove(this._inputErrorFrameClass);
  };

  _setButtonState(isActive) {
    if (isActive) {
      this._buttonElement.removeAttribute('disabled');
    } else {
      this._buttonElement.setAttribute('disabled', true);
    }
  };

  _preventDefault(evt) {
    evt.preventDefault();
  };

  _setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      this._setButtonState(false);
      this._preventDefault(evt);
      });
      this._inputList.forEach((input) => {
        input.addEventListener('input', () => {
          this._checkInputValidity(input);
          if (this._form.checkValidity()) {
            this._setButtonState(true);
          } else {
            this._setButtonState(false);
          }
        });
      });
  };

  resetValidation() {
    this._setButtonState(false);
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  };

  enableValidation() {
    this._setEventListeners();
  };

};



