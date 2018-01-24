'use strict';
const Sequelize = require('sequelize');

// Модель сущности корзины
module.exports = db => {
    return db.define('basket', {
        good: {
            type: Sequelize.INTEGER
            // references: {
            //     model: 'goods',
            //     key: 'id'
            // }
        },
        count: {
            type: Sequelize.INTEGER
        },
        user: {
            type: Sequelize.INTEGER
            // references: {
            //     model: 'users',
            //     key: 'id'
            // }
        }
    });
};