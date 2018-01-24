const {User, Role, Basket, Good, Content} = require('../db');

module.exports = {
    // Добавление контент-текста
    addContentText: async (text) => {
        let content = await Content.create({
            text: text
        });
        if (!content) {
            console.log('Ошибка при добавлении контента в контроллере');
            return;
        }
        return content;
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

Content.create({
    text: 'пока!!!'
});
