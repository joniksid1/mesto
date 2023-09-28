import './index.css';
import Card from '../components/Card.js';
import {
  validationConfig,
  formValidators,
  FormValidator
} from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupSubmit from '../components/PopupSubmit';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {
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
} from '../utils/constants.js';

const createCard = (data, cardTemplate, handleCardClick) => {
  const cardElement = new Card(
      data,
      cardTemplate,
      handleCardClick,
      {
        handleDeleteCard: () => {
          popupDeleteCard.submitDeleteCard(cardElement);
        }
      }
    );
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

const userInfo = new UserInfo({ nameSelector: profileTitleSelector, jobSelector: profileCaptionSelector });

// Экземпляр поп-апа редактирования профиля

const popupProfileEdit = new PopupWithForm( {
  popupSelector: '.edit-popup',
  formSubmitter: (data) => {
    api.setUserInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
      })
      .catch((error) => {
        console.log(error);
      });
    popupProfileEdit.close();
    }
  });

// Экземпляр поп-апа добавления новой карточки

const popupCardAdd = new PopupWithForm( {
  popupSelector: '.add-popup',
  formSubmitter: (data, ) => {
    api.createCard(data)
      .then((data) => {
        createCard(data, cardTemplate, handleCardClick);
      })
      .catch((error) => {
        console.log(error);
      });
    popupCardAdd.close();
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
    }).catch((error) => {
      console.log(error);
    })
    popupDeleteCard.close();
    }
});

// Экземпляр поп-апа редактирования аватарки

const popupAvatarChange = new PopupSubmit( {
  popupSelector: '.avatar-popup',
  formSubmitter: () => {

  }
});

// Обработчики событий открытия поп-апов

popupOpenButtonEdit.addEventListener('click', function () {
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;
  formValidators['profile'].resetValidation();
  popupProfileEdit.open();
});

popupOpenButtonAdd.addEventListener('click', function () {
  popupCardAdd.open();
  formValidators['add'].resetValidation();
});

profileAvatar.addEventListener('click', function () {
  popupAvatarChange.open();
});

popupProfileEdit.setEventListeners();

popupCardAdd.setEventListeners();

popupImage.setEventListeners();

popupDeleteCard.setEventListeners();

popupAvatarChange.setEventListeners();

api.getInitialCards()
  .then((data) => {
    cardList.renderInitialItems(data);
  })
  .catch((error) => {
    console.log(error);
  });

api.getUserInfo()
  .then((data) => {
    profileTitle.textContent = data.name;
    profileCaption.textContent = data.about;
    profileAvatar.src = data.avatar;
  })
  .catch((error) => {
    console.log(error);
  });


