import { StarRating, Button } from 'shared/components';

import { getAvgRating } from 'movies/ratings';
import { Movie } from 'types';
import { useMovies } from './MovieProvider';

interface MovieCardProps {
    movie: Movie,
}

export const MovieCard = ({ movie }: MovieCardProps) => {
    const { moviesDispatch } = useMovies();

    // TODO: implement required functionality

    return (
        <div data-testid={`movie-item-${movie.id}`}>
            {/* TODO: Display image */}
            <img className="card-img-top" alt="" />
            <div className="card-body">
                <h4 className="card-title">
                    {/* TODO: Display title */}
                </h4>
                <h6 className="card-year mb-2 text-muted">
                    {/* TODO: Display year */}
                </h6>
                <p className="text-justify" style={{ fontSize: '14px' }}>
                    {/* TODO: Display description */}
                </p>
                <h6 className="card-duration mb-2">
                    {/* TODO: Display duration */}
                </h6>
                <h6 className={`card-director mb-2 ${movie.id}`}>
                    {/* TODO: Display directors */}
                </h6>
                <h6 className="card-starring mb-2">
                    {/* TODO: Display starring actors */}
                </h6>
                {/* TODO: Implement delete functionality */}
                <Button>Delete</Button>
            </div>
            <div className="card-footer">
                <div className="clearfix">
                <div className="float-left mt-1">
                    {/* TODO: Display stars */}
                </div>
                <div data-testid="movie-rating" className="card-footer-badge float-right badge badge-primary badge-pill">
                    {/* TODO: Display rating value */}
                </div>
                </div>
            </div>
        </div>    
    )
};