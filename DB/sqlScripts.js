'use strict';
const pgp = require('pg-promise')(/*options*/);
const cn = 'postgres://postgres@localhost/postgres';
const db = pgp(cn);

module.exports = {
    countOfProducts: () => {
        return new Promise((resolve, reject) => {
            db.one('SELECT COUNT(*) FROM production')
                .then(res => {
                    // console.log(res.count);
                    resolve(res.count);
                })
                .catch(error => {
                    reject(error);
                });
        })
    },
    getProductNameById: (id) => {
        return new Promise((resolve, reject) => {
        db.one(`SELECT name FROM production WHERE id = ${id}`)
            .then(res => {
                // console.log(res.name);
                return (res);
            })
            .catch(error => {
                console.log(error);
            });
        })
    },
    addProduct: (name) => {
        return new Promise((resolve, reject) => {
            db.one(`INSERT INTO production (id, name) VALUES (3, "${name}")`)
                .then(res => {
                    // console.log(res.name);
                    return (res);
                })
                .catch(error => {
                    console.log(error);
                });
        })
    }
};