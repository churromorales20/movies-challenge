import React, { useState } from 'react';

import { MovieCard } from './MovieCard';
import { AddMovieButton } from './AddMovieButton';
import { AddMovieForm } from './AddMovieForm';
import { Card } from 'shared/components';

import { useMovies } from './MovieProvider';

type NewMovieMode = "BUTTON" | "FORM";

export const MovieList = () => {
  const { movies, moviesDispatch } = useMovies();
  const [displayOptionType, setDisplayOptionType] = useState<NewMovieMode>('BUTTON');

  const handleAddMovieClick = () => {
    setDisplayOptionType('FORM');
  };

  const handleAddMovieFormSubmit = (movieDetails: any) => {
    moviesDispatch({ type: 'ADD', payload: movieDetails });
    setDisplayOptionType('BUTTON');
  };

  const handleAddMovieFormCancel = () => {
    setDisplayOptionType('BUTTON');
  };

  return (
    <div className="card-deck">
      {movies.map(movie => (
        <Card key={movie.id}>
          <MovieCard key={movie.id} movie={movie} />
        </Card>      
      ))}
      <Card>
        {displayOptionType === 'BUTTON' ? (
          <AddMovieButton onClick={handleAddMovieClick} />
        ) : (
          <AddMovieForm onSubmit={handleAddMovieFormSubmit} onCancel={handleAddMovieFormCancel} />
        )}
      </Card>
    </div>
  );
}
