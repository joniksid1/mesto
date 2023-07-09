let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close-button');
let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_job');
let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__caption');

// Скрипты открытия и закрытия поп-апа

function popupOpen() {
  popup.classList.toggle('popup_opened');
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
};

function popupClose() {
  popup.classList.toggle('popup_opened');
};

// Скрипт вставки данных в профиль

function handleFormSubmit(evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    name.textContent = nameValue;
    job.textContent = jobValue;
    popupClose();
  }

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', handleFormSubmit);
