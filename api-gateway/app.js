const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ridesRoutes = require('./api/routes/rides');
const userRoutes = require('./api/routes/user');




//Middle-wares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//CORS Error Handling
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, PUSH, PATCH, DELETE, GET, POST');
        return res.status(200).json({});
    }
    next();
});


//APIs
app.use('/rides', ridesRoutes);
app.use('/user', userRoutes);


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
        message: error.message
        }
    });
});

module.exports = app;