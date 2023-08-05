// Названия переменных:
// форма добавления - addFormElement
// инпуты добавления - placeName и imageLink
// форма профайла - editFormElement
// инпуты профайла - nameInput и jobInput

// дополнительно для поп-апа добавления карточки

const imageLinkError = addFormElement.querySelector('.popup__input-error_type_image-link');
const placeNameError = addFormElement.querySelector('.popup__input-error_type_place-name');

// дополнительно для поп-апа редактирования профиля

const nameInputError = editFormElement.querySelector('.popup__input-error_type_name');
const jobInputError = editFormElement.querySelector('.popup__input-error_type_job');

const checkInputValidity = (inputElement) => {
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  if (inputElement.checkValidity()) {
    errorElement.textContent = '';
  } else {
    errorElement.textContent = inputElement.validationMessage;
  }
};

const validateForm = (evt) => {
  evt.preventDefault();
  checkInputValidity(placeName);
  checkInputValidity(imageLink);
  checkInputValidity(nameInput);
  checkInputValidity(jobInput);
  const buttonElement = evt.currentTarget.querySelector('.popup__button');
  if (evt.currentTarget.checkValidity()) {
    setButtonState(true, buttonElement);
  } else {
    setButtonState(false, buttonElement);
  }
};

const setButtonState = (isActive, buttonElement) => {
  if (isActive) {
    buttonElement.removeAttribute('disabled');
  } else {
    buttonElement.setAttribute('disabled', true);
  }
};

const enableValidation = () => {
  addFormElement.addEventListener('input', validateForm);
  addFormElement.addEventListener('submit', validateForm);
  editFormElement.addEventListener('input', validateForm);
  editFormElement.addEventListener('submit', validateForm);
}

enableValidation();
