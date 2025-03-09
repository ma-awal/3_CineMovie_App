import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/context';
import { getImgUrl } from '../utils';

function CartDetails({ onClose }) {
  const { cartData, setCartData } = useContext(MovieContext);
  function handleDelete(e, itemId) {
    e.stopPropagation();
    const filteredItem = cartData.filter((item) => item.id !== itemId);
    setCartData([...filteredItem]);
  }

  return (
    <div className="w-full  flex items-center bg-black  backdrop-blur-2xl fixed top-0 right-0 bottom-0 left-0 z-10">
      <div className="bg-slate-800  w-[300px] ml-auto p-8 h-full  items-center ">
        <div className="  ">
          {cartData.length === 0 ? (
            <p>"No Items in list"</p>
          ) : (
            cartData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex justify-between  mb-4 items-center border-b border-b-red-200   "
                >
                  <img
                    src={getImgUrl(item.cover)}
                    className="w-[60px] h-[60px] object-contain    "
                    alt=""
                  />
                  <p className="text-gray-300 text-base capitalize">
                    {item.title}
                  </p>

                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="text-sm   py-1 px-3 bg-red-600 text-white"
                  >
                    delete
                  </button>
                </div>
              );
            })
          )}
        </div>

        <div className="flex gap-2">
          <button className="text-sm   py-1 px-3 bg-red-400 text-gray-800">
            Checkout
          </button>
          <button
            onClick={onClose}
            className="text-sm   py-1 px-3 bg-red-500 text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartDetails;
