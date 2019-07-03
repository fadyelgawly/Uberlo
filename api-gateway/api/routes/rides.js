const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req.body.id);

    res.status(200).json({
        message: 'Handing GET requests to /rides'
    });
});


router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handing POST requests to /rides'
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'Handing GET requests to /rides/',
        id : id
    });
});

router.patch('/:id', isLoggedIn, (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'Updated',
        id : id
    });
});

router.delete('/:id', isLoggedIn, (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'Deleted',
        id : id
    });
});


function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/user/login');
}

module.exports = router;