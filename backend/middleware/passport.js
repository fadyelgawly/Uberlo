var LocalStrategy   = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var connection = require('../db');
// expose this function to our app using module.exports
module.exports = function(passport) {

// =========================================================================
// passport session setup ==================================================
// =========================================================================
// required for persistent login sessions
// passport needs ability to serialize and unserialize users out of session

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    connection.query("SELECT * FROM users WHERE id = ? ",[id], function(err, rows){
        done(err, rows[0]);
    });
});

// =========================================================================
// LOCAL SIGNUP ============================================================
// =========================================================================
// we are using named strategies since we have one for login and one for signup
// by default, if there was no name, it would just be called 'local'

passport.use(
    'local-signup',
    new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        connection.query("SELECT * FROM users WHERE username = ?",[username], function(err, rows) {
            if (err)
                return done(err);
            if (rows.length) {
                return done(null, false);
            } else {
                // if there is no user with that username
                // create the user
                var newUserMysql = {
                    username: username,
                    password: bcrypt.hashSync(password, null, null),
                    firstname: req.firstname,
                    lastname: req.lastname,
                    phone: req.phone,
                    isDriver: req.isDriver
                };

                var insertQuery = "INSERT INTO users ( username, password, firstname,lastname , phone, isDriver) values (?,?,?,?,?,?)";
                connection.query(insertQuery,[  
                        newUserMysql.username, 
                        newUserMysql.password,    
                        newUserMysql.firstname, 
                        newUserMysql.lastname,
                        newUserMysql.firstname,
                        newUserMysql.isDriver
                        ],
                    function(err, rows) {
                    if(err)
                        return done(err);
                    newUserMysql.id = rows.insertId;

                    return done(null, newUserMysql);
                });
            }
        });
    })
);

// =========================================================================
// LOCAL LOGIN =============================================================
// =========================================================================
// we are using named strategies since we have one for login and one for signup
// by default, if there was no name, it would just be called 'local'

passport.use(
    'local-login',
    new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) { // callback with email and password from our form
        connection.query("SELECT * FROM users WHERE username = ?",[username], function(err, rows){
            if (err)
                return done(err);
            if (!rows.length) {
                return done("no user");
            }

            // if the user is found but the password is wrong
            if (!bcrypt.compareSync(password, rows[0].password))
                return done("wrong password"); // create the loginMessage and save it to session as flashdata

            return done(null, rows[0]);
        });
    })
);
};