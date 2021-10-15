import moviesRepository from '../repositories/MoviesRepository';
import AppError from '../errors/AppError';

interface IMovieModel {
  title: string;
  director: string;
  category: string;
  sinopse: string;
  year: number;
  review?: number;
}

interface IRequest {
  id: string;
}

class ListMovieService {
  public async listAll(): Promise<IMovieModel[]> {
    const movies = await moviesRepository.find();
    return movies;
  }

  public async findById({ id }: IRequest): Promise<IMovieModel | undefined> {
    const movie = await moviesRepository.findById(id);

    if (!movie) {
      throw new AppError('Movie not found.');
    }

    return movie;
  }

  public async findTop(): Promise<IMovieModel[]> {
    const movie = await moviesRepository.find().limit(10).sort({ review: -1 });

    return movie;
  }
}

export default ListMovieService;
