'use strict';
const Sequelize = require('sequelize');

// Модель сущности товара
module.exports = db => {
    return db.define('good', {
        name: {
            type: Sequelize.STRING
        },
        ram: {
            type: Sequelize.INTEGER
        },
        memory: {
            type: Sequelize.INTEGER
        },
        color: {
            type: Sequelize.STRING
        },
        photo: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING
        },
        typeOfGood: {
            type: Sequelize.STRING
        },
        count: {
            type: Sequelize.INTEGER
        }
    });
};