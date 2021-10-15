import * as mongoose from 'mongoose';

const MoviesModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
  },
  category: {
    type: String,
  },
  sinopse: {
    type: String,
  },
  year: {
    type: Number,
  },
  review: {
    type: Number,
    max: 10,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default MoviesModel;
