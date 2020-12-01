"use strict";

let data1 = document.querySelector('.data1');
let data2 = document.querySelector('.data2');

const weekArr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

let arrHours = ['час', 'часа', 'часов'];
let arrMinutes = ['минута', 'минуты', 'минут'];
let arrSeconds = ['секунда', 'секунды', 'секунд'];

function getNoun(number, arr) {
    let num = +number;
    num %= 100;
    if (num >= 5 && num <= 20) {
        return arr[2];
    }
    num %= 10;
    if (num === 1) {
        return arr[0];
    }
    if (num >= 2 && num <= 4) {
        return arr[1];
    }
    return arr[2];
}

function getZeroToNum(num) {
    return ('0' + num).slice(-2);
}


function getTime() {

    let dayConstr = new Date();
    let day = weekArr[dayConstr.getDay()];
    let date = dayConstr.getDate();
    let month = monthArr[dayConstr.getMonth()];
    let monthNumb = dayConstr.getMonth();
    let year = dayConstr.getFullYear();
    let hours = dayConstr.getHours();
    let minutes = dayConstr.getMinutes();
    let seconds = dayConstr.getSeconds();

    data1.innerHTML = `Сегодня ${day}, ${date} ${month} ${year} года, ${hours} ${getNoun(hours, arrHours)} ${minutes} ${getNoun(minutes, arrMinutes)} ${seconds} ${getNoun(seconds, arrSeconds)}`;

    data2.innerHTML = `${getZeroToNum(date)}.${getZeroToNum(monthNumb)}.${year} - ${getZeroToNum(hours)}:${getZeroToNum(minutes)}:${getZeroToNum(seconds)}`;
}

setInterval(getTime, 1000);
