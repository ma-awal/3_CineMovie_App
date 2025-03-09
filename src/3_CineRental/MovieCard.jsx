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
    <div className="bg-slate-800 p-4 rounded   ">
      {showModal && (
        <MovieDetails
          movie={selectedMovie}
          onAddToCart={handleAddToCart}
          onCloseMovie={handleMovieClose}
        />
      )}
      <div onClick={() => handleMovieSelection(movie)}>
        <img
          className="object-cover border-red-300 border-1 mb-2 "
          src={getImgUrl(movie.cover)}
          alt="Movie"
        />
        <div className="">
          <p className="text-gray-300 capitalize text-base  ">{movie.title}</p>
          <p className="text-base capitalize font-medium text-red-300 mb-2 ">
            {movie.genre}
          </p>
          <button
            onClick={(e) => handleAddToCart(e, movie)}
            className="bg-red-300  rounded-full py-2 px-2 text-gray-900 font-medium text-sm"
          >
            ${movie.price} Add To card
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
