"use strict";

//----------------------Задание 1----------------------//

let lang = "ru";

let arrRus = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let arrEng = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

//через if
if (lang === "ru") {
    console.log(String(arrRus))
} else if (lang === "en") {
    console.log(String(arrEng))
} else {
    console.log("Произошла ошибка")
};


//через if второй вариант

function getRandomDay(arr) {
    let num = Math.floor(Math.random() * arr.length);
    let randDay = arr[num];
    return randDay
};


if (lang === "ru") {
    console.log(`Ура, сегодня ${getRandomDay(arrRus)}`)
} else if (lang === "en") {
    console.log(`Hurray, today is ${getRandomDay(arrEng)}`)
} else {
    console.log("Произошла ошибка")
};


//через switch-case  

switch (lang) {
    case "ru":
        console.log(String(arrRus));
        break;
    case "en":
        console.log(String(arrEng));
        break;
    default:
        console.log("Произошла ошибка");
}


//через многомерный массив без ифов и switch

let arrLang = [
    ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
];

lang === "ru" ? console.log(arrLang[0]) : lang === "en" ? console.log(arrLang[1]) : console.log("Произошла ошибка");



//----------------------Задание 2----------------------//

let namePerson = "Артем";

namePerson === "Артем" ? console.log("директор") : namePerson === "Максим" ? console.log("преподаватель") : console.log("студент");

