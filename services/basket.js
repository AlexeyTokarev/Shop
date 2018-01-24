'use strict';

const Basket = require('./../controllers/basket');

module.exports = {
    // Добавление товара в корзину
    addToBasket: async () => {
        let good, count, user;
        let basket = await Basket.addToBasket(good, count, user);
        console.log(basket);
    },
    // Удаление товара из корзины
    removeFromBasket: () => {
    }
};