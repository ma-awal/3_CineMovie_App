import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/context';
import CartDetails from './CartDetails';

function Header() {
  const { cartData } = useContext(MovieContext);
  const [showCart, setShowCart] = useState(false);

  function handleCartClick() {
    setShowCart(true);
  }
  function handleCartClose() {
    setShowCart(false);
  }
  return (
    <>
      {showCart && <CartDetails onClose={handleCartClose} />}
      <header className="bg-slate-800  py-4 shadow ">
        <div className="container mx-auto  flex items-center justify-between">
          <a className="text-3xl font-bold  text-red-400 capitalize">
            MovieApp
          </a>
          <div className="flex gap-4 items-center justify-end text-white  ">
            <a href="#" className="text-red-400 font-base capitalize">
              Day
            </a>
            <a
              onClick={handleCartClick}
              className="text-red-400 font-base capitalize relative "
            >
              cart
              {cartData.length > 0 && (
                <span className="absolute flex items-center justify-center  top-[-12px] left-[24px] bg-red-500 text-white font-base w-[30px] h-[30px] rounded-full">
                  {cartData.length}
                </span>
              )}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
