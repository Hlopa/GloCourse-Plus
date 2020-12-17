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

      if (timer.timeRemaining <= 0) {
        clearInterval(2);
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
    setInterval(updateClock, 1000);
  };


  countTimer('19 december 2020');


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

    popupContent.style.top = `0px`;

    popupBtns.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
        if (screen.width > 768) {
          anim();
        }
      })
    });
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
      popupContent.style.top = `0px`;
    });


    popup.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('popup-close')) {
        popUp.style.display = 'none'
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popup.style.display = 'none';
        }
      }
    })

  }
  togglePopup();

  //табы

  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none')
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none')
        }
      }
    };
    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.service-header-tab');
      if (target.classList.contains('service-header-tab')) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i)
          }
        })
      }
    })
  }

  tabs();
});


