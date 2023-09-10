export default class UserInfo {
  constructor(name, job) {
    this.name = name;
    this.job = job;
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
