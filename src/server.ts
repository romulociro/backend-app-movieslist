import express from 'express';
import 'express-async-errors';
import routes from './routes';
import Db from './database';
import ensureErrors from './middlewares/ensureErrors';

const app = express();

const teste = new Db();

teste.createConnection();

app.use(express.json());
app.use(routes);

app.use(ensureErrors);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
