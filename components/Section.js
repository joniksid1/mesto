export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._elementsContainer = document.querySelector(containerSelector);
    this._items = items;
    this.renderer = renderer;
  }

  addItem(element) {
    this._elementsContainer.prepend(element);
  }

  renderItem(item) {
    item ? this.renderer(item) : this.renderer();
  }

  renderInitialItems() {
    this._items.forEach((item) => {
    this.renderItem(item);
  });

  }
}
