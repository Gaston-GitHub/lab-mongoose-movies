const express = require('express');
const router = express.Router();


const Movie = require('../models/Movie.model');

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((movies) => {
    console.log(movies.length)
    res.render('movies/index', [movies]);
  })
  .catch((error) => {
    console.log(`an error ocurred while listing celebrities:${eror}`)
    next(error)
  })
})

module.exports = router;
