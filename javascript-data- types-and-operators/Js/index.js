var result = (0.1 + 0.2).toFixed(1);
console.log(result); // Результат буде "0.3"

var str1 = "1";
var num2 = 2;
var result = +str1 + num2;
console.log(result); // Результат буде 3 (число)

var flashDriveSizeGB = prompt("Введіть обсяг флешки в Гб:");
var fileSizeMB = 820;
var filesCount = Math.floor(flashDriveSizeGB * 1024 / fileSizeMB);
console.log("Кількість файлів, що поміщаються:", filesCount);

var walletAmount = prompt("Введіть суму грошей в гаманці:");
var chocolatePrice = prompt("Введіть ціну однієї шоколадки:");
var chocolatesCount = Math.floor(walletAmount / chocolatePrice);
var change = walletAmount % chocolatePrice;
console.log("Кількість шоколадок:", chocolatesCount);
console.log("Здача:", change);

var number = prompt("Введіть трьохзначне число:");
var reverseNumber = 0;
while (number > 0) {
    var digit = number % 10;
    reverseNumber = reverseNumber * 10 + digit;
    number = Math.floor(number / 10);
}
console.log("Число задом наперед:", reverseNumber);

var depositAmount = prompt("Введіть суму вкладу:");
var annualInterestRate = 5; // Процентна ставка річна
var months = 2;
var monthlyInterestRate = (annualInterestRate / 100) / 12; // Місячна процентна ставка
var interestAmount = depositAmount * monthlyInterestRate * months;
console.log("Сума нарахованих відсотків:", interestAmount);