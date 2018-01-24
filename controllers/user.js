const {User, Role, Basket, Good, Content} = require('../db');

module.exports = {
    // Создание аккаунта
    createAccount: async (name, surname, email, login, password, role) => {
        let user = await User.create({
            name: name,
            surname: surname,
            email: email,
            login: login,
            password: password,
            role: role
        });
        if (!user) {
            console.log('Ошибка создания пользователя в слое сервисов');
            return;
        }
        return user;
    },
    // Удаление аккаунта
    deleteAccount: async () => {
    },
    // Редактирование аккаунта
    editAccount: async () => {
    },
    // Изменение пароля
    changePassword: async () => {
    },
    // Добавление фотографии
    addPhoto: async () => {
    },
    // Удаление фотографии
    deletePhoto: async () => {
    },
    // Изменение фотографии
    changePhoto: async () => {
    },
    // Изменение роли пользователя
    changeRole: async () => {
    },
    // Получение информации об аккаунте
    getAccount: async () => {
    },
    // Получени списка аккаунтов
    getAccountsList: async () => {
    }
};

User.create({
    name: 'Алексей',
    surname: 'Иванов',
    email: 'trololo@gmail.com',
    login: 'myLogin',
    password: 'myPassword',
    role: 1
});