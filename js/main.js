"use strict";

/*Я решила сделать функкцию. которая будет обрезать строку на заданное пользователем кол-во соиволов, 
 а не только на 30ть */

function cutString(string, number) {
    if (typeof string !== "string") {
        console.log("Это не строка!!")
    }
    let newString = string.trim();

    if (newString.length > number) {
        newString = newString.slice(0, number) + '...'
    }
    return newString
}

console.log(cutString('  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo ', 30));


//А вот если соблюдать задание:

function cutString2 (string) {
    if (typeof string !== "string") {
        console.log("Это не строка!!")
    }
    let newString = string.trim();

    if (newString.length > 30) {
        newString = newString.slice(0, 30) + '...'
    }
    return newString
}

console.log(cutString2('  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo '));