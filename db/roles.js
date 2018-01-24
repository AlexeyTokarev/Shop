'use strict';
const Sequelize = require('sequelize');

// Модель сущности Роли
module.exports = db => {
    return db.define('role', {
        name: {
            type: Sequelize.STRING
        }
    });
};