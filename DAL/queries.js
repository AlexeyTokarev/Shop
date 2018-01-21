const {User, Role, Basket, Good, GoodType}= require('../DB/models');

User.create({
    name: 'Алексей',
    surname: 'Алексеев',
    email: 'trololo@gmail.com',
    login: 'myLogin',
    password: 'myPassword',
    role: 0
});
