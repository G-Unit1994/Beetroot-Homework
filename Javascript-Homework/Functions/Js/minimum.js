// 1) Напиши всі можливі варіанти створення функцій:
// А) Створення функції без параметрів:
function hello_world(){
    console.log("Hello, world!");
}
    hello_world();  

//  2) Створення функції з параметрами:
function greet(name) {
    console.log("Hello", + name + "!");
}
console.log("name");

// 3) Створення функції з параметрами за замовчуванням:
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

console.log(); // Виклик функції без параметрів
console.log("Guest"); // Виклик функції з параметром
// 4) Повернення значення з функції:
function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(3, 5);
console.log(result);

// 5) Використання змінної кількості аргументів (*args та kwargs):
function Calculatesum(...args) {
    let total = 0;
    for(let num of args) {
        total += num;
    }
    return total;
}

let sum = Calculatesum(1,2,3,4,5);
console.log(sum);
// 6) Рекурсивнa функції:
function calculateFactorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}

let factorialResult = calculateFactorial(5);
console.log(factorialResult); // Виведе: 120
// 7) Анонімнa функції (лямбда-функція):
let square = function(x) {
    return x ** 2;
};

console.log(square(5)); // Виведе: 25
// 8) Генератори функцій:
function* countdown(n) {
    while (n > 0) {
        yield n;
        n--;
    }
}

let generator = countdown(5);
for (let value of generator) {
    console.log(value); // Виведе: 5, 4, 3, 2, 1
}
// 9) Декоратори для функцій:
function my_decorator(func) {
    return function() {
        console.log("Something is happening before the function is called.");
        func();
        console.log("Something is happening after the function is called.");
    };
}

function say_hello() {
    console.log("Hello!");
}

let decorated_function = my_decorator(say_hello);
decorated_function(); // Виклик декорованої функції

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
        return 2.1;
    }else {
        return 3.0;
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