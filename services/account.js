'use strict';

const User = require('./../controllers/user');
const Role = require('./../controllers/role');

module.exports = {
    // Создание аккаунта
    createAccount: async () => {
        let name, surname, email, login, password, role;
        const result = await User.createAccount(name, surname, email, login, password, role);
        console.log(result);
    },
    // Удаление аккаунта
    deleteAccount: async () => {
    },
    // Редактирование аккаунта
    editAccount: async (id, data) => {
        return {
            changeName: async () => {},
            changeSurname: async () => {},
            changeEmail: async () => {},
            changeLogin: async () => {},
            changePassword: async () => {},
            changeRole: async () => {}
        }
    },
    // Получение информации об аккаунте
    getAccountById: async () => {
    },
    // Получени списка аккаунтов
    getAccountsList: async () => {
    },
    // Создаем новую роль пользователя
    createRole: async () => {
        let name;
        let role = await Role.createRole(name);
        console.log(role)
    }
};