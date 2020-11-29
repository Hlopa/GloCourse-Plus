"use strict";

const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let days = document.querySelector('.days');
let currantDay = new Date();


function createElement() {
    let items = '<ul>';

    week.forEach((el, i) => {
        if (i === currantDay.getDay() - 1) {
            el = el.bold()
        }

        if (i === 5 || i === 6) {
            items += '<li>' + '<i>' + el + '</i>' + '</li>'
        } else {
            items += '<li>' + el + '</li>'
        }
    });

    items += '</ul>';

    return items;
}


days.innerHTML = createElement();
