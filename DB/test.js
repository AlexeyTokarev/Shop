const pgp = require('pg-promise')(/*options*/);

const cn = 'postgres://postgres@localhost/postgres';

const db = pgp(cn); // database instance;

function selectById(id) {
    // select and return user name from id:
    db.one(`SELECT name FROM production WHERE id = ${id}`)
        .then(user => {
            console.log(user.name); // print user name;
        })
        .catch(error => {
            console.log(error); // print the error;
        });
}

function countOfProducts() {
    // select and return user name from id:
    db.one('SELECT COUNT(*) FROM production')
        .then(user => {
            console.log(user.count); // print user name;

        })
        .catch(error => {
            console.log(error); // print the error;
        });
}

countOfProducts();


// const pg = require('pg');
// const conString = "postgres://postgres@localhost/postgres";
//
// const client = new pg.Client(conString);
// client.connect();
//
// const query = client.query("SELECT * FROM production");
// console.log(query);

// var Promise = require('bluebird');
// var getConnection = require('pg-connect')("postgres://postgres@localhost/postgres");
//
// Promise.using(
//     getConnection(),
//     function (query) {
//         return query('SELECT * from production')
//     }
// ).
// then(function (results) {
//     console.log(results.rows[0].id);
// });