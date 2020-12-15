window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  //Timer

  function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
      return {
        timeRemaining,
        hours,
        minutes,
        seconds
      };
    };

    function getZeroBefore(number) {
      if (number >= 0 && number < 10) {
        return `0${number}`
      } else {
        return number
      }
    };

    function updateClock() {
      let timer = getTimeRemaining();
      let intervalId = setInterval(updateClock, 1000);

      if (timer.timeRemaining <= 0) {
        clearInterval(intervalId);
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
      } else {
        timerHours.textContent = getZeroBefore(timer.hours);;
        timerMinutes.textContent = getZeroBefore(timer.minutes);
        timerSeconds.textContent = getZeroBefore(timer.seconds);
      }
    };
    updateClock();
  };

  countTimer('17 december 2020');


  //Меню

  const toggleMenu = () => {
    const bntMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    bntMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
  };

  toggleMenu();


  //popup

  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
      popupBtns = document.querySelectorAll('.popup-btn'),
      popupClose = document.querySelector('.popup-close'),
      popupContent = document.querySelector('.popup-content');

    function anim() {
      let start = Date.now();
      let timer = setInterval(function () {
        let timePassed = Date.now() - start;
        popupContent.style.top = timePassed / 7 + 'px';

        if (popupContent.offsetTop > 146) clearInterval(timer);
      }, 10);
    };

    popupBtns.forEach((elem) => {
      elem.addEventListener('click', () => {
        popupContent.style.top = `0px`;
        popup.style.display = 'block';
        if (screen.width > 768) {
          anim();
        }
      })
    });
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });

  }
  togglePopup();
  ;

});
