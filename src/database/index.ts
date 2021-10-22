import mongoose from 'mongoose';

class Db {
  private DB_URL =
    'mongodb://admin:movielist123@localhost:27017/movieslistdb?authSource=admin';

  createConnection() {
    mongoose.connect(this.DB_URL);
  }
}

export default Db;
