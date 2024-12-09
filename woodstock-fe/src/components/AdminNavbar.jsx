import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.jsx';
import Toggle from './Toggle.jsx';
import NavbarLogo from '../assets/NavbarLogo.jsx';

function AdminNavbar() {
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
    <nav className="bg-white2 dark:bg-darkwood px-6 py-4 transition-all ease-in-out duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/marketplace" className="flex items-center py-2 px-4 hover:scale-105 rounded-xl transition-all ease-in-out duration-500">
            <NavbarLogo/>
            <span className='ml-2 mt-2 font-title text-3xl text-lightGreen rounded-lg bg-black px-1 dark:px-0 dark:bg-darkwood dark:text-lightOrange ease-in-out transition-all duration-500'>WOOD</span><span className='mt-2 font-title text-3xl text-lightOrange dark:text-lightGreen ease-in-out transition-all duration-500'>STOCK</span>
          </Link>
          <Toggle/>
        </div>


        {/* User Info */}
        {userInfo && (
          <div className="flex items-center space-x-4">
            <Link to="/admin" className="hover:text-lightOrange dark:hover:text-lightGreen text-black dark:text-white hover:scale-110 transition-all duration-500 p-2 font-title text-xl">
                Admin Page
            </Link>
            <Link to="/admin/order" className="hover:text-lightOrange dark:hover:text-lightGreen text-black dark:text-white hover:scale-110 transition-all duration-500 p-2 font-title text-xl">
                Admin Orders Page
            </Link>
            <Link to='/profile' className="text-xl text-black font-title dark:text-white">{userInfo.username}</Link>
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

export default AdminNavbar;
