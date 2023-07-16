// Стандартные карточки при загрузке

const initialCards = [
  {
    name: 'Москва',
    link: './images/moscow.jpg'
  },
  {
    name: 'Алтай',
    link: './images/altai.jpg'
  },
  {
    name: 'Байкал',
    link: './images/baikal.jpg'
  },
  {
    name: 'Камчатка',
    link: './images/kamchatka.jpg'
  },
  {
    name: 'Карелия',
    link: './images/karelia.jpg'
  },
  {
    name: 'Карачаево-Черкессия',
    link: './images/karachaevsk.jpg'
  }
];

// Переменные карточек

const elements = document.querySelector('.elements__list');

// Добавление стандартных карточек

function addInitialCards(title, link) {
  const cardsTemplate = document.querySelector('#cards').content;
  const card = cardsTemplate.querySelector('.elements__list-item').cloneNode(true);
  card.querySelector('.elements__title').textContent = title;
  card.querySelector('.elements__image').src = link;
  elements.append(card);
}

for (i = 0; i < initialCards.length; i++) {
  addInitialCards(initialCards[i].name, initialCards[i].link);
}

// Переменные для редактирования профиля

const editPopup = document.querySelector('.popup_type_edit');
const editPopupOpenButton = document.querySelector('.profile__edit-button');
const editPopupCloseButton = editPopup.querySelector('.popup__close-button_type_edit');
const editFormElement = editPopup.querySelector('.popup__form_type_edit');
const nameInput = editFormElement.querySelector('.popup__input_type_name');
const jobInput = editFormElement.querySelector('.popup__input_type_job');
const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__caption');

// Переменные поп-апа добавление карточек

const addPopup = document.querySelector('.popup_type_add')
const addPopupOpenButton = document.querySelector('.profile__add-button');
const addPopupCloseButton = addPopup.querySelector('.popup__close-button_type_add')

// Переменные для карточек

const likeButton = document.querySelector('.elements__heart');

// Функция открытия и закрытия поп-апа редактирования профиля

function editPopupOpen() {
  editPopup.classList.toggle('popup_opened');
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
};

function editPopupClose() {
  editPopup.classList.toggle('popup_opened');
};

// Функция открытия и закрытия поп-апа добавления карточек

function addPopupOpenClose() {
  addPopup.classList.toggle('popup_opened');
};

// Функция вставки данных в профиль

function handleFormSubmit(evt) {
    evt.preventDefault();
    const nameValue = nameInput.value;
    const jobValue = jobInput.value;
    name.textContent = nameValue;
    job.textContent = jobValue;
    editPopupClose();
  }

// Функция простановки лайка на карточку

likeButton.addEventListener('click', function setLike(event) {
  event.target.classList.toggle('elements__heart_active');
});

// Обработчики событий поп-апа редактирования профиля

editPopupOpenButton.addEventListener('click', editPopupOpen);
editPopupCloseButton.addEventListener('click', editPopupClose);
editFormElement.addEventListener('submit', handleFormSubmit);

// Обработчики событий поп-апа добавления карточек

addPopupOpenButton.addEventListener('click', addPopupOpenClose);
addPopupCloseButton.addEventListener('click', addPopupOpenClose);




// Добавление карточек по клику (ещё не работает)

const addFormElement = addPopup.querySelector('.popup__form_type_add');

function addCard(evt, title, link) {
  evt.preventDefault();
  const cardsTemplate = document.querySelector('#cards').content;
  const card = cardsTemplate.querySelector('.elements__list-item').cloneNode(true);
  card.querySelector('.popup__input_type_place-name').value = title;
  card.querySelector('.popup__input_type_image-link').src = link;
  elements.append(card);

  addPopupOpenClose();
}

addFormElement.addEventListener('submit', addCard);
