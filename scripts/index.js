import { initialCards } from './Card.js';

// Переменные карточек

const elementsContainer = document.querySelector('.elements__list');
const cardsTemplate = document.querySelector('.cards');

// Функция создания карточки

const createCardByTemplate = (data) => {
  const card = cardsTemplate.content.cloneNode(true);
  const cardTitle = card.querySelector('.elements__title');
  const cardImage = card.querySelector('.elements__image');
  cardTitle.textContent = data.name;
  cardImage.src = data.link;

  const likeButton = card.querySelector('.elements__heart');
  likeButton.addEventListener('click', function(evt) {
    likeCard(evt);
  });

  const deleteButton = card.querySelector('.elements__delete');
  deleteButton.addEventListener('click', function(evt) {
    deleteCard(evt);
  });

  cardImage.addEventListener('click', function() {
    popupImageImage.src = cardImage.src;
    popupImageCaption.textContent = cardTitle.textContent;
    openModalWindow(popupImage);
  });

  return card;
};

// Функция отрисовки изначальных карточек

const renderInitialCards = () => {
  initialCards.forEach((item) => {
    elementsContainer.append(createCardByTemplate(item));
  })
};

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
const apopupOpenButtonAdd = document.querySelector('.profile__add-button');
const popupCloseButtonAdd = popupAdd.querySelector('.add-popup__close-button')
const placeName = popupAdd.querySelector('.popup__input_type_place-name');
const imageLink = popupAdd.querySelector('.popup__input_type_image-link');

// Переменные поп-апа с картинкой

const popupImage = document.querySelector('.image-popup');
const popupCloseButtonImage = document.querySelector('.image-popup__close-button');
const popupImageImage = popupImage.querySelector('.image-popup__image');
const popupImageCaption = popupImage.querySelector('.image-popup__caption');

// Функция лайка карточки

const likeCard = (evt) => {
    evt.target.classList.toggle('elements__heart_active');;
};

// Функция удаления карточки

const deleteCard = (evt) => {
  const card = evt.target.closest(".elements__list-item");
  card.remove();
};

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

// Функция вставки данных в профиль

function submitEditProfileForm(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileCaption.textContent = jobValue;
  closeModalWindow(popupEdit);
}

// Функция добавления новых карточек

const addNewCard = (evt) => {
  evt.preventDefault();
  const newElement = createCardByTemplate({name: placeName.value, link: imageLink.value});
  elementsContainer.prepend(newElement);
  closeModalWindow(popupAdd);
  formElementAdd.reset();
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

apopupOpenButtonAdd.addEventListener('click', function () {
  openModalWindow(popupAdd);
});

popupCloseButtonAdd.addEventListener('click', function () {
  closeModalWindow(popupAdd);
});

popupCloseButtonImage.addEventListener('click', function () {
  closeModalWindow(popupImage);
});

renderInitialCards();
