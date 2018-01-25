const {User, Role, Basket, Good, Content, Image} = require('../db');

// Добавление тестового пользователя в таблицу
User.create({
    name: 'testName',
    surname: 'testSurname',
    email: 'test@gmail.com',
    login: 'testLogin',
    password: 'testPassword',
    role: 1
});

// Добавление тестовой роли пользователя в таблицу
Role.create({
    name: 'testRole'
});

// Добавление тестового продукта в таблицу
Good.create({
    name: 'testName',
    ram: 4,
    memory: 500,
    color: 'testColor',
    price: 3000,
    typeOfGood: 'testLaptop',
    count: 10
});

// Заполнение корзины тестовыми данными
Basket.create({
    good: 1,
    count: 1,
    user: 1
});

// Добавление тестового контента в таблицу
Content.create({
    text: 'testContent'
});

// Добавление тестового контента в таблицу
Image.create({
    imageUrl: 'testContent'
});