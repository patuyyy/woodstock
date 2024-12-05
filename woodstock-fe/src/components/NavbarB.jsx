import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.jsx';
import Toggle from './Toggle.jsx';
import NavbarLogo from '../assets/NavbarLogo.jsx';
import CartLogo from '../assets/CartLogo.jsx';

function NavbarB() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0); // State to store the cart count

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');

    if (userInfo === null) {
      // Redirect to login if userInfo is not in localStorage
      navigate('/login');
    }

    // Retrieve cart data from localStorage and calculate total items
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length); // Set the cart count
  }, [navigate]);

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <nav className="bg-white2 dark:bg-darkwood px-6 py-4 transition-all ease-in-out duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/marketplace" className="flex items-center py-2 px-4 hover:scale-105 rounded-xl transition-all ease-in-out duration-500">
            <NavbarLogo />
            <span className="ml-2 mt-2 font-title text-3xl text-lightGreen rounded-lg bg-black px-1 dark:px-0 dark:bg-darkwood dark:text-lightOrange ease-in-out transition-all duration-500">WOOD</span>
            <span className="mt-2 font-title text-3xl text-lightOrange dark:text-lightGreen ease-in-out transition-all duration-500">STOCK</span>
          </Link>
          <Toggle />
        </div>

        <div className="flex flex-grow justify-end mr-14">
          <Link to='/cart' className='flex'>
            <CartLogo />
            <span className="ml-2 text-xl font-title text-black dark:text-white">{cartCount > 0 ? `(${cartCount})` : ''}</span>
          </Link>
        </div>

        {/* User Info */}
        {userInfo && (
          <div className="flex items-center space-x-6">
            <Link to="/profile" className="text-2xl text-black dark:text-white font-semibold">
              {userInfo.username}
            </Link>
            <Link
              to="/profile"
              className="w-12 h-12 rounded-full bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${userInfo.photo})` }}
            ></Link>
          </div>
        )}

      </div>
    </nav>
  );
}

export default NavbarB;
