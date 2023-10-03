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
import customSelect from './libs/customSelect.js';

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

initSlowScroll();

/* Настройка отображения Sidenav */
const sidenav = document.getElementById("mySidenav");
const openBtn = document.querySelector('.icon-menu');
const sidenavContainer = document.querySelector('.sidenav-container');
const closeBtn = document.querySelector('.sidenav__close');
import initSlowScroll from './modules/slowScroll.js';


openBtn.addEventListener('click', openSidenav);

/* Установить ширину боковой панели с шириной 480 пикселей и следующий */
function openSidenav() {
  if(document.documentElement.scrollWidth < 480){
    sidenav.style.width = `${document.documentElement.scrollWidth}px`;
  } else {
    sidenav.style.width = "480px";
    sidenavContainer.classList.add('sidenav-container--open')
  }
  attachSidenavEvents()
};

function attachSidenavEvents() {
  closeBtn.addEventListener('click', closeSidenav);
  document.addEventListener('keydown', handleEscape);
  sidenavContainer.addEventListener('click', handleOutside)
};

function handleEscape(event) {
  if(event.key === 'Escape'){
    closeSidenav();
  }
};

function handleOutside() {
  closeSidenav()
};

function closeSidenav() {
  sidenav.style.width = "0";
  sidenavContainer.classList.remove('sidenav-container--open')
  detachSidenavEvents()
};

function detachSidenavEvents() {
  document.removeEventListener('keydown', handleEscape);
  sidenav.removeEventListener('click', handleOutside);
  closeBtn.removeEventListener('click', closeSidenav);
};

// Появление кнопки скролла
window.addEventListener('scroll', function () {
  const el = document.querySelector('.scroll__link')
  const scroll = window.scrollY || document.documentElement.scrollTop;
  if(scroll > 400){
    el.style.bottom = '60px';
  } else {
    el.style.bottom = '-100px';
  } 
});


// Инициация модификации select
customSelect();


/* Инициация и настройка Swiper*/
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 45,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

