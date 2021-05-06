const express = require('express');
const router = express.Router();


const Movie = require('../models/Movie.model');

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((movies) => {
    console.log(movies.length)
    res.render('movies/index', {movies});
  })
  .catch((error) => {
    console.log(`an error ocurred while listing celebrities:${eror}`)
    next(error)
  })
})

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((movie) => {
    console.log(movie)
    res.render('movies/details', {movie})
  })
  .catch((error) => console.log(error))
})

router.get('/movies/create', (req, res, next) => {
  res.render('movies/create')
});

router.post('movies/create', (req, res, next) => {
  const {title, genre, plot} = req.body;
  Movie.create({title, genre, plot})
  .then((newMovie) => {
    console.log(newMovie)
    res.redirect('/movies')
  })
  .catch((error) => console.log(error))
})




module.exports = router;
