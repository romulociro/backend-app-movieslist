import moviesRepository from '../repositories/MoviesRepository';
import AppError from '../errors/AppError';

interface IMovieModel {
  title: string;
  director: string;
  category: string;
  sinopse: string;
  year?: number;
  review?: number;
}

class CreateMovieService {
  public async execute({
    title,
    director,
    category,
    sinopse,
    year,
    review,
  }: IMovieModel) {
    const checkMovieExists = await moviesRepository.findOne({
      title,
    });

    if (checkMovieExists) {
      throw new AppError('movie already exists');
    }

    const newMovie = moviesRepository.create({
      title,
      director,
      category,
      sinopse,
      year,
      review,
    });

    return newMovie;
  }
}

export default CreateMovieService;
