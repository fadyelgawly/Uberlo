const express = require('express');
const connection = require('../../db')
const router = express.Router();


router.post('/signup', (req, res, next) => {
    passport.authenticate('local-signup', { successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true })
});


app.post('/login',
  passport.authenticate('local-login', { successRedirect: '/',
                                    failureRedirect: '/login',
                                    failureFlash: true })
);

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});


module.exports = router;