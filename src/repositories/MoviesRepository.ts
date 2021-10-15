import * as mongoose from 'mongoose';

import MoviesModel from '../models/MoviesModel';

export default mongoose.model('moviesRepository', MoviesModel);
