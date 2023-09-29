// const moscow = new URL('../images/moscow.jpg', import.meta.url);
// const altay = new URL('../images/altai.jpg', import.meta.url);
// const baykal = new URL('../images/baikal.jpg', import.meta.url);
// const kamchatka = new URL('../images/kamchatka.jpg', import.meta.url);
// const karelia = new URL('../images/karelia.jpg', import.meta.url);
// const arkhyz = new URL('../images/arkhyz.jpg', import.meta.url)

const cardTemplate = document.querySelector('.cards');

// Переменные для редактирования профиля

const popupOpenButtonEdit = document.querySelector('.profile__edit-button');
const formElementEdit = document.forms['profile'];
const nameInput = formElementEdit.querySelector('.popup__input_type_name');
const jobInput = formElementEdit.querySelector('.popup__input_type_job');
const profileTitleSelector = '.profile__title';
const profileCaptionSelector = '.profile__caption';
const profileTitle = document.querySelector(profileTitleSelector);
const profileCaption = document.querySelector(profileCaptionSelector);
const profileAvatar = document.querySelector('.profile__image');

// Переменные поп-апа добавление карточек

const popupOpenButtonAdd = document.querySelector('.profile__add-button');

// Конфиг с селекторами и классами для валидации форм

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorSelector: '.popup__input-error_type_',
  inputErrorFrameClass: 'popup__input_error-frame',
};

// Объект с экземплярами валидаторов всех форм

export const formValidators = {}

// // Данные стандартных карточек при загрузке

// const initialCards = [
//   {
//     place: 'Москва',
//     link: moscow
//   },
//   {
//     place: 'Алтай',
//     link: altay
//   },
//   {
//     place: 'Байкал',
//     link: baykal
//   },
//   {
//     place: 'Камчатка',
//     link: kamchatka
//   },
//   {
//     place: 'Карелия',
//     link: karelia
//   },
//   {
//     place: 'Архыз',
//     link: arkhyz
//   }
// ];

const apiOptions = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-76',
  headers: {
    authorization: '879fc354-cfc1-42a1-b8be-cb6ca897d345',
    "Content-Type": "application/json",
  },
};

export {
  cardTemplate,
  popupOpenButtonEdit,
  nameInput,
  jobInput,
  profileTitleSelector,
  profileCaptionSelector,
  popupOpenButtonAdd,
  apiOptions,
  profileTitle,
  profileCaption,
  profileAvatar
}
