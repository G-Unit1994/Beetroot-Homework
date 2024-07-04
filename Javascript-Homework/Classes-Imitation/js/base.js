class User {
    constructor(name, role) {
        if (typeof name !== 'string' || name.trim() === '') {
            console.log("Некоректне ім'я");
            return;
        }

        if (role !== 'admin' && role !== 'user') {
            console.log("Некоректна роль");
            return;
        }
        this.name = name;
        this.role = role;
        this.loggedIn = false;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    login() {
        if (this.loggedIn) {
            console.log("Користувач вже залогінений.");
        } else {
            this.loggedIn = true;
            console.log("Вхід виконано успішно.");
        }
    }

    logout() {
        if (!this.loggedIn) {
            console.log("Користувач не залогінений.");
        } else {
            this.loggedIn = false;
            console.log("Вихід виконано успішно.");
        }
    }

    changeName(newName) {
        if (typeof newName !== 'string' || newName.trim() === '') {
            console.log("Некоректне нове ім'я");
        } else {
            this.name = newName;
            console.log("Ім'я змінено успішно.");
        }
    }

    changePassword(newPassword) {
        if (typeof newPassword !== 'string' || newPassword.trim() === '') {
            console.log("Некоректний новий пароль");
        } else {
            this.password = newPassword;
            console.log("Пароль змінено успішно.");
        }
    }
}

// Приклад використання
const user = new User("Petro", "admin");
console.log(user.getName());   // Виведе "Petro"
console.log(user.getRole());   // Виведе "admin"
user.login();                  // Виведе "Вхід виконано успішно."
user.logout();                 // Виведе "Вихід виконано успішно."
user.changeName("Ivan");       // Виведе "Ім'я змінено успішно."
user.changePassword("newpassword123");  // Виведе "Пароль змінено успішно."

// Приклад некоректного введення
const invalidUser = new User("", "manager");  // Виведе "Некоректне ім'я" та "Некоректна роль"

// Клас Адмін
class Admin extends User {
    constructor(name) {
        super(name, 'admin');
        this.users = [];
    }

    addUser(user) {
        if (user instanceof User) {
            this.users.push(user);
            console.log(`Користувач ${user.getName()} доданий.`);
        } else {
            console.log("Некоректний користувач");
        }
    }

    removeUser(userName) {
        this.users = this.users.filter(user => user.getName() !== userName);
        console.log(`Користувач ${userName} видалений.`);
    }

    changeUserRole(userName, newRole) {
        const user = this.users.find(user => user.getName() === userName);
        if (user && (newRole === 'admin' || newRole === 'user')) {
            user.role = newRole;
            console.log(`Роль користувача ${userName} змінено на ${newRole}.`);
        } else {
            console.log("Некоректний користувач або роль");
        }
    }

    getAllUsers() {
        return this.users.map(user => ({ name: user.getName(), role: user.getRole() }));
    }

    removeAllUsers() {
        this.users = [];
        console.log("Всі користувачі видалені.");
    }
}

// Приклад використання
const admin = new Admin("AdminUser");
const user1 = new User("User1", "user");
const user2 = new User("User2", "user");

admin.addUser(user1);  // Виведе "Користувач User1 доданий."
admin.addUser(user2);  // Виведе "Користувач User2 доданий."
console.log(admin.getAllUsers());  // Виведе список користувачів

admin.changeUserRole("User1", "admin");  // Виведе "Роль користувача User1 змінено на admin."
console.log(admin.getAllUsers());  // Виведе список користувачів з оновленою роллю

admin.removeUser("User2");  // Виведе "Користувач User2 видалений."
console.log(admin.getAllUsers());  // Виведе список користувачів без User2

admin.removeAllUsers();  // Виведе "Всі користувачі видалені."
console.log(admin.getAllUsers());  // Виведе порожній список