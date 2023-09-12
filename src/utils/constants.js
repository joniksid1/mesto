const moscow = new URL('../images/moscow.jpg', import.meta.url);
const altay = new URL('../images/altai.jpg', import.meta.url);
const baykal = new URL('../images/baikal.jpg', import.meta.url);
const kamchatka = new URL('../images/kamchatka.jpg', import.meta.url);
const karelia = new URL('../images/karelia.jpg', import.meta.url);
const arkhyz = new URL('../images/arkhyz.jpg', import.meta.url)

const cardTemplate = document.querySelector('.cards');

// Переменные для редактирования профиля

const popupOpenButtonEdit = document.querySelector('.profile__edit-button');
const formElementEdit = document.forms['profile'];
const nameInput = formElementEdit.querySelector('.popup__input_type_name');
const jobInput = formElementEdit.querySelector('.popup__input_type_job');
const profileTitleSelector = '.profile__title';
const profileCaptionSelector = '.profile__caption';

// Переменные поп-апа добавление карточек

const popupOpenButtonAdd = document.querySelector('.profile__add-button');

// Данные стандартных карточек при загрузке

const initialCards = [
  {
    place: 'Москва',
    link: moscow
  },
  {
    place: 'Алтай',
    link: altay
  },
  {
    place: 'Байкал',
    link: baykal
  },
  {
    place: 'Камчатка',
    link: kamchatka
  },
  {
    place: 'Карелия',
    link: karelia
  },
  {
    place: 'Архыз',
    link: arkhyz
  }
];

export {
  cardTemplate,
  popupOpenButtonEdit,
  nameInput,
  jobInput,
  profileTitleSelector,
  profileCaptionSelector,
  popupOpenButtonAdd,
  initialCards
}
