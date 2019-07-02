const express = require('express');
const router = express.Router();


router.post('/signup', (req, res, next) => {

    
    var username = req.body.username;
	var	password = req.body.password;
	var	email = req.body.email;
	var	isDriver = req.body.isDriver;
    var	phone = req.body.phone;
    
    console.log(username);

    if (username && password && email && isDriver && phone) {
        connection.query('INSERT INTO `users` (`username`, `password`, `email`, `isDriver`, `phone`, `isConfirmed`) VALUES (? ,? ,?, ?, ?, ? , 0)' ,
         [username, password, email, isDriver, phone, isConfirmed], function(error, results, fields) {
			console.log(results);
			if (results.affectedRows > 0) {
				req.session.loggedin = true;
				req.session.username = username;
                res.status(200).json({
                    message: 'Handing GET requests to /rides'
                });
			} 
		});
	} else {
        res.status(500).json({
            message: 'Missing requirement'
        });

	}

    res.status(200).json({
        message: 'Handing POST requests to /rides'
    });
});


module.exports = router;