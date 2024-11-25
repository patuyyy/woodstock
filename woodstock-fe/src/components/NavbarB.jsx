import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.jsx';
import Toggle from './Toggle.jsx';

function NavbarB() {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');

    if (userInfo === null) {
      // Redirect to login if userInfo is not in localStorage
      navigate('/login');
    }
  }, [navigate]);

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <nav className="bg-white1 dark:bg-darkwood px-6 py-4 transition-all ease-in-out duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to='/marketplace' className="flex items-center bg-darkwood py-2 px-4 hover:scale-105 rounded-xl transition-all ease-in-out duration-500">
            <Logo />
          </Link>
          <Toggle />
        </div>

        {/* Search Bar */}
        <div className="flex flex-grow justify-center">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full max-w-md px-4 py-2 rounded-md bg-lightWhite dark:bg-gray-800 text-darkwood dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lightGreen transition-all duration-300"
          />
        </div>

        {/* User Info */}
        {userInfo && (
          <div className="flex items-center space-x-4">
            <Link to='/profile' className="text-xl text-black dark:text-white">{userInfo.username}</Link>
            <Link
              to='/profile'
              className="w-8 h-8 rounded-full bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(${userInfo.photo})` }}
            ></Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavbarB;
