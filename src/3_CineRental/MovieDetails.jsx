import React from 'react';
import { getImgUrl } from '../utils';

function MovieDetails({ movie, onAddToCart, onCloseMovie }) {
  return (
    <div className="w-full  flex items-center bg-gray-950 backdrop-blur-3xl fixed top-0 right-0 bottom-0 left-0">
      <div className="bg-gray-900  w-3/5 mx-auto p-8 grid grid-cols-3 items-center ">
        <div className="col-span-2  ">
          <h6 className="text-gray-50 text-lg capitalize">{movie.title}</h6>
          <p className="text-sm text-white capitalize mb-4">
            {movie.description}
          </p>
          <div className="flex gap-2">
            <button
              onClick={(e) => onAddToCart(e, movie)}
              className="text-sm rounded-full py-1 px-3 bg-red-300 text-slate-800"
            >
              ${movie.price} Add To Cart
            </button>
            <button
              onClick={onCloseMovie}
              className="text-sm rounded-full py-1 px-3 bg-red-500 text-white"
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="    ">
          <img
            className="object-cover border-red-400 border-1"
            src={getImgUrl(movie.cover)}
            alt="Movie"
          />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
