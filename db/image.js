'use strict';
const Sequelize = require('sequelize');

// Модель сущности контента веб-сайта
module.exports = db => {
    return db.define('image', {
        imageUrl: {
            type: Sequelize.STRING
        }
    });
};