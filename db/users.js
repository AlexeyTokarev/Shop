'use strict';
const Sequelize = require('sequelize');

// Модель сущности пользователя
module.exports = db => {
    return db.define('user', {
        name: {
            type: Sequelize.STRING
        },
        surname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        login: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.INTEGER
            // references: {
            //     model: 'roles',
            //     key: 'id'
            // }
        }
    });
};