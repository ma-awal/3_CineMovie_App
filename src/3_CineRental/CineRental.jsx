import React from 'react';
import { getMovies } from '../data';
import MovieCard from './MovieCard';

function CineRental() {
  const movies = getMovies();
  return (
    <div className="grid grid-cols-3 gap-4   ">
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
}

export default CineRental;
