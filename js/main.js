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
});