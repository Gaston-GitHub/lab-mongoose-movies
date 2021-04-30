const express = require('express')
const Celebrity = require('../models/Celebrity.model');

const router = express.Router();

router.get('/index', (req, res, next) => {
    Celebrity.find({})
    .then((celebrities) => {
        res.render('celebrities/index', {celebrities})
    })
    .catch(error => { 
        next(error)
    })
})

module.exports = router;