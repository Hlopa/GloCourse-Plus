"use strict";

let arrDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let p = document.querySelector('.data');

function getDate() {
    let now = new Date();
    let nowDay = arrDay[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let newYear = '01 january 2021';

    function getZeroBefore(number) {
        if (number >= 0 && number < 10) {
            return `0${number}`
        } else {
            return number
        }
    };

    function getDaytoNY() {
        let dateStop = new Date(newYear).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            days = Math.floor(timeRemaining / (60 * 60 * 24));
        return days
    };

    function formatAMPM() {
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '' + minutes : minutes;
        let strTime = `${getZeroBefore(hours)}:${getZeroBefore(minutes)}:${getZeroBefore(seconds)} ${ampm}`;
        return strTime;
    };

    function getGreeting() {
        let greeting = '';
        if (hours < 4) {
            greeting = 'Доброй ночи'
        } else if (hours >= 4 && hours < 12) {
            greeting = 'Доброго утра'
        } else if (hours >= 12 && hours < 17) {
            greeting = 'Доброго дня'
        } else {
            greeting = 'Доброго вечера'
        }
        return greeting
    };

    function displayText() {
        p.innerHTML = `${getGreeting()} <br>
                Сегодня: ${nowDay} <br>
                Текущее время: ${formatAMPM()} <br>
                До Нового Года осталось: ${getDaytoNY()} дней`;
    };

    displayText();
};

setInterval(getDate, 1000);
