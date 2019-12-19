import "../scss/style.scss";
import Swiper from "swiper";

/*меню*/
var menuButton = document.querySelector(".menu-button");
var menu = document.querySelector(".menu");
var commonBlock = document.querySelector(".common-block");
var closeMenu = document.querySelector(".menu-item__close");

menuButton.addEventListener("click", function() {
  if (window.innerWidth > 320) {
    commonBlock.style.opacity = 0.1;
  }
  menu.classList.add("active-menu");
  menu.classList.remove("close-menu");
  commonBlock.style.position = "fixed";
});
closeMenu.addEventListener("click", function() {
  if (window.innerWidth > 320) {
    commonBlock.style.opacity = 1;
  }
  menu.classList.add("close-menu");
  menu.classList.remove("active-menu");
  commonBlock.style.position = "absolute";
});

/*обратная связь*/
var message = document.querySelector(".header-menu__item--message");
var messageMenu = document.querySelector(".middle-menu__item--message");
var modalMessage320 = document.querySelector(".modal-message320");
var closeMessage = document.querySelector(".modal--close");
var modalMessage1440 = document.querySelector(".modal-message1440");
var closeMessage1440 = document.querySelector(".modal__button--close-mess");

message.addEventListener("click", function() {
  modalMessage320.classList.add("active-modal320");
  modalMessage320.classList.remove("close-modal320");
});
messageMenu.addEventListener("click", function() {
  if (window.innerWidth > 769) {
    modalMessage1440.classList.add("modal-message1440--active");
    modalMessage1440.style.right = "0";
    commonBlock.style.opacity = "0.1";
    menu.style.opacity = "0.1";
  } else {
    modalMessage320.classList.add("active-modal320");
    commonBlock.style.opacity = "0";
    menu.style.opacity = "0";
    modalMessage320.classList.remove("close-modal320");
  }
});
closeMessage.addEventListener("click", function() {
  modalMessage320.classList.add("close-modal320");
  commonBlock.style.opacity = "1";
  menu.style.opacity = "1";
  modalMessage320.classList.remove("active-modal320");
});
closeMessage1440.addEventListener("click", function() {
  modalMessage1440.style.right = "-100%";
  commonBlock.style.opacity = "1";
  commonBlock.style.position = "none";
  menu.style.opacity = "1";
});

/*заказать звонок*/
var call = document.querySelector(".header-menu__item--call");
var callMenu = document.querySelector(".middle-menu__item--call");
var orderCall = document.querySelector(".order-call");
var callClose = document.querySelector(".order-call--close");
var callModal1440 = document.querySelector(".modal-call1440");
var callClose1440 = document.querySelector(".modal__button--close-call");

call.addEventListener("click", function() {
  orderCall.classList.add("active-call320");
  orderCall.classList.remove("call-close320");
});
callMenu.addEventListener("click", function() {
  if (window.innerWidth > 769) {
    callModal1440.classList.add("modal-call1440--active");
    callModal1440.style.right = "0";
    commonBlock.style.opacity = "0.1";
    menu.style.opacity = "0.1";
  } else {
    orderCall.classList.add("active-call320");
    commonBlock.style.opacity = 0;
    menu.style.opacity = 0;
    orderCall.classList.remove("call-close320");
  }
});
callClose.addEventListener("click", function() {
  orderCall.classList.remove("active-call320");
  commonBlock.style.opacity = 1;
  menu.style.opacity = 1;
  orderCall.classList.add("call-close320");
});
callClose1440.addEventListener("click", function() {
  callModal1440.style.right = "-100%";
  commonBlock.style.opacity = "1";
  commonBlock.style.position = "none";
  menu.style.opacity = "1";
});

/*развернуть/свернуть текст в мобильной версии*/
var text = document.querySelector(".description-additional");
var button = document.querySelector(".expand-button");

button.onclick = function() {
  text.classList.toggle("open");
  if (button.innerHTML == "Читать далее") {
    button.innerHTML = "Скрыть";
  } else button.innerHTML = "Читать далее";
};

/*развернуть/свернуть пункты в планшетной версии (список 1)*/
var control = document.querySelector(".list__button-control");
var crossing = document.querySelector(".list--crossing");

control.onclick = function() {
  crossing.classList.toggle("expand");
  if (control.innerHTML == "Показать все") {
    control.innerHTML = "Скрыть";
  } else control.innerHTML = "Показать все";
};

/*развернуть/свернуть пункты в планшетной версии (список 2)*/
var control2 = document.querySelector(".list__button-control2");
var crossing2 = document.querySelector(".list--crossing2");

control2.onclick = function() {
  crossing2.classList.toggle("expand2");
  if (control2.innerHTML == "Показать все") {
    control2.innerHTML = "Скрыть";
  } else control2.innerHTML = "Показать все";
};

/*слайдер 1*/
if (window.innerWidth < 360) {
  var listBlock = document.querySelector(".list-block");
  listBlock.classList.add("swiper-container");
  var list = document.querySelector(".list");
  list.classList.add("swiper-wrapper");
  var listItem = document.querySelectorAll(".list__item");
  for (var i = 0; i < listItem.length; i++) {
    listItem[i].classList.add("swiper-slide");
  }
}

/*слайдер 2*/
if (window.innerWidth < 360) {
  var listBlock2 = document.querySelector(".list-block2");
  listBlock2.classList.add("swiper-container");
  var list2 = document.querySelector(".list2");
  list2.classList.add("swiper-wrapper");
  var listItem2 = document.querySelectorAll(".list__item2");
  for (var i = 0; i < listItem2.length; i++) {
    listItem2[i].classList.add("swiper-slide");
  }
}

/*слайдер 3*/
if (window.innerWidth < 360) {
  var listBlock3 = document.querySelector(".list-block3");
  listBlock3.classList.add("swiper-container");
  var list3 = document.querySelector(".list3");
  list3.classList.add("swiper-wrapper");
  var listItem3 = document.querySelectorAll(".list__item3");
  for (var i = 0; i < listItem3.length; i++) {
    listItem3[i].classList.add("swiper-slide");
  }
}
let swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    slidesPerView: 1
  }
});
