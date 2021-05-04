
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');


const celebrities = [
    {name:'Adam Sandler', occupation:'Actor', catchPhrase: 'Oh really, fool?'},
    {name:'Ben Stiller ', occupation:'Actor', catchPhrase: 'I got it Stuck!'},
    {name: 'Jenifer Aniston', occupation:'Actrees', catchPhrase: 'I feel sexy'}

];

mongoose.connect('mongodb://localhost/mongoose-movies'), {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

Celebrity.create(celebrities)
.then((feedback) => {
    console.log(feedback)
    mongoose.connection.close()
})
.catch(error => console.log('An error ocurred while creating celebrities', error ))

module.exports = Celebrity;


const testMovies = [
    {
        title: 'The fockers',
        genre: 'Comedy',
        plot:  'Greg Focker decide to introduce their parents'
    },
    {
        title: 'Home Alone',
        genre: 'Comedy',
        plot: 'Kevin Mc Allister accidentally left home alone by his familiy',
    },
    {
        title: 'Home Alone 2, Lost in New York',
        genre: 'Comedy',
        plot: 'Kevin Mc Allister lost in New York'
    }
];

Movie.create(testMovies)
.then((moviesFromDb) => {
    console.log(`movies created in db: ${moviesFromDb.length}`)
    mongoose.connection.close()
})
.catch(error => console.log(error))

