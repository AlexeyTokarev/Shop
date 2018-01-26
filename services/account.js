'use strict';

const User = require('./../controllers/user');
const Role = require('./../controllers/role');

module.exports = {
    // Создание аккаунта
    createAccount: async (name, surname, email, login, password, role) => {
        const result = await User.createAccount(name, surname, email, login, password, role);
        if (result) {
            console.log(result);
            return result;
        }
    },
    // Удаление аккаунта
    deleteAccount: async id => {
        const result = await User.deleteAccount(id);
        if (result) {
            console.log(result);
            return result;
        }
    },
    // Редактирование аккаунта
    editAccount: async () => {
        return {
            changeName: async (id, name) => {
                const result = await User.changeName(id, name);
                if (result) {
                    console.log(result);
                    return result;
                }
            },
            changeSurname: async (id, surname) => {
                const result = await User.changeSurname(id, surname);
                if (result) {
                    console.log(result);
                    return result;
                }
            },
            changeEmail: async (id, email) => {
                const result = await User.changeEmail(id, email);
                if (result) {
                    console.log(result);
                    return result;
                }
            },
            changeLogin: async (id, login) => {
                const result = await User.changeLogin(id, login);
                if (result) {
                    console.log(result);
                    return result;
                }
            },
            changePassword: async (id, password) => {
                const result = await User.changePassword(id, password);
                if (result) {
                    console.log(result);
                    return result;
                }
            },
            changeRole: async (id, role) => {
                const result = await User.changeRole(id, role);
                if (result) {
                    console.log(result);
                    return result;
                }
            }
        }
    },
    // Получение информации об аккаунте
    getAccountById: async id => {
        const result = await User.getAccountById(id);
        if (result) {
            console.log(result);
            return result;
        }
    },
    // Получени списка аккаунтов
    getAccountsList: async () => {
        const result = await User.getAccountsList();
        if (result) {
            console.log(result);
            return result;
        }
    },
    // Создаем новую роль пользователя
    createRole: async name => {
        const result = await Role.createRole(name);
        if (result) {
            console.log(result);
            return result;
        }
    }
};