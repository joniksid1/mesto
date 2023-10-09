(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n,o,i,u,a){var c=o.handleDeleteCard,l=i.setLike,s=u.deleteLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.handleCardClick=n,this._handleDeleteCard=c,this._setLike=l,this._deleteLike=s,this._cardTitle=e.name,this._imageLink=e.link,this._likes=e.likes,this._id=e._id,this._userId=a,this._owner=e.owner,this._card=r.content.cloneNode(!0),this._cardImageElement=this._card.querySelector(".elements__image"),this._cardTitleElement=this._card.querySelector(".elements__title"),this._likeButton=this._card.querySelector(".elements__heart"),this._likeCounter=this._card.querySelector(".elements__like-counter"),this._deleteButton=this._card.querySelector(".elements__delete")}var r,n;return r=t,(n=[{key:"handleDeleteCheck",value:function(){this._owner._id!==this._userId&&this._deleteButton.remove()}},{key:"likeCard",value:function(){this._likeButton.classList.add("elements__heart_active")}},{key:"removeLike",value:function(){this._likeButton.classList.remove("elements__heart_active")}},{key:"_checkLike",value:function(){var t=this;this._likes.forEach((function(e){e._id===t._userId&&t._likeButton.classList.add("elements__heart_active")}))}},{key:"deleteCard",value:function(){this._cardElement.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._likeButton.classList.contains("elements__heart_active")?t._deleteLike(t._id,t._likeCounter):t._setLike(t._id,t._likeCounter)})),this._deleteButton.addEventListener("click",(function(e){t._cardElement=e.target.closest(".elements__list-item"),t._handleDeleteCard()})),this._cardImageElement.addEventListener("click",(function(){t.handleCardClick(t._imageLink,t._cardTitle)}))}},{key:"createCardByTemplate",value:function(t){return this._cardTitleElement.textContent=this._cardTitle,this._cardImageElement.src=this._imageLink,this._likeCounter.textContent=t.likes.length,this._cardImageElement.alt="Изображение с местом: ".concat(this._cardTitle),this._setEventListeners(),this._checkLike(),this._card}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=r,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inputErrorSelector=e.inputErrorSelector,this._inputErrorFrameClass=e.inputErrorFrameClass,this._buttonElement=this._form.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector))}var e,r;return e=t,(r=[{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_showInputError",value:function(t){this._form.querySelector("".concat(this._inputErrorSelector).concat(t.name)).textContent=t.validationMessage,t.classList.add(this._inputErrorFrameClass)}},{key:"_hideInputError",value:function(t){this._form.querySelector("".concat(this._inputErrorSelector).concat(t.name)).textContent="",t.classList.remove(this._inputErrorFrameClass)}},{key:"setButtonState",value:function(t){t?this._buttonElement.removeAttribute("disabled"):this._buttonElement.setAttribute("disabled",!0)}},{key:"_preventDefault",value:function(t){t.preventDefault()}},{key:"_setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){t.setButtonState(!1),t._preventDefault(e)})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._form.checkValidity()?t.setButtonState(!0):t.setButtonState(!1)}))}))}},{key:"resetValidation",value:function(){var t=this;this.setButtonState(!1),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"startValidate",value:function(){this._setEventListeners()}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),u=document.querySelector(".cards"),a=document.querySelector(".profile__edit-button"),c=".profile__image",l=document.querySelector(c),s=document.querySelector(".profile__add-button"),f={};function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}var m=function(){function t(e,r,n){var o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._elementsContainer=document.querySelector(r),this.renderer=o,this.data=n}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._elementsContainer.prepend(t)}},{key:"renderInitialItems",value:function(t,e){var r=this;t.reverse().forEach((function(t){r.renderer(t,e)}))}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,v(n.key),n)}}function v(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var b=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=v(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}var e,r;return e=t,(r=[{key:"open",value:function(){this.modalWindow.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this.modalWindow.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this.modalWindow.addEventListener("mouseup",(function(e){var r=e.target.classList;(r.contains("popup")||r.contains("popup__close-button"))&&t.close()}))}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},g.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(n);if(o){var r=k(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).modalWindow=document.querySelector(t),e.popupImageElement=e.modalWindow.querySelector(".image-popup__image"),e.popupImageCaption=e.modalWindow.querySelector(".image-popup__caption"),e}return e=u,(r=[{key:"open",value:function(t,e){g(k(u.prototype),"open",this).call(this),this.popupImageElement.src=t,this.popupImageElement.alt="Изображение с местом: ".concat(e),this.popupImageCaption.textContent=e}}])&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},C.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(n);if(o){var r=P(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.popupSelector,n=t.formSubmitter;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r)).modalWindow=document.querySelector(r),e._button=e.modalWindow.querySelector(".popup__button"),e._buttonText=e._button.textContent,e.formSubmitter=n,e._inputList=e.modalWindow.querySelectorAll(".popup__input"),e._popupForm=e.modalWindow.querySelector(".popup__form"),e}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.id]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;C(P(u.prototype),"setEventListeners",this).call(this),this.modalWindow.addEventListener("submit",(function(e){e.preventDefault(),t.formSubmitter(t._getInputValues())}))}},{key:"close",value:function(){C(P(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"showLoader",value:function(){this._button.textContent="Сохранение..."}},{key:"removeLoader",value:function(){this._button.textContent=this._buttonText}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},R.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(n);if(o){var r=x(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.popupSelector,n=t.formSubmitter;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r)).modalWindow=document.querySelector(r),e.formSubmitter=n,e._popupForm=e.modalWindow.querySelector(".popup__form"),e}return e=u,(r=[{key:"submitDeleteCard",value:function(t){this._card=t,R(x(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;R(x(u.prototype),"setEventListeners",this).call(this),this.modalWindow.addEventListener("submit",(function(e){e.preventDefault(),t.formSubmitter(t._card)}))}}])&&q(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function V(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}var W=function(){function t(e){var r=e.nameSelector,n=e.jobSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.profileTitle=document.querySelector(r),this.profileCaption=document.querySelector(n),this.profileAvatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this.profileTitle.textContent,job:this.profileCaption.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about,n=t.avatar,o=t._id;this.profileTitle.textContent=e,this.profileCaption.textContent=r,this.profileAvatar.src=n,this.userId=o}}])&&V(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function F(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===U(o)?o:String(o)),n)}var o}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var J,G=function(t,e,n){var o=new r(t,e,n,{handleDeleteCard:function(){Y.submitDeleteCard(o),f.delete.setButtonState(!0)}},{setLike:function(t,e){H.setlike(t).then((function(t){o.likeCard(),e.textContent=t.likes.length})).catch((function(t){console.log(t)}))}},{deleteLike:function(t,e){H.removeLike(t).then((function(t){o.removeLike(),e.textContent=t.likes.length})).catch((function(t){console.log(t)}))}},z.userId);return o.handleDeleteCheck(),M.addItem(o.createCardByTemplate(t))},H=new(function(){function t(e){var r=e.url,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=r,this._headers=n}var e,r;return e=t,(r=[{key:"_getRequest",value:function(t,e){return fetch(t,e).then((function(t){return t.ok?t.json():t.json().then((function(e){var r=e.message||"Request failed",n=new Error(r);throw n.status=t.status,n}))}))}},{key:"getUserInfo",value:function(){return this._getRequest("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers})}},{key:"setUserInfo",value:function(t){return this._getRequest("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.nameInput,about:t.about})})}},{key:"changeAvatar",value:function(t){return this._getRequest("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t["avatar-link"]})})}},{key:"getInitialCards",value:function(){return this._getRequest("".concat(this._url,"/cards"),{method:"GET",headers:this._headers})}},{key:"createCard",value:function(t){return console.log(t),this._getRequest("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)})}},{key:"deleteCard",value:function(t){return this._getRequest("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"setlike",value:function(t){return this._getRequest("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers})}},{key:"removeLike",value:function(t){return this._getRequest("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers})}}])&&F(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}())({url:"https://mesto.nomoreparties.co/v1/cohort-76",headers:{authorization:"879fc354-cfc1-42a1-b8be-cb6ca897d345","Content-Type":"application/json"}}),M=new m({renderer:function(t){G(t,u,X)}},".elements__list");J={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inputErrorSelector:".popup__input-error_type_",inputErrorFrameClass:"popup__input_error-frame"},Array.from(document.querySelectorAll(J.formSelector)).forEach((function(t){!function(t,e){var r=new i(t,e),n=e.getAttribute("name");f[n]=r,r.startValidate()}(J,t)}));var z=new W({nameSelector:".profile__title",jobSelector:".profile__caption",avatarSelector:c}),$=new I({popupSelector:".edit-popup",formSubmitter:function(t){$.showLoader(),H.setUserInfo(t).then((function(t){z.setUserInfo(t),$.close()})).catch((function(t){console.log("Статус ошибки: ".concat(t.status,", Сообщение: ").concat(t.message))})).finally((function(){$.removeLoader()}))}}),K=new I({popupSelector:".add-popup",formSubmitter:function(t){K.showLoader(),H.createCard(t).then((function(t){console.log(t),G(t,u,X),K.close()})).catch((function(t){console.log("Статус ошибки: ".concat(t.status,", Сообщение: ").concat(t.message))})).finally((function(){K.removeLoader()}))}}),Q=new E(".image-popup");function X(t,e){Q.open(t,e)}var Y=new D({popupSelector:".delete-popup",formSubmitter:function(t){H.deleteCard(t._id).then((function(){t.deleteCard(),Y.close()})).catch((function(t){console.log("Статус ошибки: ".concat(t.status,", Сообщение: ").concat(t.message))}))}}),Z=new I({popupSelector:".avatar-popup",formSubmitter:function(t){Z.showLoader(),H.changeAvatar(t).then((function(t){z.setUserInfo(t),Z.close()})).catch((function(t){console.log("Статус ошибки: ".concat(t.status,", Сообщение: ").concat(t.message))})).finally((function(){Z.removeLoader()}))}});a.addEventListener("click",(function(){var t=z.getUserInfo();$.setInputValues(t),f.profile.resetValidation(),$.open()})),s.addEventListener("click",(function(){K.open(),f.add.resetValidation()})),l.addEventListener("click",(function(){Z.open(),f.avatar.resetValidation()})),$.setEventListeners(),K.setEventListeners(),Q.setEventListeners(),Y.setEventListeners(),Z.setEventListeners(),Promise.all([H.getInitialCards(),H.getUserInfo()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];z.setUserInfo(i),M.renderInitialItems(o)})).catch((function(t){console.log(t)}))})();