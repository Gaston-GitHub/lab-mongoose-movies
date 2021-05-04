const mongoose = require('mongoose');
const {Schema} = mongoose;

const movieSchema = new Schema(
  {
    title: {type: String, unique:true},
    genre: {type: String},
    plot: {type:String}
  }
)


const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;

