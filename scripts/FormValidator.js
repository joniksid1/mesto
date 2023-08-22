class FormValidator {
  constructor(validationConfig) {
    this.formSelector = validationConfig.formSelector;
    this.inputSelector = validationConfig.inputSelector;
    this.submitButtonSelector = validationConfig.submitButtonSelector;
    this.inputErrorSelector = validationConfig.inputErrorSelector;
    this.inputErrorFrameClass = validationConfig.inputErrorFrameClass;
  }

  _checkInputValidity(input, form) {
    const errorElement = form.querySelector(`${this.inputErrorSelector}${input.name}`);
    if (input.checkValidity()) {
      this._hideInputError(input, errorElement);
    } else {
      this._showInputError(input, errorElement);
    }
  };

  _showInputError(input, errorElement) {
    errorElement.textContent = input.validationMessage;
    input.classList.add(this.inputErrorFrameClass);
  }

  _hideInputError(input, errorElement) {
    errorElement.textContent = '';
    input.classList.remove(this.inputErrorFrameClass);
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

  _setEventListeners(forms) {
    forms.forEach((form) => {
      const buttonElement = form.querySelector(this.submitButtonSelector);
      form.addEventListener('submit', (evt) => {
        this._setButtonState(false, buttonElement);
        this._preventDefault(evt);
      });
      const inputs = Array.from(form.querySelectorAll(this.inputSelector));
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
    });
  };

  enableValidation() {
    const forms = Array.from(document.querySelectorAll(this.formSelector));
    this._setEventListeners(forms);
  };

}

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorSelector: '.popup__input-error_type_',
  inputErrorFrameClass: 'popup__input_error-frame',
};

const formValidator = new FormValidator(validationConfig);

formValidator.enableValidation();
