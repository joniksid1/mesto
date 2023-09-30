export default class Section {
  constructor({ renderer }, containerSelector, data) {
    this._elementsContainer = document.querySelector(containerSelector);
    this.renderer = renderer;
    this.data = data;
  }

  addItem(element) {
    this._elementsContainer.prepend(element);
  }

  renderInitialItems(items, handleDeleteCard) {
    items.reverse().forEach((item) => {
      this.renderer(item, handleDeleteCard);
    });

  }
}
