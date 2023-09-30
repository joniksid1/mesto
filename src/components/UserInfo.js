export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this.profileTitle = document.querySelector(nameSelector);
    this.profileCaption = document.querySelector(jobSelector);
    this.profileAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this.profileTitle.textContent,
      job: this.profileCaption.textContent
    };
  }

  setUserInfo({ name, about, avatar, _id }) {
    this.profileTitle.textContent = name;
    this.profileCaption.textContent = about;
    this.profileAvatar.src = avatar;
    this.userId = _id;
  }

}
