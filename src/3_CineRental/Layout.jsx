import React, { useState } from 'react';

import CineRental from './CineRental';
import { MovieContext } from '../context/context';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  const [cartData, setCartData] = useState([]);
  return (
    <MovieContext.Provider value={{ cartData, setCartData }}>
      <Header />
      <main className="main bg-gray-900 py-4 ">
        <div className="container mx-auto ">
          <CineRental />
        </div>
      </main>
      <Footer />
    </MovieContext.Provider>
  );
}

export default Layout;
