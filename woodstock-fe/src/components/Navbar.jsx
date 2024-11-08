import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jsx';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  // Set the initial theme based on the user's preference
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <nav className="bg-white dark:bg-black px-6 py-4 transition-all ease-in-out duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-wrap bg-darkwood dark:bg-black py-2 px-4 rounded-xl transition-all ease-in-out duration-500">
          <Logo />
        </div>

        <div className="flex items-center space-x-4">
          {/* Dark mode toggle button */}
          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-white focus:outline-none"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

          {/* Mobile menu toggle */}
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
          <Link to="/" className="hover:text-lightGreen dark:hover:text-lightBlue hover:scale-110 transition-all duration-500 p-2 font-title text-xl">
            Home
          </Link>
          <Link to="/about" className="hover:text-lightGreen dark:hover:text-lightBlue hover:scale-110 transition-all duration-500 p-2 font-title text-xl">
            About
          </Link>
          <Link to="/services" className="hover:text-lightGreen dark:hover:text-lightBlue hover:scale-110 transition-all duration-500 p-2 font-title text-xl">
            Services
          </Link>
          <Link to="/contact" className="hover:text-lightGreen dark:hover:text-lightBlue hover:scale-110 transition-all duration-500 p-2 font-title text-xl">
            Contact
          </Link>
          <Link to="/register" className="hover:text-darkwood dark:hover:text-lightBlue hover:scale-110 transition-all duration-500 bg-lightOrange dark:bg-darkOrange p-2 rounded-xl hover:bg-darkOrange dark:hover:bg-lightBlue font-title text-xl">
            Register
          </Link>
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
        </div>
      )}
    </nav>
  );
}

export default Navbar;
