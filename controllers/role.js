const {User, Role, Basket, Good, Content} = require('../db');

module.exports = {
    createRole: async (name) => {
        let role = await Role.create({
            name: name
        });
        if (!role) {
            console.log('Ошибка при создании новой роли пользователя в контроллере');
            return;
        }
        return role;
    }
};

Role.create({
    name: 'user'
});