import { initialCards, Card } from './Card.js';
import { validationConfig, formValidators, FormValidator } from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

// Переменная с формами

// const forms = document.querySelectorAll(validationConfig.formSelector);

// Переменные карточек

const cardTemplate = document.querySelector('.cards');

// Переменные для редактирования профиля

// const popupEdit = document.querySelector('.edit-popup');
const popupOpenButtonEdit = document.querySelector('.profile__edit-button');
// const formElementEdit = document.forms['profile'];
// const nameInput = formElementEdit.querySelector('.popup__input_type_name');
// const jobInput = formElementEdit.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileCaption = document.querySelector('.profile__caption');

// Кнопки закрытия в поп-апах

// const closeButtons = document.querySelectorAll('.popup__close-button');

// Переменные поп-апа добавление карточек

// const popupAdd = document.querySelector('.add-popup');
// const formElementAdd = document.forms['add'];
const popupOpenButtonAdd = document.querySelector('.profile__add-button');
// const placeName = popupAdd.querySelector('.popup__input_type_place-name');
// const imageLink = popupAdd.querySelector('.popup__input_type_image-link');

// Переменные поп-апа с картинкой

// const popupImage = document.querySelector('.image-popup');
// const popupImageElement = popupImage.querySelector('.image-popup__image');
// const popupImageCaption = popupImage.querySelector('.image-popup__caption');

//  Функции открытия и закрытия поп-апов

// function openCardModalWindow(image, caption) {
//   openModalWindow(popupImage);
//   popupImageElement.src = image;
//   popupImageElement.alt = `Изображение с местом: ${caption}`;
//   popupImageCaption.textContent = caption;
// }

// function openModalWindow(modalWindow) {
//   modalWindow.classList.add('popup_opened');
//   modalWindow.addEventListener('click', closePopupOnOverlay);
//   document.addEventListener('keydown', closePopupOnEscape);
// };

// function closeModalWindow(modalWindow) {
//   modalWindow.classList.remove('popup_opened');
//   modalWindow.removeEventListener('click', closePopupOnOverlay);
//   document.removeEventListener('keydown', closePopupOnEscape);
// };

// Открытие и закрытие поп-апа на клавишу Esc/Оверлей

// const closePopupOnEscape = (evt) => {
//   if (evt.key === 'Escape') {
//     closeModalWindow(evt.currentTarget.querySelector('.popup_opened'));
//   }
// }

// const closePopupOnOverlay = (evt) => {
//   if (evt.target === evt.currentTarget) {
//     closeModalWindow(evt.currentTarget);
//   }
// }

// Экземпляр отрисовки изначальных карточек

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = new Card(item, cardTemplate); //был ещё , openCardModalWindow, нужна привязка с классом Popup
    cardList.addItem(cardElement.createCardByTemplate());
    }
  }, '.elements__list');

// Экземпляр отрисовки новой карточки

const newCard = new Section({
  items: {},
  renderer: () => {
    const cardElement = new Card({name: placeName.value, link: imageLink.value}, cardTemplate, openCardModalWindow);
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

function submitEditProfileForm({ formValues }) {
  profileTitle.textContent = formValues[name];
  profileCaption.textContent = formValues[job];
  popupProfileEdit.close();
}

const popupCardAdd = new PopupWithForm('.add-popup', submitAddProfileForm);

function submitAddProfileForm() {
  newCard.renderItem();
  popupCardAdd.close();
}

// Обработчик события изменения данных профиля

// formElementEdit.addEventListener('submit', submitEditProfileForm);

// Обработчик события добавления новой карточки

// formElementAdd.addEventListener('submit', submitAddProfileForm);

// Обработчики событий открытия-закрытия поп-апов

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

// closeButtons.forEach((button) => {
//   const popupCurrent = button.closest('.popup');
//   button.addEventListener('click', () => closeModalWindow(popupCurrent));
// });

cardList.renderInitialItems();

