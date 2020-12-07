"use strict";

const body = document.querySelector('body'),
    button = document.querySelector('.color-btn'),
    text = document.querySelector('.color-text');


function randomColor() {
    let a = (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    return `#${a}`
};

button.addEventListener('click', function () {
    let color = randomColor();
    body.style.backgroundColor = color;
    text.textContent = String(color);
    button.style.color = color;
});
