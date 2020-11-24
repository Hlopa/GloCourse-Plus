"use strict";

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
