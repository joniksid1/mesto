// Названия переменных:
// форма добавления - addFormElement
// инпуты добавления - placeName и imageLink
// форма профайла - editFormElement
// инпуты профайла - nameInput и jobInput

// дополнительно для поп-апа добавления карточки

const addPopupButton = addFormElement.querySelector('.add-popup__button');
const imageLinkError = addFormElement.querySelector('.popup__input-error_type_image-link');
const placeNameError = addFormElement.querySelector('.popup__input-error_type_place-name');

// дополнительно для поп-апа редактирования профиля

const editPopupButton = editFormElement.querySelector('.edit-popup__button');
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
  if (addFormElement.checkValidity()) {
    setButtonState(true);
  } else {
    setButtonState(false);
  }
};

const setButtonState = (isActive) => {
  if (isActive) {
    addPopupButton.removeAttribute('disabled');
  } else {
    addPopupButton.setAttribute('disabled', true);
  }
};

addFormElement.addEventListener('input', validateForm);
addFormElement.addEventListener('submit', validateForm);

