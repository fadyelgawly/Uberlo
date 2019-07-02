const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    port: '8889',
    user:'root',
    password:'root',
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