const express = require('express');
const connection = require('../../db')
const router = express.Router();


router.post('/signup', (req, res, next) => {

    
    const username = req.body.fields.username;
	const password = req.body.fields.password;
	const email = req.body.fields.email;
	const isDriver = req.body.fields.isDriver;
    const phone = req.body.fields.phone;
    
    console.log(req.body);

    if (username && password && email && isDriver && phone) {

        connection.query('INSERT INTO `users` (`username`, `password`, `email`, `isDriver`, `phone`, `isConfirmed`) VALUES (? ,? ,?, ?, ?, 0)' , [username, password, email, isDriver, phone], function(error, results, fields) {
            if (error) {

                res.status(500).json({
                    message: error.message
                });
                console.log(error.message);
                return;
            }
            if (results.affectedRows > 0) {
			 	//req.session.loggedin = true;
				//req.session.username = username;
            res.status(200).json({
                    message: 'Successfully signed up!'
                });
                return;
			}  
		});
    } else {
        res.status(500).json({
            message: 'Missing requirement'
        });
	}
});


module.exports = router;