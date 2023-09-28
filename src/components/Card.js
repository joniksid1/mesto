export default class Card {
  constructor(data, cardTemplate, handleCardClick,{ handleDeleteCard }, userId) {
    this.handleCardClick = handleCardClick;
    this._cardTitle = data.name;
    this._imageLink = data.link;
    this._id = data._id;
    this._userId = userId;
    this._owner = data.owner;
    this._handleDeleteCard = handleDeleteCard;
    this._card = cardTemplate.content.cloneNode(true);
    this._cardImageElement = this._card.querySelector('.elements__image');
    this._cardTitleElement = this._card.querySelector('.elements__title');
    this._likeButton = this._card.querySelector('.elements__heart');
    this._likeCounter = this._card.querySelector('.elements__like-counter');
    this._deleteButton = this._card.querySelector('.elements__delete');
  }

  handleDeleteCheck() {
    if (this._owner._id !== this._userId) {
      this._deleteButton.remove();
    }
  }

  _likeCard(evt) {
    evt.target.classList.toggle('elements__heart_active');;
  };

  deleteCard() {
    this._cardElement.remove();
  };

  _setEventListeners() {
    this._likeButton.addEventListener('click', (evt) => {
      this._likeCard(evt);
    });

    this._deleteButton.addEventListener('click', (evt) => {
      this._cardElement = evt.target.closest('.elements__list-item');
      this._handleDeleteCard();
    });

    this._cardImageElement.addEventListener('click', () => {
    this.handleCardClick(this._imageLink, this._cardTitle);
    });
  }

  createCardByTemplate(data) {
    this._cardTitleElement.textContent = this._cardTitle;
    this._cardImageElement.src = this._imageLink;
    this._likeCounter.textContent = data.likes.length;
    this._cardImageElement.alt = `Изображение с местом: ${this._cardTitle}`;
    this._setEventListeners();
    return this._card;
  };
}
