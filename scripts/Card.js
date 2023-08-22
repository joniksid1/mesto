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
  constructor(data, cardTemplate) {
    this._cardTitle = data.name;
    this._imageLink = data.link;
    this._card = cardTemplate.content.cloneNode(true);
  }

  _likeCard(evt) {
    evt.target.classList.toggle('elements__heart_active');;
  };

  _deleteCard(evt) {
    const card = evt.target.closest(".elements__list-item");
    card.remove();
  };

  _setEventListeners() {
    const likeButton = this._card.querySelector('.elements__heart');
    likeButton.addEventListener('click', (evt) => {
      this._likeCard(evt);
    });

    const deleteButton = this._card.querySelector('.elements__delete');
    deleteButton.addEventListener('click', (evt) => {
      this._deleteCard(evt);
    });

    // cardImage.addEventListener('click', () => {
    //   popupImageImage.src = cardImage.src;
    //   popupImageCaption.textContent = cardTitle.textContent;
    //   openModalWindow(popupImage);
    // });
  }

  createCardByTemplate() {
    const cardTitle = this._card.querySelector('.elements__title');
    const cardImage = this._card.querySelector('.elements__image');
    cardTitle.textContent = this._cardTitle;
    cardImage.src = this._imageLink;
    this._setEventListeners();
    return this._card;
  };
}
