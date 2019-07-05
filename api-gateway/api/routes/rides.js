const express = require('express');
const router = express.Router();
const connection = require('../../db');

router.get('/getAvailableDrivers', isLoggedIn ,(req, res, next) => {
    connection.query("SELECT * FROM driver WHERE isAvailable = 1", function(err, rows) {
        if (err)
            res.status(500).json({
                message: err.message
            });
        res.status(200).json({
            drivers: rows
        });
    });
});

router.get('/getUserRides',(req, res, next) => {
    connection.query("SELECT * FROM ride WHERE rider = 1", function(err, rows) { //TODO: rider id
        if (err)
            res.status(500).json({
                message: err.message
            });
        res.status(200).json({
            rides: rows
        });
    });
});


router.post('/requestRide', (req, res, next) => {
    const fromArea = req.body.fromArea;
    const toArea = req.body.toArea;

    connection.query("INSERT INTO ride ( rider, fromArea, toArea) values (1,?,?)",[fromArea, toArea], function(err, rows) { //TODO: rider id
        if (err){
            res.status(500).json({
                message: err.message
            });
        }
        else {
            if (rows.affectedRows){
                res.status(200).json({
                    message: 'request-submit-success'
                });   
            } else {
                res.status(500).json({
                    message: 'request-submit-failure'
                });
            }  
        }
    });
});




router.get('/UserInformation',(req, res, next) => {
    connection.query("SELECT * FROM users WHERE id = 1", function(err, rows) { //TODO: rider id
        if (err)
            res.status(500).json({
                message: err.message
            });
        res.status(200).json({
            user: rows
        });
    });
});

router.patch('/UserInformation',(req, res, next) => {
    const name = req.body.name;
    const phone = req.body.phone;
    if (!name || !phone) {
        res.status(500).json({
            message: "Missing Requirements"
        });
        return;
    }
    connection.query("UPDATE users SET name = '?', phone = '?' WHERE id = 1", function(err, rows) { //TODO: rider id
        if (err)
            res.status(500).json({
                message: err.message
            });
            if (rows.affectedRows){
                res.status(200).json({
                    message: 'update-submit-success'
                });   
            } else {
                res.status(500).json({
                    message: 'update-submit-failure'
                });
            } 
    });
});

router.patch('/ChangeDriverAvailability',(req, res, next) => {
    const isAvailable = req.body.isAvailable;
    if (!isAvailable) {
        res.status(500).json({
            message: "Missing Requirements"
        });
        return;
    }
    connection.query("UPDATE driver SET isAvailable = '?' WHERE id = 1",[isAvailable], function(err, rows) { //TODO: rider id
        if (err)
            res.status(500).json({
                message: err.message
            });
            if (rows.affectedRows){
                res.status(200).json({
                    message: 'update-submit-success'
                });   
            } else {
                res.status(500).json({
                    message: 'update-submit-failure'
                });
            } 
    });
});

router.patch('/AcceptRide',(req, res, next) => {
    const rideNo = req.body.rideNo;
    if (!rideNo) {
        res.status(500).json({
            message: "Missing Requirements"
        });
        return;
    }
    connection.query("UPDATE ride SET driver = 1 WHERE rideNo = ?",[rideNo], function(err, rows) { //TODO: rider id
        if (err)
            res.status(500).json({
                message: err.message
            });
            if (rows.affectedRows){
                res.status(200).json({
                    message: 'update-submit-success'
                });   
            } else {
                res.status(500).json({
                    message: 'update-submit-failure'
                });
            } 
    });
});

router.get('/Transactions',(req, res, next) => {
    connection.query("SELECT * FROM transaction WHERE fromUser = 1 OR toUser = 1", function(err, rows) { //TODO: rider id
        if (err)
            res.status(500).json({
                message: err.message
            });
        res.status(200).json({
            user: rows
        });
    });
});

router.patch('/ChangeDriver',(req, res, next) => {
    const username = req.body.username;
    const driver = req.body.driver;
    
    if (!username || !driver) {
        res.status(500).json({
            message: "Missing Requirements"
        });
        return;
    }
    connection.query("UPDATE users SET isDriver = ? WHERE username = ?",[driver, username], function(err, rows) { //TODO: rider id
        if (err)
            res.status(500).json({
                message: err.message
            });
            if (rows.affectedRows){
                res.status(200).json({
                    message: 'update-submit-success'
                });   
            } else {
                res.status(500).json({
                    message: 'update-submit-failure'
                });
            } 
    });
});




function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.status(500).json({
        message: 'User not logged in',
    });
}

module.exports = router;