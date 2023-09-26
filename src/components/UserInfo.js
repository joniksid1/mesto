export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this.nameSelector = nameSelector;
    this.jobSelector = jobSelector;
    this.profileTitle = document.querySelector(this.nameSelector);
    this.profileCaption = document.querySelector(this.jobSelector);
  }

  getUserInfo() {
    return {
      name: this.profileTitle.textContent,
      job: this.profileCaption.textContent
    };
  }

  setUserInfo({ nameInput, about }) {
    this.profileTitle.textContent = nameInput;
    this.profileCaption.textContent = about;
  }

}
