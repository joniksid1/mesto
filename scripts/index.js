import { initialCards, Card } from './Card.js';

// Переменные карточек

const elementsContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('.cards');

// Переменные для редактирования профиля

const popupEdit = document.querySelector('.edit-popup');
const popupOpenButtonEdit = document.querySelector('.profile__edit-button');
const popupCloseButtonEdit = popupEdit.querySelector('.edit-popup__close-button');
const formElementEdit = popupEdit.querySelector('.edit-popup__form');
const nameInput = formElementEdit.querySelector('.popup__input_type_name');
const jobInput = formElementEdit.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileCaption = document.querySelector('.profile__caption');

// Переменные поп-апа добавление карточек

const popupAdd = document.querySelector('.add-popup');
const formElementAdd = popupAdd.querySelector('.add-popup__form');
const popupOpenButtonAdd = document.querySelector('.profile__add-button');
const popupCloseButtonAdd = popupAdd.querySelector('.add-popup__close-button')
const placeName = popupAdd.querySelector('.popup__input_type_place-name');
const imageLink = popupAdd.querySelector('.popup__input_type_image-link');

// Переменные поп-апа с картинкой

const popupImage = document.querySelector('.image-popup');
const popupCloseButtonImage = document.querySelector('.image-popup__close-button');
const popupImageImage = popupImage.querySelector('.image-popup__image');
const popupImageCaption = popupImage.querySelector('.image-popup__caption');

//  Функции открытия и закрытия поп-апов

function openModalWindow(modalWindow) {
  modalWindow.classList.add('popup_opened');
  modalWindow.addEventListener('click', closePopupOnOverlay);
  document.addEventListener('keydown', closePopupOnEscape);
};

function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_opened');
  modalWindow.removeEventListener('click', closePopupOnOverlay);
  document.removeEventListener('keydown', closePopupOnEscape);
};

// Открытие и закрытие поп-апа на клавишу Esc/Оверлей

const closePopupOnEscape = (evt) => {
  if (evt.key === 'Escape') {
    closeModalWindow(evt.currentTarget.querySelector('.popup_opened'));
  }
}

const closePopupOnOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closeModalWindow(evt.currentTarget);
  }
}

// Функция вставки данных в профиль

function submitEditProfileForm(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileCaption.textContent = jobValue;
  closeModalWindow(popupEdit);
}

// Отрисовка изначальных карточек

const renderInitialCards = () => {
  initialCards.forEach((item) => {
    const card = new Card(item, cardTemplate);
    elementsContainer.append(card.createCardByTemplate());
  })
};

// Функция добавления новых карточек

const addNewCard = (evt) => {
  evt.preventDefault();
  const newElement = new Card({name: placeName.value, link: imageLink.value}, cardTemplate);
  elementsContainer.prepend(newElement.createCardByTemplate());
  closeModalWindow(popupAdd);
  formElementAdd.reset();
};

// Обработчик события изменения данных профиля

formElementEdit.addEventListener('submit', submitEditProfileForm);

// Обработчик события добавления новой карточки

formElementAdd.addEventListener('submit', addNewCard);

// Обработчики событий открытия-закрытия поп-апов

popupOpenButtonEdit.addEventListener('click', function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileCaption.textContent;
  openModalWindow(popupEdit);
});

popupCloseButtonEdit.addEventListener('click', function () {
  closeModalWindow(popupEdit);
});

popupOpenButtonAdd.addEventListener('click', function () {
  openModalWindow(popupAdd);
});

popupCloseButtonAdd.addEventListener('click', function () {
  closeModalWindow(popupAdd);
});

popupCloseButtonImage.addEventListener('click', function () {
  closeModalWindow(popupImage);
});

renderInitialCards();
