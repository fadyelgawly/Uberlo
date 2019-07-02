const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database: 'uberlo'
});

connection.connect(err => {
    if(err){
        return err;
    }
});

console.log(connection);

app.use(cors());

app.get('/', (req,res) => {
    res.send('hello from server')
});

app.get


app.listen(4000, () => {
    console.log(`Products server listening on Port 4000`)
});


