"use strict";


//задание 1

//если выводим и отрицательные тоже

let arr = ['456554', '-407', '10784', '55', '95456558', '652', '2465'];

for (let num of arr) {
    if (num[0] === '4' || num[0] === '2') {
        console.log(num)
    } else if ((num[0] === '-' || num[1] === '4') && (num[0] === '-' || num[1] === '2')) {
        console.log(num)
    }
};


//если без отрицательных

let arr2 = ['456554', '407', '10784', '55', '95456558', '652', '2465'];

for (let num of arr2) {
    if (num[0] === '4' || num[0] === '2') {
        console.log(num)
    }
};



//задание 2

foundPrime:
for (let i = 2; i <= 100; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue foundPrime;
    }
    console.log(`${i} Делители числа: 1 и ${i}`);
}
