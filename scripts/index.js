// Переменные карточек

const elements = document.querySelector('.elements__list');
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
    imagePopupImage.src = cardImage.src;
    imagePopupCaption.textContent = cardTitle.textContent;
    openModalWindow(imagePopup);
  });

  return card;
};

// Функция отрисовки изначальных карточек

const renderInitialCards = () => {
  initialCards.forEach((item) => {
    elements.append(createCardByTemplate(item));
  })
};

// Переменные для редактирования профиля

const editPopup = document.querySelector('.edit-popup');
const editPopupOpenButton = document.querySelector('.profile__edit-button');
const editPopupCloseButton = editPopup.querySelector('.edit-popup__close-button');
const editFormElement = editPopup.querySelector('.edit-popup__form');
const nameInput = editFormElement.querySelector('.popup__input_type_name');
const jobInput = editFormElement.querySelector('.popup__input_type_job');
const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__caption');

// Переменные поп-апа добавление карточек

const addPopup = document.querySelector('.add-popup');
const addFormElement = addPopup.querySelector('.add-popup__form');
const addPopupOpenButton = document.querySelector('.profile__add-button');
const addPopupCloseButton = addPopup.querySelector('.add-popup__close-button')
const placeName = addPopup.querySelector('.popup__input_type_place-name');
const imageLink = addPopup.querySelector('.popup__input_type_image-link');

// Переменные поп-апа с картинкой

const imagePopup = document.querySelector('.image-popup');
const imagePopupCloseButton = document.querySelector('.image-popup__close-button');
const imagePopupImage = imagePopup.querySelector('.image-popup__image');
const imagePopupCaption = imagePopup.querySelector('.image-popup__caption');

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
};

function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_opened');
};

// Функция вставки данных в профиль

function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  name.textContent = nameValue;
  job.textContent = jobValue;
  closeModalWindow(editPopup);
}

// Функция добавления новых карточек

const addNewCard = (evt) => {
  evt.preventDefault();
  const newElement = createCardByTemplate({name: placeName.value, link: imageLink.value});
  elements.prepend(newElement);
  closeModalWindow(addPopup);
  addFormElement.reset();
};

// Обработчик события изменения данных профиля

editFormElement.addEventListener('submit', handleFormSubmit);

// Обработчик события добавления новой карточки

addFormElement.addEventListener('submit', addNewCard);

// Обработчики событий открытия-закрытия поп-апов

editPopupOpenButton.addEventListener('click', function () {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  openModalWindow(editPopup);
});

editPopupCloseButton.addEventListener('click', function () {
  closeModalWindow(editPopup);
});

addPopupOpenButton.addEventListener('click', function () {
  openModalWindow(addPopup);
});

addPopupCloseButton.addEventListener('click', function () {
  closeModalWindow(addPopup);
});

imagePopupCloseButton.addEventListener('click', function () {
  closeModalWindow(imagePopup);
});

renderInitialCards();
