const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    port: '3306',
    user:'root',
    password:'',
    database: 'test_database'
});

connection.connect(err => {
    if(err){
        console.log(err.message);
    } else {
        console.log("Connected to database successfully...")
    }
});

module.exports = connection