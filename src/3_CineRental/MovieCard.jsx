import React, { useContext, useState } from 'react';
import { getImgUrl } from '../utils';
import MovieDetails from './MovieDetails';
import { MovieContext } from '../context/context';
function MovieCard({ movie }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { cartData, setCartData } = useContext(MovieContext);
  function handleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }
  function handleAddToCart(e, movie) {
    e.stopPropagation();
    const found = cartData.find((item) => item.id === movie.id);
    console.log(movie);
    if (!found) {
      setCartData([...cartData, movie]);
      setShowModal(false);
    } else {
      console.log(`The movie ${movie.title}hasbeen added already`);
    }
  }
  function handleMovieClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }
  return (
    <div className="bg-slate-700 p-4 rounded space-y-2 border-orange-800 border-2">
      {showModal && (
        <MovieDetails
          movie={selectedMovie}
          onAddToCart={handleAddToCart}
          onCloseMovie={handleMovieClose}
        />
      )}
      <div onClick={() => handleMovieSelection(movie)}>
        <img
          className="object-cover "
          src={getImgUrl(movie.cover)}
          alt="Movie"
        />
        <h4 className="text-gray-200 capitalize text-lg font-medium">
          {movie.title}
        </h4>
        <p className="text-base capitalize font-medium text-orange-300">
          {movie.genre}
        </p>
        <button
          onClick={(e) => handleAddToCart(e, movie)}
          className="bg-orange-300 rounded-full py-2 px-3 text-black font-medium text-base"
        >
          $ {movie.price} Add To card
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
