import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/context';

function CartDetails({ onClose }) {
  const { cartData, setCartData } = useContext(MovieContext);
  function handleDelete(e, itemId) {
    e.stopPropagation();
    const filteredItem = cartData.filter((item) => item.id !== itemId);
    setCartData([...filteredItem]);
  }

  return (
    <div className="w-full  flex items-center bg-gray-800 backdrop-blur-3xl fixed top-0 right-0 bottom-0 left-0">
      <div className="bg-slate-400  w-3/5 mx-auto p-8   items-center ">
        <div className="  ">
          {cartData.length === 0 ? (
            <p>"No Items in list"</p>
          ) : (
            cartData.map((item) => {
              return (
                <div key={item.id} className="flex justify-between mb-4   ">
                  <div>
                    <h6 className="text-black text-base capitalize">
                      {item.title}
                    </h6>
                    <p className="text-sm text-black capitalize">
                      {item.description}
                    </p>
                  </div>

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
          <button className="text-sm rounded-full py-1 px-3 bg-orange-600 text-white">
            checkout
          </button>
          <button
            onClick={onClose}
            className="text-sm rounded-full py-1 px-3 bg-red-600 text-white"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartDetails;
