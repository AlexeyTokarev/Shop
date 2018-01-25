'use strict';

const User = require('./../controllers/user');
const Role = require('./../controllers/role');

module.exports = {
    // Создание аккаунта
    createAccount: async () => {
        let name, surname, email, login, password, role;
        let user = await User.createAccount(name, surname, email, login, password, role);
        console.log(user);
    },
    // Удаление аккаунта
    deleteAccount: () => {
    },
    // Редактирование аккаунта
    editAccount: () => {
    },
    // Получение информации об аккаунте
    getAccountById: () => {
    },
    // Получени списка аккаунтов
    getAccountsList: () => {
    },
    // Создаем новую роль пользователя
    createRole: async () => {
        let name;
        let role = await Role.createRole(name);
        console.log(role)
    }
};