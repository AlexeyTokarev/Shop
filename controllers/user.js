const {User, Role, Basket, Good, Content, Image} = require('../db');

module.exports = {
    // Создание аккаунта
    createAccount: async (name, surname, email, login, password, role) => {
        const result = await User.create({
            name: name,
            surname: surname,
            email: email,
            login: login,
            password: password,
            role: role
        });
        if (!result) {
            console.log('Ошибка создания пользователя в слое сервисов');
            return;
        }
        return result;
    },
    // Удаление аккаунта
    deleteAccount: async id => {
        const result = await User.destroy({where: {id: id}});
        if (!result && result === 0) {
            return new Error('Ошибка при удалении аккаунта');
        }
        return result;
    },
    // Изменение имени
    changeName: async (id, name) => {
        const result = await User.update(
            {name: name},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании аккаунта');
        }
        return result;
    },
    // Изменение фамилии
    changeSurname: async (id, surname) => {
        const result = await User.update(
            {surname: surname},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании аккаунта');
        }
        return result;
    },
    // Изменение email
    changeEmail: async (id, email) => {
        const result = await User.update(
            {email: email},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании аккаунта');
        }
        return result;
    },
    // Изменение логина
    changeLogin: async (id, login) => {
        const result = await User.update(
            {login: login},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании аккаунта');
        }
        return result;
    },
    // Изменение пароля
    changePassword: async (id, password) => {
        const result = await User.update(
            {password: password},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании аккаунта');
        }
        return result;
    },
    // Изменение роли пользователя
    changeRole: async (id, role) => {
        const result = await User.update(
            {role: role},
            {where: {id: id}}
        );
        if (!result && result === 0) {
            return new Error('Ошибка при редактировании аккаунта');
        }
        return result;
    },
    // Получение информации об аккаунте
    getAccountById: async id => {
        const result = await User.findOne({where: {id: id}});
        if (!result) {
            return new Error('Ошибка при получении аккаунта по id');
        }
        return result;
    },
    // Получени списка аккаунтов
    getAccountsList: async () => {
        const result = await User.findAll();
        if (!result) {
            return new Error('Ошибка при получении списка аккаунтов');
        }
        return result;
    }
};