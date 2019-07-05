const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const cors = require('cors');
var passport = require('passport');
const ridesRoutes = require('./api/routes/rides');
require('./middleware/passport')(passport)

//Middle-wares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());



//APIs
app.use('/rides', ridesRoutes);
const userRoutes = require('./api/routes/user')(passport);
app.use('/user', userRoutes);
//Error Handeling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;