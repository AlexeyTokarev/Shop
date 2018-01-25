const {User, Role, Basket, Good, Content, Image} = require('../db');

module.exports = {
    // Добавление товара в корзину
    addToBasket: async (good, count, user) => {
        const result = await Basket.create({
            good: good,
            count: count,
            user: user
        });
        if (!result) {
            console.log('Ошибка при добавлении товара в корзину в контроллере');
            return;
        }
        return result;
    },
    // Удаление товара из корзины
    removeFromBasket: async id => {
        const result = await Basket.destroy({where: {id: id}});
        if (!result && result === 0) {
            return new Error('Ошибка при удалении товара из корзины');
        }
        return result;
    }
};