const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorSelector: '.popup__input-error_type_',
  inputErrorFrameClass: 'popup__input_error-frame',
};

const checkInputValidity = (input, validationData, form, inputErrorFrameClass) => {
  const errorElement = form.querySelector(`${validationData.inputErrorSelector}${input.name}`);
  if (input.checkValidity()) {
    hideInputError(input, errorElement, inputErrorFrameClass);
  } else {
    showInputError(input, errorElement, inputErrorFrameClass);
  }
};

const showInputError = (input, errorElement, inputErrorFrameClass) => {
  errorElement.textContent = input.validationMessage;
  input.classList.add(inputErrorFrameClass);
}

const hideInputError = (input, errorElement, inputErrorFrameClass) => {
  errorElement.textContent = '';
  input.classList.remove(inputErrorFrameClass);
};

const setButtonState = (isActive, buttonElement) => {
  if (isActive) {
    buttonElement.removeAttribute('disabled');
  } else {
    buttonElement.setAttribute('disabled', true);
  }
};

const preventDefault = (evt) => {
  evt.preventDefault();
};

const setEventListeners = (forms, validationData) => {
  forms.forEach((form) => {
    const buttonElement = form.querySelector(validationData.submitButtonSelector);
    form.addEventListener('submit', function(evt) {
      setButtonState(false, buttonElement);
      preventDefault(evt);
    });
    const inputs = Array.from(form.querySelectorAll(validationData.inputSelector));
    inputs.forEach((input) => {
      input.addEventListener('input', function () {
        checkInputValidity(input, validationData, form, validationData.inputErrorFrameClass);
        if (form.checkValidity()) {
          setButtonState(true, buttonElement);
        } else {
          setButtonState(false, buttonElement);
        }
      });
    });
  });
};

const enableValidation = (validationData) => {
  const forms = Array.from(document.querySelectorAll(validationData.formSelector));
  setEventListeners(forms, validationData);
};

enableValidation(validationConfig);
