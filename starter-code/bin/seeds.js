
const Celebrity = require('../models/Celebrity.model');

const celebrities = [
    {name:'Adam Sandler', occupation:'Actor', catchPhrase: 'Oh really, fool?'},
    {name:'Ben Stiller ', occupation:'Actor', catchPhrase: 'I got it Stuck!'},
    {name: 'Jenifer Aniston', occupation:'Actrees', catchPhrase: 'I feel sexy'}

];

const mongoose = require('mongoose')
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