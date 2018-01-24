const {User, Role, Basket, Good, Content} = require('../db');

module.exports = {
    // Добавление товара в корзину
    addToBasket: async (good, count, user) => {
        let basket = await Basket.create({
            good: good,
            count: count,
            user: user
        });
        if (!basket) {
            console.log('Ошибка при добавлении товара в корзину в контроллере');
            return;
        }
        return basket;
    },
    // Удаление товара из корзины
    removeFromBasket: () => {
    }
};


Basket.create({
    good: 1,
    count: 1,
    user: 1
});