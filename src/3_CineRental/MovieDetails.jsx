import React from 'react';
import { getImgUrl } from '../utils';

function MovieDetails({ movie, onAddToCart, onCloseMovie }) {
  return (
    <div className="w-full  flex items-center bg-gray-800 backdrop-blur-3xl fixed top-0 right-0 bottom-0 left-0">
      <div className="bg-slate-400  w-2/5 mx-auto p-8 grid grid-cols-3 items-center ">
        <div className="col-span-2 space-y-2">
          <h6 className="text-black text-lg capitalize">{movie.title}</h6>
          <p className="text-sm text-black capitalize">{movie.description}</p>
          <div className="flex gap-2">
            <button
              onClick={(e) => onAddToCart(e, movie)}
              className="text-sm rounded-full py-1 px-3 bg-orange-600 text-white"
            >
              $ {movie.price} Add To Cart
            </button>
            <button
              onClick={onCloseMovie}
              className="text-sm rounded-full py-1 px-3 bg-red-600 text-white"
            >
              cancel
            </button>
          </div>
        </div>
        <div className="    ">
          <img
            className="object-cover border-orange-400 border-2"
            src={getImgUrl(movie.cover)}
            alt="Movie"
          />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
