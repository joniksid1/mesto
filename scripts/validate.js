const checkInputValidity = (input, validationData, form) => {
  const errorElement = form.querySelector(`${validationData.inputErrorClass}${input.name}`);
  if (input.checkValidity()) {
    errorElement.textContent = '';
  } else {
    errorElement.textContent = input.validationMessage;
  }
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
}

const setEventListeners = (validationData) => {
  const forms = Array.from(document.querySelectorAll(validationData.formSelector));
  forms.forEach((form) => {
    const buttonElement = form.querySelector(validationData.submitButtonSelector);
    form.addEventListener('submit', preventDefault);
    const inputs = Array.from(form.querySelectorAll(validationData.inputSelector));
    inputs.forEach((input) => {
      input.addEventListener('input', function () {
        checkInputValidity(input, validationData, form);
        if (form.checkValidity()) {
          console.log('success');
          setButtonState(true, buttonElement);
        } else {
          console.log('fail');
          setButtonState(false, buttonElement);
        }
      });
    });
  });
}

const enableValidation = (validationData) => {
  setEventListeners(validationData);
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: '.popup__input-error_type_',
});
