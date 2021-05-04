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

router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
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

router.post('/celebrities', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body
    Celebrity.create({name, occupation, catchPhrase})
    .then(() => res.redirect('/celebrities'))
    .catch((error) => {
        res.render('/celebrities/new', error)
      })
})

router.post('/celebrities/:id/delete', (req, res, next) => {
    const {id} = req.params
    Celebrity.findByIdAndRemove(id)
    .then(() => {
        res.redirect('/celebrities')
    })
    .catch((error) => {
        next(error)
    })
})

router.get('/celebrities/:id/edit', (req, res, next) => {
    const {id} = req.params.id
    Celebrity.findById(id)
    .then((celebrityId) => res.render('celebrities/edit', celebrityId))
    .catch((error) => next(error))
})

router.post('/celebrities/:id', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body
    Celebrity.findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase}, {new:true})
    .then(() => {
        console.log('update')
        res.redirect('/celebrities')
    })
    .catch((error) => console.log(error))
})


module.exports = router;