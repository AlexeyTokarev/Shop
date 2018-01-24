'use strict';

const Content = require('./../controllers/content');

module.exports = {
    // Добавление контент-текста
    addContentText: async () => {
        let text;
        let content = Content.addContentText(text);
        console.log(content);
    },
    // Удаление контент-текста
    deleteContentText: () => {
    },
    // Редактирование контент-текста
    editContentText: () => {
    },
    // Добавление контент-фото
    addContentPhoto: () => {
    },
    // Удаление контент-фото
    deleteContentPhoto: () => {
    },
    // Изменение контент-фото
    changeContentPhoto: () => {
    }
};