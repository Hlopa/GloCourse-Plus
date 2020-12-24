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


  countTimer('26 december 2020');


  //Меню

  const toggleMenu = () => {
    const body = document.body,
      menu = document.querySelector('menu');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (event) => {
      let target = event.target;

      if (target.classList.contains('close-btn') || target.closest('.menu') || target.closest('menu>ul>li>a')) {
        handlerMenu();
      } else if (menu.classList.contains('active-menu') && !target.closest('.active-menu')) {
        handlerMenu();
      }

    })
  };

  toggleMenu();

  //плавный скролл

  const getSmoothScroll = () => {
    const menu = document.querySelector('menu'),
      ancors = menu.querySelector('ul').querySelectorAll('a'),
      btnDown = document.querySelector('[href="#service-block"]');

    const getScroll = (element) => {
      element.addEventListener('click', function (e) {
        e.preventDefault();
        const blockID = element.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }

    ancors.forEach((item) => {
      getScroll(item)
    });
    getScroll(btnDown);
  }

  getSmoothScroll();



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
        popup.style.display = 'none'
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
  };

  tabs();



  //слайдер

  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      ul = document.querySelector('.portfolio-dots'),
      slider = document.querySelector('.portfolio-content');

    let currentSlide = 0;
    let interval;

    //создает дотсы
    const createDots = () => {
      slide.forEach((item, index) => {
        let li = document.createElement('li');
        if (index === 0) {
          li.classList.add("dot");
          li.classList.add("dot-active")
        } else {
          li.classList.add("dot")
        }
        ul.append(li);

      });
    };

    createDots();
    let dot = document.querySelectorAll('.dot');

    //функции переключения слайдов

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");

    };

    const startSlide = (time = 1500) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };


    slider.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return
      }

      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");

      if (target.matches('#arrow-right')) {
        currentSlide++
      } else if (target.matches('#arrow-left')) {
        currentSlide--
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index
          }
        })
      };

      if (currentSlide >= slide.length) {
        currentSlide = 0
      }

      if (currentSlide < 0) {
        currentSlide = slide.length - 1
      }

      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");
    });

    slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn, .dot')) {
        stopSlide();
      }
    })

    slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn, .dot')) {
        startSlide();
      }
    })
    startSlide(2000);
  };

  slider();



  //блок картирнок наша команда

  const imgCommands = document.querySelectorAll('.command__photo');

  imgCommands.forEach((img) => {
    let scr;
    img.addEventListener('mouseenter', (e) => {
      scr = e.target.src;
      e.target.src = e.target.dataset.img
    });

    img.addEventListener('mouseleave', (e) => {
      e.target.src = scr;
    })

  });


  //калькулятор

  const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcDay = document.querySelector('.calc-day'),
      calcCount = document.querySelector('.calc-count'),
      totalValue = document.getElementById('total');




    //можно вводить только цифры
    calcBlock.addEventListener('input', (e) => {
      const target = e.target;
      if (target.tagName === "INPUT") {
        target.value = target.value.replace(/[^0-9\.]/g, '')
      }
    })


    const countSum = () => {

      let total = 0,
        countValue = 1,
        dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = parseInt(price * typeValue * squareValue * countValue * dayValue);
      }



      const animateTotal = () => {
        const target = +total;
        const count = +totalValue.textContent;
        let speed = 20;

        if (target > 5000 && target < 30000) {
          speed = 50
        } else if (target >= 30000 && target < 100000) {
          speed = 200
        } else if (target >= 100000) {
          speed = 4000
        }

        if (count < target) {
          totalValue.textContent = count + speed;
          setTimeout(animateTotal, 1)
        } else {
          totalValue.textContent = total;
        }
      }
      animateTotal()
    };

    calcBlock.addEventListener('change', (e) => {
      const target = e.target;

      if (target.matches('select') || target.matches('input')) {

        countSum();
      }
    })
  };

  calc(100);

});

