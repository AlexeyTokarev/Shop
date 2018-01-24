'use strict';
const Sequelize = require('sequelize');

// Модель сущности контента веб-сайта
module.exports = db => {
    return db.define('content', {
        text: {
            type: Sequelize.STRING
        },
        images: {
            type: Sequelize.STRING
        }
    });
};