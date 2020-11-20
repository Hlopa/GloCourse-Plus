//Создать переменную num со значением 266219 (тип данных число)

let num = 266219;

//Вывести в консоль произведение (умножение) цифр этого числа

let strNum = String(num);
let multiplyNum = 1;

for(let numeral of strNum){
    multiplyNum *= numeral;
}

console.log(multiplyNum);

//Полученный результат возвести в степень 3, используя только 1 оператор

let powNum = multiplyNum**3;


//Вывести на экран первые 2 цифры полученного числа

let twoNumeral = `${String(powNum)[0]}${String(powNum)[1]}`;

alert(twoNumeral);
