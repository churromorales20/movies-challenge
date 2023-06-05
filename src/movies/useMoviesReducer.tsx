import React, { useReducer, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { Movie, MoviesAction } from 'types';
import { getMovies } from 'api/movies';

interface MoviesState {
  movies: Movie[]
  initialized: boolean
}

export function useMoviesReducer(): [MoviesState, React.Dispatch<MoviesAction>] {
  // TODO: Implement all action processing

  const movieReducer = (state: MoviesState, action: MoviesAction): MoviesState => {
    switch (action.type) {
      case 'FETCH':
        return { ...state };

      case 'ADD':
        return { ...state };

      case 'DELETE':
        return { ...state };

      case 'RATE':
        return { ...state };

      default:
        return state
    }
  };

  const [state, dispatch] = useReducer(movieReducer, {
    movies: [],
    initialized: false,
  });

  useEffect(() => {
    // TODO: Call fetch action
  }, []);

  return [state, dispatch];
}
