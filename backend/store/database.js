<<<<<<< HEAD
const pgp = require('pg-promise')();

const {USER, PASSWORD, HOST, PORT, DATABASE} = process.env;
const db = pgp(`postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`);

function connect(){ 
    db.connect()
    .then(() => {
        console.log('Connected to PosgreSQL');
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
});
};
connect();


module.exports = {
    db,
    pgp,
=======

const pgp = require('pg-promise')();

const {USER, PASSWORD, HOST, PORTDB, DATABASE} = process.env;
const db = pgp(`postgres://${USER}:${PASSWORD}@${HOST}:${PORTDB}/${DATABASE}`);

function connect(){ 
    db.connect()
    .then(() => {
        console.log('Connected to PosgreSQL');
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
});
};
connect();


module.exports = {
    db,
    pgp,
>>>>>>> 4d687fc07faef7c591c8501ac5bf844bacfebf6e
}