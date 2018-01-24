const {User, Role, Basket, Good, Content}= require('../db');

Good.create({
    name: 'Lenovo',
    ram: 4,
    memory: 500,
    color: 'black',
    price: 3000,
    typeOfGood: 'Laptop',
    count: 10
});