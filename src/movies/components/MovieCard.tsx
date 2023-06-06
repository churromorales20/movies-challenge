import { StarRating, Button } from 'shared/components';

import { getAvgRating } from 'movies/ratings';
import { Movie } from 'types';
import { useMovies } from './MovieProvider';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { moviesDispatch } = useMovies();

  const handleDelete = () => {
    moviesDispatch({ type: 'DELETE', payload: { movieId: movie.id } });
  };

  return (
    <div data-testid={`movie-item-${movie.id}`}>
      <img className="card-img-top" src={movie.imageUrl} alt={movie.title} />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
        <h6 className="card-year mb-2 text-muted">{movie.year}</h6>
        <p className="text-justify" style={{ fontSize: '14px' }}>
          {movie.description}
        </p>
        <h6 className="card-duration mb-2">{movie.duration} min</h6>
        <h6 className={`card-director mb-2 ${movie.id}`}>
          {movie.director.join(', ')}
        </h6>
        <h6 className="card-starring mb-2">{movie.starring.join(', ')}</h6>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
      <div className="card-footer">
        <div className="clearfix">
          <div className="float-left mt-1">
            <StarRating
              rating={getAvgRating(movie)}
              onRate={(rating) => {
                // TODO: Implement rating functionality
                moviesDispatch({ type: 'RATE', payload: { movieId: movie.id, rating } });
              }}
            />
          </div>
          <div
            data-testid="movie-rating"
            className="card-footer-badge float-right badge badge-primary badge-pill"
          >
            {getAvgRating(movie)}
          </div>
        </div>
      </div>
    </div>
  );
};
