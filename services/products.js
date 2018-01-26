'use strict';

const Product = require('./../controllers/good');

module.exports = {
    // Добавление продукта
    addProduct: async (name, ram, memory, color, price, typeOfGood, count) => {
        const result = await Product.addProduct(name, ram, memory, color, price, typeOfGood, count);
        if (result) {
            console.log(result);
            return result;
        }
    },
    // Удаление продукта
    deleteProduct: async id => {
        const result = await Product.deleteProduct(id);
        if (result) {
            console.log(result);
            return result;
        }
    },
    // Редактирование продукта
    editProduct: async () => {
        return {
            changeCount: async (id, count) => {
                const result = await Product.changeCount(id, count);
                if (result) {
                    console.log(result);
                    return result;
                }
            },
            changeProductType: async (id, type) => {
                const result = await Product.changeProductType(id, type);
                if (result) {
                    console.log(result);
                    return result;
                }
            },
            changePrice: async (id, price) => {
                const result = await Product.changePrice(id, price);
                if (result) {
                    console.log(result);
                    return result;
                }
            },
            changePhoto: async (id, photo) => {
                const result = await Product.changePhoto(id, photo);
                if (result) {
                    console.log(result);
                    return result;
                }
            },
            changeColor: async (id, color) => {
                const result = await Product.changeColor(id, color);
                if (result) {
                    console.log(result);
                    return result;
                }
            },
            changeMemory: async (id, memory) => {
                const result = await Product.changeMemory(id, memory);
                if (result) {
                    console.log(result);
                    return result;
                }
            },
            changeRam: async (id, ram) => {
                const result = await Product.changeRam(id, ram);
                if (result) {
                    console.log(result);
                    return result;
                }
            },
            changeName: async (id, name) => {
                const result = await Product.changeName(id, name);
                if (result) {
                    console.log(result);
                    return result;
                }
            }
        }
    },
    // Получение продукта
    getProduct: async id => {
        const result = await Product.getProductById(id);
        if (result) {
            console.log(result);
            return result;
        }
    },
    // Получение списка продуктов
    getProductsList: async () => {
        const result = await Product.getProductsList();
        if (result) {
            console.log(result);
            return result;
        }
    }
};