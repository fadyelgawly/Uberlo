const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    port: '3306',
    user:'fady',
    password:'P@ssw0rd',
    database: 'uberlo'
});

connection.connect(err => {
    if(err){
        console.log(err.message);
    } else {
        console.log("Connected to database successfully...")
    }
});

module.exports = connection