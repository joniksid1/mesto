export default class Card {
  constructor(data, cardTemplate, handleCardClick,{ handleDeleteCard }, { setLike }, { deleteLike }, userId) {
    this.handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._setLike = setLike;
    this._deleteLike = deleteLike;
    this._cardTitle = data.name;
    this._imageLink = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._owner = data.owner;
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

  likeCard() {
    this._likeButton.classList.add('elements__heart_active');
  };

  removeLike() {
    this._likeButton.classList.remove('elements__heart_active');
  }

  _checkLike() {
    this._likes.forEach(like => {
      if (like._id === this._userId) {
        this._likeButton.classList.add('elements__heart_active');
      }
    })
  }

  deleteCard() {
    this._cardElement.remove();
  };

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('elements__heart_active')) {
        this._deleteLike(this._id, this._likeCounter);
      } else this._setLike(this._id, this._likeCounter);
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
    this._checkLike();
    return this._card;
  };
}
