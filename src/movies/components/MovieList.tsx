import React, { useState } from 'react';

import { MovieCard } from './MovieCard';
import { AddMovieButton } from './AddMovieButton';
import { AddMovieForm } from './AddMovieForm';
import { Card } from 'shared/components';

import { useMovies } from './MovieProvider';
import { Movie } from 'types';

type NewMovieMode = "BUTTON" | "FORM";

export const MovieList = () => {
  const { movies, moviesDispatch } = useMovies();
  const [displayOptionType, setDisplayOptionType] = useState<NewMovieMode>('BUTTON');

  const handleAddMovieClick = () => {
    setDisplayOptionType('FORM');
  };

  const handleAddMovieFormSubmit = (data: any) => {
    console.log(data);
    
    // Extract the necessary fields from data and create a new movie object
    const movieDetails: Omit<Movie, "id" | "ratings"> = {
      title: data.title,
      description: data.description,
      director: data.director.split(", "),
      starring: data.starring,
      duration: Number(data.duration),
      year: Number(data.year),
      imageUrl: data.imageUrl,
    };
    moviesDispatch({ type: 'ADD', payload: { movie: movieDetails } });
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
