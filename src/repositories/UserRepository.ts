import * as mongoose from 'mongoose';

import UserModel from '../models/UserModel';

export default mongoose.model('usersRepository', UserModel);
