var num1 = 0.1;
var num2 = 0.2;
var result = num1 + num2;
alert(result); // Результат буде "0.3"

var str1 = "1";
var num2 = 2;
var result = +str1 + num2;
alert(result); // Результат буде 3 (число)

// Флешка
var flashDriveSizeGB = prompt("Введіть обсяг флешки в Гб:");
var fileSizeMB = 820;
var filesCount = Math.floor(flashDriveSizeGB * 1024 / fileSizeMB);
alert("Кількість файлів, що поміщаються: " + filesCount);

// Шоколадки
var walletAmount = parseFloat(prompt("Введіть суму грошей в гаманці:"));
var chocolatePrice = parseFloat(prompt("Введіть ціну однієї шоколадки:"));

if (!isNaN(walletAmount) && !isNaN(chocolatePrice)) {
    var chocolatesCount = Math.floor(walletAmount / chocolatePrice);
    var change = ((walletAmount - (chocolatesCount * chocolatePrice)) * 100) / 100; // Вираховуємо здачу з плаваючою точкою
    alert("Кількість шоколадок: " + chocolatesCount + "\nЗдача: " + change.toFixed(2)); // Виводимо результат з округленням до двох знаків після коми
} else {
    alert("Введені значення не є числами.");
}

// Виведення три числа задом наперед
var number = parseInt(prompt("Введіть трьохзначне число:"));
var reverseNumber = 0;

if (!isNaN(number) && number >= 100 && number <= 999) {
    while (number > 0) {
        var digit = number % 10;
        reverseNumber = reverseNumber * 10 + digit;
        number = Math.floor(number / 10);
    }
    alert("Число задом наперед: " + reverseNumber);
} else {
    alert("Введене значення не є трьохзначним числом.");
}

// Нарахування відсотків
var depositAmount = parseFloat(prompt("Введіть суму вкладу:"));
var annualInterestRate = 5; // Процентна ставка річна
var months = 2;
var monthlyInterestRate = (annualInterestRate / 100) / 12; // Місячна процентна ставка

if (!isNaN(depositAmount)) {
    var interestAmount = depositAmount * monthlyInterestRate * months;
    alert("Сума нарахованих відсотків: " + interestAmount.toFixed(2)); // Вивід з округленням до 2 знаків після коми
} else {
    alert("Введене значення не є числом.");
}