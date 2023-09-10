import { initialCards, Card } from './Card.js';
import { validationConfig, formValidators, FormValidator } from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';


const cardTemplate = document.querySelector('.cards');

// Переменные для редактирования профиля

const popupOpenButtonEdit = document.querySelector('.profile__edit-button');
const formElementEdit = document.forms['profile'];
const nameInput = formElementEdit.querySelector('.popup__input_type_name');
const jobInput = formElementEdit.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileCaption = document.querySelector('.profile__caption');

// Переменные поп-апа добавление карточек

const formElementAdd = document.forms['add'];
const popupOpenButtonAdd = document.querySelector('.profile__add-button');
// const placeName = popupAdd.querySelector('.popup__input_type_place-name');
// const imageLink = popupAdd.querySelector('.popup__input_type_image-link');

// Переменные поп-апа с картинкой

// const popupImage = document.querySelector('.image-popup');
// const popupImageElement = popupImage.querySelector('.image-popup__image');
// const popupImageCaption = popupImage.querySelector('.image-popup__caption');

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

// Экземпляр поп-апа редактирования профиля

const popupProfileEdit = new PopupWithForm('.edit-popup', submitEditProfileForm);

function submitEditProfileForm( { name, job } ) {
  profileTitle.textContent = name;
  profileCaption.textContent = job;
  popupProfileEdit.close();
}

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
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileCaption.textContent;
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
