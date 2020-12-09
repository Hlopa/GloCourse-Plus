"use strict";

const DomElement = function (selector, height, width, bg, fontSize, text) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;
};

DomElement.prototype.createElem = function () {
    let elem;

    if (this.selector[0] === '.') {
        elem = document.createElement('div');
        elem.classList.add(this.selector.slice(1))
    } else if (this.selector[0] === '#') {
        elem = document.createElement('p');
        elem.setAttribute('id', this.selector.slice(1));
    }

    elem.style.cssText = `
    height: ${this.height}px;
    width: ${this.width}px;
    background-color: ${this.bg};
    font-size: ${this.fontSize}px;
    `;
    elem.textContent = this.text;
    document.body.append(elem);
    return elem
};


const newElem = new DomElement('.block', 50, 150, 'green', 20, 'hello');
newElem.createElem();

document.addEventListener("DOMContentLoaded", function (event) {
    const square = new DomElement('.square', 100, 100, 'red').createElem();
    square.style.position = 'absolute';

    document.addEventListener('keydown', function (e) {
        let styleSquare = getComputedStyle(square);
        let topSquare = parseFloat(styleSquare.top);
        let rightSquare = parseFloat(styleSquare.right);

        const keyName = e.code;

        if (keyName === 'ArrowUp') {
            topSquare -= 10;
            square.style.top = topSquare + 'px';
        } else if (keyName === 'ArrowDown') {
            topSquare += 10;
            square.style.top = topSquare + 'px';
        } else if (keyName === 'ArrowLeft') {
            rightSquare += 10;
            square.style.right = rightSquare + 'px';
        } else if (keyName === 'ArrowRight') {
            rightSquare -= 10;
            square.style.right = rightSquare + 'px';
        }
    });
});
