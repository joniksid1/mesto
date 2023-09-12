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

  setUserInfo({ name, job}) {
    this.profileTitle.textContent = name;
    this.profileCaption.textContent = job;
  }

}
