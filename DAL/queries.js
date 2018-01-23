const {User, Role, Basket, Good, Content}= require('../DB/models');

User.create({
    name: 'Алексей',
    surname: 'Алексеев',
    email: 'trololo@gmail.com',
    login: 'myLogin',
    password: 'myPassword',
    role: 1
});

Role.create({
    name: 'user'
});

Good.create({
    name: 'Lenovo',
    ram: 4,
    memory: 500,
    color: 'black',
    price: 3000,
    typeOfGood: 'Laptop',
    count: 10
});

Basket.create({
    good: 1,
    count: 1,
    user: 1
});

Content.create({
    text: 'Привет!!!'
});
