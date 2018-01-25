const {User, Role, Basket, Good, Content, Image} = require('../db');

module.exports = {
    createRole: async name => {
        const result = await Role.create({
            name: name
        });
        if (!result) {
            console.log('Ошибка при создании новой роли пользователя в контроллере');
            return;
        }
        return result;
    }
};