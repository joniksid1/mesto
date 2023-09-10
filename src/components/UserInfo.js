export default class UserInfo {
  constructor({ name, job }) {
    this.name = name.textContent;
    this.job = job.textContent;
  }

  getUserInfo() {
    const userInfo = {};
    userInfo.name =  this.name;
    userInfo.job =  this.job;
    return userInfo;
  }

  setUserInfo({ name, job }, profileTitle, profileCaption) {
    profileTitle.textContent = name;
    profileCaption.textContent = job;
  }

}
