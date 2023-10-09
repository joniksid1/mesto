import './index.css';
import Card from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { validationConfig, formValidators } from "../utils/constants";
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupSubmit from '../components/PopupSubmit';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {
  cardTemplate,
  popupOpenButtonEdit,
  profileTitleSelector,
  profileCaptionSelector,
  avatarSelector,
  popupOpenButtonAdd,
  apiOptions,
  profileAvatar
} from '../utils/constants.js';

const createCard = (data, cardTemplate, handleCardClick) => {
  const cardElement = new Card(
      data,
      cardTemplate,
      handleCardClick,
      {
        handleDeleteCard: () => {
          popupDeleteCard.submitDeleteCard(cardElement);
          formValidators['delete'].setButtonState(true);
        }
      },
      {
        setLike: (id, likeCounter) => {
          api.setlike(id).then((data) => {
            cardElement.likeCard();
            likeCounter.textContent = data.likes.length;
          })
          .catch((error) => {
            console.log(error);
          })
        }
      },
      {
        deleteLike: (id, likeCounter) => {
          api.removeLike(id).then((data) => {
            cardElement.removeLike();
            likeCounter.textContent = data.likes.length;
          })
          .catch((error) => {
            console.log(error);
          })
        }
      },
      userInfo.userId
    );
  cardElement.handleDeleteCheck();
  return cardList.addItem(cardElement.createCardByTemplate(data));
}

const api = new Api(apiOptions);

// Экземпляр отрисовки изначальных карточек

const cardList = new Section({
  renderer: (data) => {
    createCard(data, cardTemplate, handleCardClick);
    }
  }, '.elements__list');

// Функция валидации форм

const createValidators = (validationConfig, formElement) => {
  const validator = new FormValidator(validationConfig, formElement);
  const formName = formElement.getAttribute('name');
  formValidators[formName] = validator;
  validator.startValidate();
}

const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector))
  formList.forEach((formElement) => {
    createValidators(validationConfig, formElement);
  });
};

enableValidation(validationConfig);

// Экземпляр данных пользователя для отображения на странице
const userInfo = new UserInfo({
  nameSelector: profileTitleSelector,
  jobSelector: profileCaptionSelector,
  avatarSelector: avatarSelector
});

// Экземпляр поп-апа редактирования профиля

const popupProfileEdit = new PopupWithForm( {
  popupSelector: '.edit-popup',
  formSubmitter: (data) => {
    popupProfileEdit.showLoader();
    api.setUserInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupProfileEdit.close();
      })
      .catch((error) => {
        console.log(`Статус ошибки: ${error.status}, Сообщение: ${error.message}`);
      }).finally(() => {
        popupProfileEdit.removeLoader();
      })
    }
  });

// Экземпляр поп-апа добавления новой карточки

const popupCardAdd = new PopupWithForm( {
  popupSelector: '.add-popup',
  formSubmitter: (data, ) => {
    popupCardAdd.showLoader();
    api.createCard(data)
      .then((data) => {
        console.log(data)
        createCard(data, cardTemplate, handleCardClick);
        popupCardAdd.close();
      })
      .catch((error) => {
        console.log(`Статус ошибки: ${error.status}, Сообщение: ${error.message}`);
      }).finally(() => {
        popupCardAdd.removeLoader();
      })
    }
});

const popupImage = new PopupWithImage('.image-popup');

function handleCardClick (image, caption) {
  popupImage.open(image, caption);
};

// Экземпляр поп-апа удаления карточки

const popupDeleteCard = new PopupSubmit( {
  popupSelector: '.delete-popup',
  formSubmitter: (card) => {
    api.deleteCard(card._id).then(() => {
      card.deleteCard();
      popupDeleteCard.close();
    }).catch((error) => {
      console.log(`Статус ошибки: ${error.status}, Сообщение: ${error.message}`);
    })
  }
});

// Экземпляр поп-апа редактирования аватарки

const popupAvatarChange = new PopupWithForm( {
  popupSelector: '.avatar-popup',
  formSubmitter: (data) => {
    popupAvatarChange.showLoader();
    api.changeAvatar(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupAvatarChange.close();
      })
      .catch((error) => {
        console.log(`Статус ошибки: ${error.status}, Сообщение: ${error.message}`);
      })
      .finally(() => {
        popupAvatarChange.removeLoader();
      })
  }
});

// Обработчики событий открытия поп-апов

popupOpenButtonEdit.addEventListener('click', function () {
  const data = userInfo.getUserInfo();
  popupProfileEdit.setInputValues(data);
  formValidators['profile'].resetValidation();
  popupProfileEdit.open();
});

popupOpenButtonAdd.addEventListener('click', function () {
  popupCardAdd.open();
  formValidators['add'].resetValidation();
});

profileAvatar.addEventListener('click', function () {
  popupAvatarChange.open();
  formValidators['avatar'].resetValidation();
});

popupProfileEdit.setEventListeners();

popupCardAdd.setEventListeners();

popupImage.setEventListeners();

popupDeleteCard.setEventListeners();

popupAvatarChange.setEventListeners();

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, data]) => {
      userInfo.setUserInfo(data);
      cardList.renderInitialItems(cards);
  })
  .catch((error) => {
    console.log(error);
  });

