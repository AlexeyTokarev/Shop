const {User, Role, Basket, Good, Content, Image} = require('../db');

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
    deleteProduct: async id => {
        const result = await Good.destroy({where: {id: id}});
        if (!result && result === 0) {
            return new Error('Ошибка при удалении продукта');
        }
        return result;
    },
    // Получение продукта
    getProductById: async id => {
        const result = await Good.findOne({where: {id: id}});
        if (!result) {
            return new Error('Ошибка при получении продукта по id');
        }
        return result;
    },
    // Получение списка продуктов
    getProductsList: async () => {
        const result = await Good.findAll();
        if (!result) {
            return new Error('Ошибка при получении списка продуктов');
        }
        return result;
    },
    // Изменение имени продукта
    changeName: async (id, name) => {
        const result = await Good.update(
            {name: name},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании продукта');
        }
        return result;
    },
    // Изменение объем RAM продукта
    changeRam: async (id, ram) => {
        const result = await Good.update(
            {ram: ram},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании продукта');
        }
        return result;
    },
    // Изменение объем памяти продукта
    changeMemory: async (id, memory) => {
        const result = await Good.update(
            {memory: memory},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании продукта');
        }
        return result;
    },
    // Изменение цвета продукта
    changeColor: async (id, color) => {
        const result = await Good.update(
            {color: color},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании продукта');
        }
        return result;
    },
    // Изменение фотографии продукта
    changePhoto: async (id, photo) => {
        const result = await Good.update(
            {photo: photo},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании продукта');
        }
        return result;
    },
    // Изменение цены продукта
    changePrice: async (id, price) => {
        const result = await Good.update(
            {price: price},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании продукта');
        }
        return result;
    },
    // Изменение типа продукта
    changeProductType: async (id, type) => {
        const result = await Good.update(
            {typeOfGood: type},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании продукта');
        }
        return result;
    },
    // Изменение количества продукта
    changeCount: async (id, count) => {
        const result = await Good.update(
            {count: count},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании продукта');
        }
        return result;
    }
};