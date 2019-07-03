const express = require('express');
const router = express.Router();




module.exports = function(passport) {
    router.post("/signup", function(req, res) {
        passport.authenticate("local-signup", function(err, user, info) {
            if (err) {
            res.status(404).json(err);
            return;
            }

            if (user) {
            res.status(200);
            res.json({
                userInfo: user,
            });
            } else {
            res.status(401).json(info);
            }
        })(req, res);
    });

    router.post("/login", function(req, res) {
        passport.authenticate('local-login', function(err, user, info) {
            if (err) {
            res.status(404).json(err);
            return;
            }

            if (user) {
            res.status(200);
            res.json({
                userInfo: user,
            });
            } else {
            res.status(401).json(info);
            }
        })(req, res);
    });

    router.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });

    return router;
};