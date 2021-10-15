import { Router } from 'express';
import MoviesController from '../controllers/MoviesController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const moviesRouter = Router();

moviesRouter.use(ensureAuthenticated);

const moviesController = new MoviesController();

moviesRouter.get('/', moviesController.show);
moviesRouter.get('/top10', moviesController.findTopList);
moviesRouter.get('/:id', moviesController.findById);
moviesRouter.post('/', moviesController.create);

export default moviesRouter;
