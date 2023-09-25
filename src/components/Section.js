export default class Section {
  constructor({ renderer }, containerSelector) {
    this._elementsContainer = document.querySelector(containerSelector);
    this.renderer = renderer;
  }

  addItem(element) {
    this._elementsContainer.prepend(element);
  }

  renderInitialItems(items) {
    items.forEach((item) => {
      this.renderer(item);
    });

  }
}
