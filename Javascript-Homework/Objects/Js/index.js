                                //Мінімум
// 1) Створення об'єкту, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.  

class Car {
    constructor(manufacturer, model, year, averageSpeed, fuelTankCapacity, fuelConsumption, driverName) {
      this.manufacturer = manufacturer;
      this.model = model;
      this.year = year;
      this.averageSpeed = averageSpeed;
      this.fuelTankCapacity = fuelTankCapacity;
      this.fuelConsumption = fuelConsumption;
      this.driverName = driverName;
    }
  
    displayInfo() {
      alert(`Manufacturer: ${this.manufacturer}
  Model: ${this.model}
  Year: ${this.year}
  Average Speed: ${this.averageSpeed} km/h
  Fuel Tank Capacity: ${this.fuelTankCapacity} liters
  Fuel Consumption: ${this.fuelConsumption} liters/100km
  Driver Name: ${this.driverName}`);
    }
  
    addDriver(driverName) {
      this.driverName = driverName;
      alert(`${driverName} has been added as the driver.`);
    }
  
    checkDriver(driverName) {
      return this.driverName === driverName;
    }
  
    calculateTrip(distance) {
      const timeWithoutBreaks = distance / this.averageSpeed;
      const breaksCount = Math.floor(this.year / 4);
      const totalTime = timeWithoutBreaks + breaksCount;
      const fuelNeeded = (distance / 100) * this.fuelConsumption;
      return { totalTime, fuelNeeded };
    }
  }
  
  const myCar = new Car('Toyota', 'Corolla', 2022, 120, 50, 6, '');
  
  myCar.displayInfo();
  myCar.addDriver('John Doe');
  
  alert(myCar.checkDriver('John Doe'));
  
  const tripDetails = myCar.calculateTrip(500);
  alert(`Total time: ${tripDetails.totalTime} hours\nFuel needed: ${tripDetails.fuelNeeded} liters`);

//   Норма
// Створення об'єкту, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
class Time {
    constructor(hours, minutes, seconds) {
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    }
  
    displayTime() {
      alert(`Current Time: ${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}:${this.formatTime(this.seconds)}`);
    }
  
    addSeconds(secondsToAdd) {
      this.seconds += secondsToAdd;
      this.normalizeTime();
      this.displayTime();
    }
  
    addMinutes(minutesToAdd) {
      this.minutes += minutesToAdd;
      this.normalizeTime();
      this.displayTime();
    }
  
    addHours(hoursToAdd) {
      this.hours += hoursToAdd;
      this.normalizeTime();
      this.displayTime();
    }
  
    normalizeTime() {
      let extraMinutes = Math.floor(this.seconds / 60);
      this.seconds %= 60;
  
      this.minutes += extraMinutes;
      let extraHours = Math.floor(this.minutes / 60);
      this.minutes %= 60;
  
      this.hours += extraHours;
      this.hours %= 24;
    }
  
    formatTime(timeValue) {
      return timeValue < 10 ? `0${timeValue}` : timeValue;
    }
  }
  
  const currentTime = new Time(20, 59, 45);
  currentTime.displayTime();
  
  // Приклад використання методів
  currentTime.addSeconds(30);
  currentTime.addMinutes(75);
  currentTime.addHours(3);

//   Максимум
// Створення об'єкту, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// Складання 2-х об'єктів-дробів.
// Віднімання 2-х об'єктів-дробів.
// Множення 2-х об'єктів-дробів.
// Ділення 2-х об'єктів-дробів.
// Скорочення об'єкта-дробу.
class Fraction {
    constructor(numerator, denominator) {
      this.numerator = numerator;
      this.denominator = denominator;
    }
  
    add(otherFraction) {
      const commonDenominator = this.denominator * otherFraction.denominator;
      const newNumerator = this.numerator * otherFraction.denominator + otherFraction.numerator * this.denominator;
      return new Fraction(newNumerator, commonDenominator).simplify();
    }
  
    subtract(otherFraction) {
      const commonDenominator = this.denominator * otherFraction.denominator;
      const newNumerator = this.numerator * otherFraction.denominator - otherFraction.numerator * this.denominator;
      return new Fraction(newNumerator, commonDenominator).simplify();
    }
  
    multiply(otherFraction) {
      const newNumerator = this.numerator * otherFraction.numerator;
      const newDenominator = this.denominator * otherFraction.denominator;
      return new Fraction(newNumerator, newDenominator).simplify();
    }
  
    divide(otherFraction) {
      const reciprocal = new Fraction(otherFraction.denominator, otherFraction.numerator);
      return this.multiply(reciprocal);
    }
  
    simplify() {
      const gcd = this.greatestCommonDivisor(this.numerator, this.denominator);
      return new Fraction(this.numerator / gcd, this.denominator / gcd);
    }
  
    greatestCommonDivisor(a, b) {
      return b === 0 ? a : this.greatestCommonDivisor(b, a % b);
    }
  
    toString() {
      return `${this.numerator}/${this.denominator}`;
    }

    toDecimal() {
        return this.numerator / this.denominator;
    }

    toPercentage() {
        return this.toDecimal() * 100;
    }

    reciprocal() {
        return new Fraction(this.denominator, this.numerator);
    }
  }
  
  const fraction1 = new Fraction(3, 4);
  const fraction2 = new Fraction(1, 2);
  
  const sum = fraction1.add(fraction2);
  alert("Сумма: "+  sum.toString());
  
  const difference = fraction1.subtract(fraction2);
  alert("Різниця: "+ difference.toString());
  
  const product = fraction1.multiply(fraction2);
  alert("Добуток: "+  product.toString());
  
  const quotient = fraction1.divide(fraction2);
  alert("Частка: "+  quotient.toString());

  const decimalValue = fraction1.toDecimal();
alert("Десятковий еквівалент: " + decimalValue);

const percentageValue = fraction1.toPercentage();
alert("Відсотковий еквівалент: " + percentageValue + "%");

const reciprocalValue = fraction1.reciprocal();
alert("Рекіпрокне значення: " + reciprocalValue.toString());