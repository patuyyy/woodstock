import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.jsx';
import Toggle from './Toggle.jsx';
import NavbarLogo from '../assets/NavbarLogo.jsx';
import CartLogo from '../assets/CartLogo.jsx';

function NavbarB() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0); // State to store the cart count
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <nav
      className={`${isSticky ? 'bg-opacity-80 backdrop-blur-md shadow-lg' : 'bg-opacity-100'
        } bg-white2 dark:bg-darkwood px-4 sm:px-6 py-3 sm:py-4 fixed top-0 w-full transition-all ease-in-out duration-500 z-50`}
    >
      <div className="flex flex-wrap items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link
            to="/marketplace"
            className="flex items-center py-2 px-3 hover:scale-105 rounded-xl transition-all ease-in-out duration-500"
          >
            <NavbarLogo />
            <span className="ml-1 sm:ml-2 mt-1 sm:mt-2 font-title text-2xl sm:text-3xl text-lightGreen rounded-lg bg-black px-1 dark:px-0 dark:bg-darkwood dark:text-lightOrange ease-in-out transition-all duration-500">
              WOOD
            </span>
            <span className="mt-1 sm:mt-2 font-title text-2xl sm:text-3xl text-lightOrange dark:text-lightGreen ease-in-out transition-all duration-500">
              STOCK
            </span>
          </Link>
          <Toggle className="hidden sm:block" />
        </div>

        {/* Hamburger Menu */}
        <button
          className="sm:hidden flex items-center px-3 py-2 border rounded text-black dark:text-white border-black dark:border-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Cart Section */}
        <div className="hidden sm:flex sm:flex-grow-0 justify-end sm:justify-end mr-0 sm:mr-14 mt-2 sm:mt-0">
          <Link to="/cart" className="flex">
            <CartLogo />
            <span className="ml-1 sm:ml-2 text-lg sm:text-xl font-title text-black dark:text-white">
              {cartCount > 0 ? `(${cartCount})` : ''}
            </span>
          </Link>
        </div>


        {/* User Info */}
        {userInfo && (
          <div className="hidden sm:flex items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0">
            <Link
              to="/profile"
              className="text-lg sm:text-2xl text-black dark:text-white font-semibold"
            >
              {userInfo.username}
            </Link>
            <Link
              to="/profile"
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${userInfo.photo})` }}
            ></Link>
          </div>
        )}
      </div>

      {/* Collapsible Menu */}
      {isMenuOpen && (
        <div className="sm:hidden mt-4 space-y-2">
          <Link
            to="/marketplace"
            className="block text-lg font-semibold text-black dark:text-white hover:underline"
          >
            Marketplace
          </Link>
          <Link
            to="/cart"
            className="block text-lg font-semibold text-black dark:text-white hover:underline"
          >
            Cart {cartCount > 0 && `(${cartCount})`}
          </Link>
          {userInfo && (
            <Link
              to="/profile"
              className="block text-lg font-semibold text-black dark:text-white hover:underline"
            >
              {userInfo.username}
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default NavbarB;
