import { initialCards, Card } from './Card.js';
import { validationConfig, formValidators, FormValidator } from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

const cardTemplate = document.querySelector('.cards');

// Переменные для редактирования профиля

const popupOpenButtonEdit = document.querySelector('.profile__edit-button');
const formElementEdit = document.forms['profile'];
const nameInput = formElementEdit.querySelector('.popup__input_type_name');
const jobInput = formElementEdit.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileCaption = document.querySelector('.profile__caption');

// Переменные поп-апа добавление карточек

const popupOpenButtonAdd = document.querySelector('.profile__add-button');

// Экземпляр отрисовки изначальных карточек

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = new Card(item, cardTemplate, handleCardClick);
    cardList.addItem(cardElement.createCardByTemplate());
    }
  }, '.elements__list');

// Экземпляр отрисовки новой карточки

const newCard = new Section({
  items: {},
  renderer: () => {
    const cardElement = new Card({name: placeName.value, link: imageLink.value}, cardTemplate, handleCardClick);
    cardList.addItem(cardElement.createCardByTemplate());
  }
  }, '.elements__list');

// Функция валидации форм

const startValidate = (validator) => {
  validator.startValidate();
}

const createValidators = (validationConfig, formElement) => {
  const validator = new FormValidator(validationConfig, formElement);
  const formName = formElement.getAttribute('name');
  formValidators[formName] = validator;
  startValidate(validator);
}

const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector))
  formList.forEach((formElement) => {
    createValidators(validationConfig, formElement);
  });
};

enableValidation(validationConfig);

// Получение обновлённых данных пользователя

const getUserInfo = (profileTitle, profileCaption) => {
  const newUserInfo = new UserInfo(profileTitle, profileCaption);
  const userData = newUserInfo.getUserInfo();
  return userData;
};

// Экземпляр данных пользователя для отображения на странице

const userInfo = new UserInfo(profileTitle.textContent, profileCaption.textContent);

// Экземпляр поп-апа редактирования профиля

const popupProfileEdit = new PopupWithForm('.edit-popup', submitEditProfileForm);

function submitEditProfileForm( { name, job } ) {
  userInfo.setUserInfo({ name, job }, profileTitle, profileCaption);
  popupProfileEdit.close();
}

// Экземпляр поп-апа добавления новой карточки

const popupCardAdd = new PopupWithForm('.add-popup', submitAddProfileForm);

function submitAddProfileForm() {
  newCard.renderItem();
  popupCardAdd.close();
}

const popupImage = new PopupWithImage('.image-popup');

function handleCardClick (image, caption) {
  popupImage.open(image, caption);
}

// Обработчики событий открытия поп-апов

popupOpenButtonEdit.addEventListener('click', function () {
  const userData = getUserInfo(profileTitle.textContent, profileCaption.textContent);
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  formValidators['profile'].resetValidation();
  popupProfileEdit.open();
});

popupOpenButtonAdd.addEventListener('click', function () {
  popupCardAdd.open();
  formValidators['add'].resetValidation();
});

cardList.renderInitialItems();

popupProfileEdit.setEventListeners();

popupCardAdd.setEventListeners();

popupImage.setEventListeners();