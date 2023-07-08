let page = document.querySelector('.page');
let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close-button');

function popupOpenClose() {
  popup.classList.toggle('popup__disabled');
};

function popupCloseOnOverlay(event) {
  if (event.target === event.currentTarget) {
    popup.classList.toggle('popup__disabled');
  }
};

popupOpenButton.addEventListener('click', popupOpenClose);
popupCloseButton.addEventListener('click', popupOpenClose);
popup.addEventListener('click', popupCloseOnOverlay);

let heartIcons = document.querySelectorAll('.elements__heart');

for (i = 0; i < heartIcons.length; i++) {
  let heartIcon = heartIcons[i];
  function heartToggle() {
    heartIcon.classList.toggle('elements__heart_active');
  }
  heartIcon.addEventListener('click', heartToggle);
};

let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.name-input');
let jobInput = formElement.querySelector('.job-input');

function handleFormSubmit(evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    let name = document.querySelector('.profile__title');
    let job = document.querySelector('.profile__caption');
    name.textContent = nameValue;
    job.textContent = jobValue;
  }

formElement.addEventListener('submit', handleFormSubmit);
handleFormSubmit();
