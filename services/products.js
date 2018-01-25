'use strict';

const Product = require('./../controllers/good');

module.exports = {
    // Добавление продукта
    addProduct: async () => {
        let name, ram, memory, color, price, typeOfGood, count;
        let product = await Product.addProduct(name, ram, memory, color, price, typeOfGood, count);
        console.log(product);
    },
    // Удаление продукта
    deleteProduct: () => {
    },
    // Редактирование продукта
    editProduct: () => {
    },
    // Получение продукта
    getProduct: () => {
    },
    // Получение списка продуктов
    getProductsList: () => {
    }
};