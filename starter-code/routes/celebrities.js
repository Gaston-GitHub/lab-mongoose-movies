const express = require('express')
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');



router.get('/celebrities', (req, res, next) => {
    Celebrity.find({})
    .then((celebrities) => {
        res.render('celebrities/index', {celebrities})
    })
    .catch(error => { 
        next(error)
    })
})

router.get('/celebrities/:id', (req, res, next) => {
    const id = req.params.id
    Celebrity.findById(id)
    .then((celebrity) => {
        console.log('celebrity', celebrity)
        res.render('celebrities/show', {celebrity})
    })
    .catch(error => {
        next(error)
    })
})

module.exports = router;