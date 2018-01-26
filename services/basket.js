'use strict';

const Basket = require('./../controllers/basket');

module.exports = {
    // Добавление товара в корзину
    addToBasket: async (good, count, user) => {
        const result = await Basket.addToBasket(good, count, user);
        if(result) {
            console.log(result);
        }
    },
    // Удаление товара из корзины
    removeFromBasket: async id => {
        const result = await Basket.removeFromBasket(id);
        if(result) {
            console.log(result);
        }
    }
};