class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if(value > 0) {
            this._radius = value;
        }else {
            throw new Error("Радіус має бути додатнім числом");
        }
    }

    get diameter() {
        return this._radius * 2;
    }

    area() {
        return Math.PI * this._radius ** 2;
    }

    circumference() {
        return 2 * Math.PI * this._radius;
    }
}

// Приклад використання
const circle = new Circle(5);
console.log(`Радіус: ${circle.radius}`);
console.log(`Діаметр: ${circle.diameter}`);
console.log(`Площа: ${circle.area()}`);
console.log(`Довжина кола: ${circle.circumference()}`);

// Зміна радіуса
circle.radius = 10;
console.log(`Новий радіус: ${circle.radius}`);
console.log(`Новий діаметр: ${circle.diameter}`);
console.log(`Нова площа: ${circle.area()}`);
console.log(`Нова довжина кола: ${circle.circumference()}`);

// 2) Маркер
class Marker {
    constructor(color, inkPercentage) {
        this.color = color;
        this.inkPercentage = inkPercentage;
    }

    write(text) {
        let inkNeeded = 0.5;
        let outputText = '';
        
        for (let char of text) {
            if (this.inkPercentage <= 0) {
                break;
            }

            if (char !== ' ') {
                if (this.inkPercentage < inkNeeded) {
                    break;
                }
                this.inkPercentage -= inkNeeded;
            }

            outputText += char;
        }

        console.log(`%c${outputText}`, `color: ${this.color}`);
        console.log(`Залишок чорнила: ${this.inkPercentage.toFixed(2)}%`);
    }
}

class RefillableMarker extends Marker {
    refill(inkAmount) {
        if (inkAmount < 0) {
            throw new Error("Кількість чорнила має бути додатньою");
        }
        this.inkPercentage += inkAmount;
        if (this.inkPercentage > 100) {
            this.inkPercentage = 100;
        }
        console.log(`Чорнило перезаправлено. Поточний рівень чорнила: ${this.inkPercentage.toFixed(2)}%`);
    }
}

// Приклад використання
const refillableMarker = new RefillableMarker('blue', 10);

refillableMarker.write("Привіт, як справи?");
refillableMarker.write(" Це ще один тестовий рядок.");
refillableMarker.refill(20);
refillableMarker.write("Тепер можна написати більше тексту.");

// 3) клас Employee
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let html = `
            <table border="1">
                <tr>
                    <th>Ім'я</th>
                    <th>Посада</th>
                    <th>Зарплата</th>
                </tr>
        `;

        this.employees.forEach(employee => {
            html += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.position}</td>
                    <td>${employee.salary}</td>
                </tr>
            `;
        });

        html += `</table>`;
        return html;
    }
}

// Приклад використання
const employees = [
    new Employee('Іван Іванов', 'Касир', 30000),
    new Employee('Петро Петренко', 'Менеджер', 40000),
    new Employee('Олена Оленова', 'Аналітик', 50000)
];

const empTable = new EmpTable(employees);
document.write(empTable.getHtml());