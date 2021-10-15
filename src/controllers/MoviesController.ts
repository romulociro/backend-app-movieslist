import { Request, Response } from 'express';
import CreateMovieService from '../services/CreateMovieServices';
import ListMovieService from '../services/ListMovieService';

export default class MoviesController {
  public async show(request: Request, response: Response) {
    const listMovies = new ListMovieService();

    const movies = await listMovies.listAll();

    return response.json(movies);
  }

  public async findById(request: Request, response: Response) {
    const movies = new ListMovieService();
    const { id } = request.params;

    const movie = await movies.findById({ id });

    return response.json(movie);
  }

  public async findTopList(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const movies = new ListMovieService();

    const movie = await movies.findTop();

    return response.json(movie);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createMovie = new CreateMovieService();
    const { title, director, category, year, review, sinopse } = request.body;

    const movie = await createMovie.execute({
      title,
      director,
      category,
      sinopse,
      year,
      review,
    });

    return response.json(movie);
  }
}
