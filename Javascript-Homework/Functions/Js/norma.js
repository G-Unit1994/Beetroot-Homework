// 1) Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function isPerfectNumber(number) {
    let sumOfDivisors = 0;

    for(let i =1; i < number; i++) {
        if(number % i === 0) {
            sumOfDivisors += i;
        }
    }

    return sumOfDivisors === number;
}

let num1 = 6;
let num2 = 28;
let num3 = 12;

console.log(num1 + " є досконалим числом:", isPerfectNumber(num1));
console.log(num2 + " є досконалим числом:", isPerfectNumber(num2));
console.log(num3 + " є досконалим числом:", isPerfectNumber(num3));

// 2) Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
function isPerfectNumber(number) {
    let sumOfDivisors = 0;

    for(let i = 1; i < number; i++) {
        if(number % i === 0) {
            sumOfDivisors += i;
        }
    }

    return sumOfDivisors === number;
}

function findPerfectNumbers(min, max) {
    let perfectNumbers = [];

    for(let num = min; num <= max; num++) {
        if(isPerfectNumber(num)) {
            perfectNumbers.push(num);
        }
    }
    return perfectNumbers;
}

let minRange = 1;
let maxRange = 100;
let perfectNumbersInRange = findPerfectNumbers(minRange, maxRange);
console.log("Досконалі числа в діапазоні від", minRange, "до", maxRange, ":", perfectNumbersInRange);