'use strict';

//   Minimum
// Створення масиву «Список покупок»
function ProductCard(productName, count, isBought, priceForOne) {
    this.productName = productName;
    this.count = count;
    this.isBought = isBought;
    this.priceForOne = priceForOne;
    this.sum = count * priceForOne;
}

const shoppingList = [
    new ProductCard("Iphone", 100, false, 1020),
    new ProductCard("Samsung", 10, true, 900),
    new ProductCard("Xiomi", 90, false, 1080)
];

// Функція для позначення продукту як придбаного
const purchase = (product) => {
    const itemToBuy = shoppingList.find(item => item.productName === product);
    if (itemToBuy) {
        itemToBuy.isBought = true;
    }
};

purchase("shower gel");

// Функція для виведення всього списку з непридбаними продуктами спочатку
const displayShoppingList = (list) => {
    console.log('Not bought yet:');
    list.filter(item => !item.isBought).forEach(item => {
        console.log(`${item.productName} - Quantity: ${item.count}, Price: ${item.priceForOne}, Total: ${item.sum}`);
    });

    console.log('\nAlready bought:');
    list.filter(item => item.isBought).forEach(item => {
        console.log(`${item.productName} - Quantity: ${item.count}, Price: ${item.priceForOne}, Total: ${item.sum}`);
    });
};

displayShoppingList(shoppingList);

// Normal 
// Видалення продукту зі списку
const removeProduct = (list, productName) => {
    const newList = list.filter(item => item.productName !== productName);
    return newList;
};

const updatedShoppingList = removeProduct(shoppingList, "Samsung");
console.log("Shopping list after deleting Samsung:", updatedShoppingList);

// Додавання покупки в список
const addProduct = (list, product) => {
    const existingProduct = list.find(item => item.productName === product.productName);
    if (existingProduct) {
        existingProduct.count += product.count;
        existingProduct.sum = existingProduct.count * existingProduct.priceForOne;
    } else {
        list.push(product);
    }
};

addProduct(updatedShoppingList, new ProductCard("Samsung", 5, false, 90));
console.log("Shopping list after adding Samsung:", updatedShoppingList);

// Maximum
const getTotalSum = (list) => {
    return list.reduce((acc, item) => acc + item.sum, 0);
};

console.log("Total sum of all products:", getTotalSum(updatedShoppingList));

// Підрахунок суми непридбаних продуктів
const getTotalSumByBoughtStatus = (list, isBought) => {
    return list.filter(item => item.isBought === isBought)
               .reduce((acc, item) => acc + item.sum, 0);
};

console.log("Total sum of not bought products:", getTotalSumByBoughtStatus(updatedShoppingList, false));
console.log("Total sum of bought products:", getTotalSumByBoughtStatus(updatedShoppingList, true));

// Сортування продуктів за сумою
const sortProductsBySum = (list, ascending = true) => {
    return [...list].sort((a, b) => ascending ? a.sum - b.sum : b.sum - a.sum);
};

console.log("Products sorted by sum (ascending):", sortProductsBySum(updatedShoppingList));
console.log("Products sorted by sum (descending):", sortProductsBySum(updatedShoppingList, false));

