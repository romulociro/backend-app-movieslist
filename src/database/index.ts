import mongoose from 'mongoose';

class Db {
  private DB_URL =
    'mongodb://adminrc:dnrtuff123@localhost:27017/movieslist?authSource=admin';

  createConnection() {
    mongoose.connect(this.DB_URL);
  }
}

export default Db;
