// Конфиг с селекторами и классами для валидации форм

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorSelector: '.popup__input-error_type_',
  inputErrorFrameClass: 'popup__input_error-frame',
};

export class FormValidator {
  constructor(validationConfig, form) {
    this._form = form;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inputErrorSelector = validationConfig.inputErrorSelector;
    this._inputErrorFrameClass = validationConfig.inputErrorFrameClass;
  }

  _checkInputValidity(input, form) {
    const errorElement = form.querySelector(`${this._inputErrorSelector}${input.name}`);
    if (input.checkValidity()) {
      this._hideInputError(input, errorElement);
    } else {
      this._showInputError(input, errorElement);
    }
  };

  _showInputError(input, errorElement) {
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorFrameClass);
  }

  _hideInputError(input, errorElement) {
    errorElement.textContent = '';
    input.classList.remove(this._inputErrorFrameClass);
  };

  _setButtonState(isActive, buttonElement) {
    if (isActive) {
      buttonElement.removeAttribute('disabled');
    } else {
      buttonElement.setAttribute('disabled', true);
    }
  };

  _preventDefault(evt) {
    evt.preventDefault();
  };

  _setEventListeners(form) {
    const buttonElement = form.querySelector(this._submitButtonSelector);
    form.addEventListener('submit', (evt) => {
      this._setButtonState(false, buttonElement);
      this._preventDefault(evt);
      });
      const inputs = Array.from(form.querySelectorAll(this._inputSelector));
      inputs.forEach((input) => {
        input.addEventListener('input', () => {
          this._checkInputValidity(input, form);
          if (form.checkValidity()) {
            this._setButtonState(true, buttonElement);
          } else {
            this._setButtonState(false, buttonElement);
          }
        });
      });
  };

  enableValidation() {
    this._setEventListeners(this._form);
  };

}


