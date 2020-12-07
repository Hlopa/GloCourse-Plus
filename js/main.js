"use strict";

const regicterBtn = document.querySelector('.regicter-btn'),
    loginBtn = document.querySelector('.login-btn');

let userData = {
    user: [],
    newUser: {},

    start() {
        userData.getName();
        userData.getLogin();
    },

    getName() {
        let res = prompt('Введите через пробел Имя и Фамилию пользователя');
        if (res && res.trim().split(' ').length - 1 === 1) {
            userData.newUser.name = res.split(' ')[0],
            userData.newUser.surname = res.split(' ')[1]
        }
        else {
            alert('Ошибка. Повторите еще раз');
            userData.getName();
        }
        return res
    },
    getLogin() {
        let login = prompt('Введите логин');
        if (login) {
            userData.newUser.login = login
        }
    }

};

regicterBtn.addEventListener('click', userData.start);


console.log(userData);

