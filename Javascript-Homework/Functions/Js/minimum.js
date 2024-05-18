 

//  1) Функціональний вираз:
const funcExpr = function() {
    console.log("Функціональний вираз");
};

// Виклик функції
funcExpr();

// B):
function funcDecl() {
    console.log("Оголошення функції");
}

// C:
const arrowFunc = () => {
    console.log("Стрілкова функція");
};

// 2) Створи функцію, яка буде виводити кількість переданих їй аргументів.
function count_arguments(...args) {
    console.log("Кількість аргументів:", args.length);
}

// Приклад виклику функції з різними кількостями аргументів
count_arguments(1, 2, 3);  // Виведе: Кількість аргументів: 3
count_arguments('a', 'b', 'c', 'd', 'e');  // Виведе: Кількість аргументів: 5
count_arguments(true, false);  // Виведе: Кількість аргументів: 2

// 3) Напиши функцію, яка приймає 2 числа і повертає :
// 1. -1, якщо перше число менше, ніж друге; 
// 2.1 - якщо перше число більше, ніж друге; 
// 3.0 - якщо числа рівні:
function comparenumbers(num1, num2) {
    if(num1 < num2) {
        return -1;
    }else if (num1 > num2) {
        return 1;
    }else {
        return 0;
    }
}

let result1 = comparenumbers(5, 10);  // Поверне: -1
let result2 = comparenumbers(20, 5);  // Поверне: 1
let result3 = comparenumbers(8, 8);   // Поверне: 0

console.log(result1, result2, result3);  // Виведе: -1 1 0

// Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorialnumber(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorialnumber(n - 1);
    }
}

// Приклад використання функції та виведення результату через alert
let number = 5;
let factorialresult = factorialnumber(number);
console.log("Факторіал числа " + number + " дорівнює " + result);

//  Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
function combineDigits(digit1, digit2, digit3) {
    return parseInt(digit1.toString() + digit2.toString() + digit3.toString());
}

// Приклад використання функції
let numbers = combineDigits(5, 7, 9);
console.log(numbers);  // Виведе: 149

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function calculateArea(length, width = null) {
    if (width === null) {
        return length * length; // Обчислює площу квадрата
    } else {
        return length * width; // Обчислює площу прямокутника
    }
}

// Приклад використання функції
let squareArea = calculateArea(5);
let rectangleArea = calculateArea(4, 6);

console.log("Площа квадрата:", squareArea); // Виведе: Площа квадрата: 25
console.log("Площа прямокутника:", rectangleArea); // Виведе: Площа прямокутника: 24
