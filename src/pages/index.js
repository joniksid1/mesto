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
import PopupDeleteCard from '../components/PopupDeleteCard';
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

const createCard = (item, cardTemplate, handleCardClick) => {
  const cardElement = new Card(item, cardTemplate, handleCardClick);
  return cardList.addItem(cardElement.createCardByTemplate(item));
}

const api = new Api(apiOptions);

// Экземпляр отрисовки изначальных карточек

const cardList = new Section({
  renderer: (item) => {
    createCard(item, cardTemplate, handleCardClick);
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
  formSubmitter: (data) => {
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
}

// Экземпляр поп-апа удаления карточки

// const popupDeleteCard = new PopupDeleteCard( {
//   popupSelector: '.delete-popup',
//   formSubmitter: () => {

//   }
// });

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

popupProfileEdit.setEventListeners();

popupCardAdd.setEventListeners();

popupImage.setEventListeners();


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


