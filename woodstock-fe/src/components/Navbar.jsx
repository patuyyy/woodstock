import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jsx';
import Toggle from './Toggle.jsx';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <nav className="bg-white1 dark:bg-darkwood px-6 py-4 transition-all ease-in-out duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center bg-darkwood py-2 px-4 hover:scale-105 rounded-xl transition-all ease-in-out duration-500">
            <Logo />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white dark:text-gray-300 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-8 text-black dark:text-gray-300">
          <Link to="/" className="hover:text-lightOrange dark:hover:text-lightGreen hover:scale-110 transition-all duration-500 p-2 font-title text-xl">
            Home
          </Link>
          <Link to="/about" className="hover:text-lightOrange dark:hover:text-lightGreen hover:scale-110 transition-all duration-500 p-2 font-title text-xl">
            About
          </Link>
          <Link to="/services" className="hover:text-lightOrange dark:hover:text-lightGreen hover:scale-110 transition-all duration-500 p-2 font-title text-xl">
            Services
          </Link>
          <Link to="/contact" className="hover:text-lightOrange dark:hover:text-lightGreen hover:scale-110 transition-all duration-500 p-2 font-title text-xl">
            Contact
          </Link>
          <Link to="/register" className="dark:hover:text-darkwood hover:text-lightGreen hover:scale-110 transition-all duration-500 bg-lightOrange dark:bg-darkOrange p-2 rounded-xl hover:bg-darkOrange dark:hover:bg-lightBlue font-title text-xl">
            Register
          </Link>
          <p className='py-2 font-title text-xl'>
            or
          </p>
          <Link to="/login" className="dark:hover:text-darkwood hover:text-lightGreen hover:scale-110 transition-all duration-500 bg-lightOrange dark:bg-darkOrange p-2 px-4 rounded-xl hover:bg-darkOrange dark:hover:bg-lightBlue font-title text-xl">
            Login
          </Link>
          <Toggle />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 space-y-4 text-white dark:text-gray-300">
          <Link to="/" className="block hover:text-gray-400 dark:hover:text-gray-500 transition-colors duration-200">
            Home
          </Link>
          <Link to="/about" className="block hover:text-gray-400 dark:hover:text-gray-500 transition-colors duration-200">
            About
          </Link>
          <Link to="/services" className="block hover:text-gray-400 dark:hover:text-gray-500 transition-colors duration-200">
            Services
          </Link>
          <Link to="/contact" className="block hover:text-gray-400 dark:hover:text-gray-500 transition-colors duration-200">
            Contact
          </Link>
          <Toggle className="justify-start mr-4"/>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
