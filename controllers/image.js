const {User, Role, Basket, Good, Content, Image} = require('../db');

module.exports = {
    // Добавление фото
    addContentPhoto: async imageUrl => {
        const result = await Image.create({
            imageUrl: imageUrl
        });
        if (!result) {
            console.log('Ошибка добавления изображения');
            return;
        }
        return result;
    },
    // Удаление фото
    deleteContentPhoto: async id => {
        const result = await Image.destroy({where: {id: id}});
        if (!result && result === 0) {
            return new Error('Ошибка при удалении изображения');
        }
        return result;
    },
    // Изменение фото
    changeContentPhoto: async (id, imageUrl) => {
        const result = await Image.update(
            {imageUrl: imageUrl},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании изображения');
        }
        return result;
    }
};