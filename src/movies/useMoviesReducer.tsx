import React, { useReducer, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { Movie, MoviesAction } from 'types';
import { getMovies } from 'api/movies';

interface MoviesState {
  movies: Movie[];
  initialized: boolean;
}

export function useMoviesReducer(): [MoviesState, React.Dispatch<MoviesAction>] {
  const movieReducer = (state: MoviesState, action: MoviesAction): MoviesState => {
    switch (action.type) {
      case 'FETCH':
        return { ...state, movies: action.payload.data, initialized: true };

      case 'ADD':
        const { movie } = action.payload;
        const newMovie: Movie = {
          id: uuid(),
          ...movie,
          ratings: [],
        };
        return { ...state, movies: [...state.movies, newMovie] };


      case 'DELETE':
        const updatedMovies = state.movies.filter(movie => movie.id !== action.payload.movieId);
        return { ...state, movies: updatedMovies };

      case 'RATE':
        const { movieId, rating } = action.payload;
        const updatedMoviesWithRating = state.movies.map(movie => {
          if (movie.id === movieId) {
            const updatedRatings = [...movie.ratings, rating];
            const avgRating = calculateAverageRating(updatedRatings);
            return { ...movie, ratings: updatedRatings, avgRating };
          }
          return movie;
        });
        return { ...state, movies: updatedMoviesWithRating };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(movieReducer, {
    movies: [],
    initialized: false,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovies();
        dispatch({ type: 'FETCH', payload: { data: movies } }); // Wrap movies in an object
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return [state, dispatch];
}

function calculateAverageRating(ratings: number[]): number {
  if (ratings.length === 0) {
    return 0;
  }
  const sum = ratings.reduce((total, rating) => total + rating, 0);
  return sum / ratings.length;
}
