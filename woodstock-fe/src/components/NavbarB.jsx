import React, { useEffect, useState } from 'react';
import Logo from '../assets/Logo.jsx';
import Toggle from './Toggle.jsx';

function NavbarB() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set the initial theme based on the user's preference
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <nav className="bg-white1 dark:bg-darkwood px-6 py-4 transition-all ease-in-out duration-500">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-darkwood py-2 px-4 hover:scale-105 rounded-xl transition-all ease-in-out duration-500">
            <Logo />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-grow justify-center">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full max-w-md px-4 py-2 rounded-md bg-lightWhite dark:bg-gray-800 text-darkwood dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lightGreen transition-all duration-300"
          />
        </div>

        {/* Toggle and User Profile */}
        <div className="flex items-center space-x-4">
          <Toggle />
          <div className="w-8 h-8 rounded-full bg-gray-400 dark:bg-gray-600 cursor-pointer"></div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarB;
