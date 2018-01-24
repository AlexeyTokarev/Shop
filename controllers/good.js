const {User, Role, Basket, Good, Content} = require('../db');

module.exports = {
    // Добавление продукта
    addProduct: async (name, ram, memory, color, price, typeOfGood, count) => {
        let product = await Good.create({
            name: name,
            ram: ram,
            memory: memory,
            color: color,
            price: price,
            typeOfGood: typeOfGood,
            count: count
        });
        if (!product) {
            console.log('Ощибка при создании продукта в контроллере');
            return;
        }
        return product;
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
    },
    // Изменение типа продукта
    changeProductType: () => {
    }
};

Good.create({
    name: 'Lenovo',
    ram: 4,
    memory: 500,
    color: 'black',
    price: 3000,
    typeOfGood: 'Laptop',
    count: 10
});