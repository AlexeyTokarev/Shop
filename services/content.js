'use strict';

const Content = require('./../controllers/content');
const Image = require('./../controllers/image');

module.exports = {
    // Добавление контент-текста
    addContentText: async text => {
        const result = Content.addContentText(text);
        if (result) {
            console.log(result);
        }
    },
    // Удаление контент-текста
    deleteContentText: async id => {
        const result = Content.deleteContentText(id);
        if (result) {
            console.log(result);
        }
    },
    // Редактирование контент-текста
    editContentText: async (id, text) => {
        const result = await Content.editContentText(id, text);
        if (result) {
            console.log(result);
        }
    },
    // Добавление контент-фото
    addContentPhoto: async imageUrl => {
        const result = await Image.addContentPhoto(imageUrl);
        if (result) {
            console.log(result);
        }
    },
    // Удаление контент-фото
    deleteContentPhoto: async id => {
        const result = await Image.deleteContentPhoto(id);
        if (result) {
            console.log(result);
        }
    },
    // Изменение контент-фото
    changeContentPhoto: async (id, imageUrl) => {
        const result = await Image.changeContentPhoto(id, imageUrl);
        if (result) {
            console.log(result);
        }
    }
};