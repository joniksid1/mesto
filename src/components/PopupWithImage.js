import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.modalWindow = document.querySelector(popupSelector);
    this.popupImageElement = this.modalWindow.querySelector('.image-popup__image');
    this.popupImageCaption = this.modalWindow.querySelector('.image-popup__caption');
  }

  open(image, caption) {
    super.open();
    this.popupImageElement.src = image;
    this.popupImageElement.alt = `Изображение с местом: ${caption}`;
    this.popupImageCaption.textContent = caption;
  }

}
