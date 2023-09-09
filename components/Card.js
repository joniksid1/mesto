// Данные стандартных карточек при загрузке

export const initialCards = [
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
    name: 'Архыз',
    link: './images/arkhyz.jpg'
  }
];

export class Card {
  constructor(data, cardTemplate, openCardModalWindow) {
    this._openCardModalWindow = openCardModalWindow;
    this._cardTitle = data.name;
    this._imageLink = data.link;
    this._card = cardTemplate.content.cloneNode(true);
    this._cardImageElement = this._card.querySelector('.elements__image');
    this._cardTitleElement = this._card.querySelector('.elements__title');
    this._likeButton = this._card.querySelector('.elements__heart');
    this._deleteButton = this._card.querySelector('.elements__delete');
  }

  _likeCard(evt) {
    evt.target.classList.toggle('elements__heart_active');;
  };

  _deleteCard(evt) {
    const card = evt.target.closest(".elements__list-item");
    card.remove();
  };

  _setEventListeners() {
    this._likeButton.addEventListener('click', (evt) => {
      this._likeCard(evt);
    });

    this._deleteButton.addEventListener('click', (evt) => {
      this._deleteCard(evt);
    });

    this._cardImageElement.addEventListener('click', () => {
      this._openCardModalWindow(this._imageLink, this._cardTitle);
    });
  }

  createCardByTemplate() {
    this._cardTitleElement.textContent = this._cardTitle;
    this._cardImageElement.src = this._imageLink;
    this._cardImageElement.alt = `Изображение с местом: ${this._cardTitle}`;
    this._setEventListeners();
    return this._card;
  };
}
