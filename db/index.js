'use strict';
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://postgres@localhost:5432/postgres');
const force = false;

let User = require('./users')(db);
let Role = require('./roles')(db);
let Basket = require('./basket')(db);
let Good = require('./goods')(db);
let Content = require('./content')(db);
// // Модель сущности пользователя
// const User = db.define('user', {
//     name: {
//         type: Sequelize.STRING
//     },
//     surname: {
//         type: Sequelize.STRING
//     },
//     email: {
//         type: Sequelize.STRING
//     },
//     login: {
//         type: Sequelize.STRING
//     },
//     password: {
//         type: Sequelize.STRING
//     },
//     role: {
//         type: Sequelize.INTEGER
//         // references: {
//         //     model: 'roles',
//         //     key: 'id'
//         // }
//     }
// });
// // Модель сущности Роли
// const Role = db.define('role', {
//     name: {
//         type: Sequelize.STRING
//     }
// });
// // Модель сущности корзины
// const Basket = db.define('basket', {
//     good: {
//         type: Sequelize.INTEGER
//         // references: {
//         //     model: 'goods',
//         //     key: 'id'
//         // }
//     },
//     count: {
//         type: Sequelize.INTEGER
//     },
//     user: {
//         type: Sequelize.INTEGER
//         // references: {
//         //     model: 'users',
//         //     key: 'id'
//         // }
//     }
// });
// // Модель сущности товара
// const Good = db.define('good', {
//     name: {
//         type: Sequelize.STRING
//     },
//     ram: {
//         type: Sequelize.INTEGER
//     },
//     memory: {
//         type: Sequelize.INTEGER
//     },
//     color: {
//         type: Sequelize.STRING
//     },
//     photo: {
//         type: Sequelize.STRING
//     },
//     price: {
//         type: Sequelize.STRING
//     },
//     typeOfGood: {
//         type: Sequelize.STRING
//     },
//     count: {
//         type: Sequelize.INTEGER
//     }
// });
// // Модель сущности контента веб-сайта
// const Content = db.define('content', {
//     text: {
//         type: Sequelize.STRING
//     },
//     images: {
//         type: Sequelize.STRING
//     }
// });

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        User.sync({force: force});
        Role.sync({force: force});
        Basket.sync({force: force});
        Good.sync({force: force});
        Content.sync({force: force});
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {
    User: User,
    Role: Role,
    Basket: Basket,
    Good: Good,
    Content: Content
};