/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
import Swiper from 'swiper/bundle';
import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import Accordion from './modules/Accordion.js';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();



/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();


new Accordion('.accordion', {
  shouldOpenAll: false, // true
  defaultOpen: [], // [0,1]
  collapsedClass: 'open',
});


/* Установить ширину боковой панели с шириной 250 пикселей и следующий */
const sidenav = document.getElementById("mySidenav")
const openBtn = document.querySelector('.icon-menu')

openBtn.addEventListener('click', 
  () => {
    if(document.documentElement.scrollWidth < 480){
      sidenav.style.width = `${document.documentElement.scrollWidth}px`;
    } else {
      sidenav.style.width = "480px";
    }
  }
)

/* Установите ширину боковой навигации в 0 */
const closeBtn = document.querySelector('.sidenav__close')

closeBtn.addEventListener('click', 
  () => {
    sidenav.style.width = "0";
  }
)

/* Инициация и настройка Swiper*/
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 45,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});