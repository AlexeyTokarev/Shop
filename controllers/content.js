const {User, Role, Basket, Good, Content, Image} = require('../db');

module.exports = {
    // Добавление контент-текста
    addContentText: async text => {
        const result = await Content.create({
            text: text
        });
        if (!result) {
            console.log('Ошибка при добавлении контента в контроллере');
            return ;
        }
        return result;
    },
    // Удаление контент-текста
    deleteContentText: async id => {
        const result = await Content.destroy({where: {id: id}});
        if (!result && result === 0) {
            return new Error('Ошибка при удалении контента');
        }
        return result;
    },
    // Редактирование контент-текста
    editContentText: async (id, text) => {
        const result = await Content.update(
            {text: text},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании контент-текста');
        }
        return result;
    }
};