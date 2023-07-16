//Переменные для поп-апа редактирования профиля
let editPopup = document.querySelector('.popup_type_edit');
let editPopupOpenButton = document.querySelector('.profile__edit-button');
let editPopupCloseButton = editPopup.querySelector('.popup__close-button_type_edit');
let editFormElement = editPopup.querySelector('.popup__form_type_edit');
let nameInput = editFormElement.querySelector('.popup__input_type_name');
let jobInput = editFormElement.querySelector('.popup__input_type_job');
let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__caption');

//Переменные поп-апа добавление карточек

let addPopup = document.querySelector('.popup_type_add')
let addPopupOpenButton = document.querySelector('.profile__add-button');
let addPopupCloseButton = addPopup.querySelector('.popup__close-button_type_add')


// Скрипты открытия и закрытия поп-апа редактирования профиля

function editPopupOpen() {
  editPopup.classList.toggle('popup_opened');
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
};

function editPopupClose() {
  editPopup.classList.toggle('popup_opened');
};

// Скрипты открытия и закрытия поп-апа добавления карточек

function addPopupOpenClose() {
  addPopup.classList.toggle('popup_opened');
};

// Скрипт вставки данных в профиль

function handleFormSubmit(evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    name.textContent = nameValue;
    job.textContent = jobValue;
    editPopupClose();
  }

// Обработчики событий поп-апа редактирования профиля

editPopupOpenButton.addEventListener('click', editPopupOpen);
editPopupCloseButton.addEventListener('click', editPopupClose);
editFormElement.addEventListener('submit', handleFormSubmit);

// Обработчики событий поп-апа добавления карточек

addPopupOpenButton.addEventListener('click', addPopupOpenClose);
addPopupCloseButton.addEventListener('click', addPopupOpenClose);
