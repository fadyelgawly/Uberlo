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

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'Updated',
        id : id
    });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'Deleted',
        id : id
    });
});

module.exports = router;