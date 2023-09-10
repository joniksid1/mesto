const moscow = new URL('../images/moscow.jpg', import.meta.url);
const altay = new URL('../images/altai.jpg', import.meta.url);
const baykal = new URL('../images/baikal.jpg', import.meta.url);
const kamchatka = new URL('../images/kamchatka.jpg', import.meta.url);
const karelia = new URL('../images/karelia.jpg', import.meta.url);
const arkhyz = new URL('../images/arkhyz.jpg', import.meta.url)

// Данные стандартных карточек при загрузке

export const initialCards = [
  {
    name: 'Москва',
    link: moscow
  },
  {
    name: 'Алтай',
    link: altay
  },
  {
    name: 'Байкал',
    link: baykal
  },
  {
    name: 'Камчатка',
    link: kamchatka
  },
  {
    name: 'Карелия',
    link: karelia
  },
  {
    name: 'Архыз',
    link: arkhyz
  }
];

export class Card {
  constructor(data, cardTemplate, handleCardClick) {
    this.handleCardClick = handleCardClick;
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
    this.handleCardClick(this._imageLink, this._cardTitle);
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
