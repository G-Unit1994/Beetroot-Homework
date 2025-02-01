
         var firstName = "John";
        var lastName = "Doe";

        var firstName = "John";
        var lastName = "Doe";

        // Неправильні імена змінних (закоментовані)
        // var 123name = "Invalid"; // Неправильне ім'я через початок з цифри
        // var first Name = "Invalid"; // Неправильне ім'я через пробіл
        // var last@name = "Invalid"; // Неправильне ім'я через спеціальний символ

        // Коментарі можна створювати таким чином:
        // Однорядковий коментар

        /*
            Багаторядковий коментар
        */

        /**
         * Коментар для документації
         * Докладний опис функції або змінної
         */

        // Стилі написання імен змінних
        var camelCaseVariable; // Камелкейс (camelCase)
        var snake_case_variable; // Змінна зі змінними (snake_case)
        var PascalCaseVariable; // Паскалькейс (PascalCase)
        var HungarianNotationVariable; // Угорська нотація (HungarianNotation)

        // Запит ім'я користувача та виведення вітання
        var userName = prompt("Як вас звати?");
        alert("Привіт, " + userName + "!");

        // Порахунок віку користувача
        const currentYear = new Date().getFullYear();
        var birthYear = prompt("Введіть рік вашого народження:");
        var age = currentYear - birthYear;
        alert("Вам " + age + " років.");

        // Запит довжини сторони квадрата та обчислення периметра
        var sideLength = prompt("Введіть довжину сторони квадрата:");
        var perimeter = 4 * parseInt(sideLength);
        alert("Периметр квадрата: " + perimeter);

        // Запит радіусу кола та обчислення площі
        var radius = prompt("Введіть радіус кола:");
        var area = Math.PI * Math.pow(radius, 2);
        alert("Площа кола: " + area.toFixed(2));

        // Запит відстані та часу подорожі для обчислення швидкості
        var distance = prompt("Введіть відстань між містами (в км):");
        var travelTime = prompt("Введіть час подорожі (в годинах):");
        var speed = distance / travelTime;
        alert("Необхідна швидкість: " + speed.toFixed(2) + " км/год");

        // Конвертор валют (долари в євро)
        const usdToEuroRate = 0.85;
        var usdAmount = prompt("Введіть суму в доларах:");
        var euroAmount = usdAmount * usdToEuroRate;
        alert("Сума в євро: " + euroAmount.toFixed(2));
    
