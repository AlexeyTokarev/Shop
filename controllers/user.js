const {User, Role, Basket, Good, Content}= require('../db');

User.create({
    name: 'Алексей',
    surname: 'Иванов',
    email: 'trololo@gmail.com',
    login: 'myLogin',
    password: 'myPassword',
    role: 1
});