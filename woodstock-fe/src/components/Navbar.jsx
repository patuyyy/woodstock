import React from 'react';
import logo from '../assets/Logo.png'; // Adjust the path based on your file structure

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-black px-8 py-4">
      <div className="flex items-center">
        <img src={logo} alt="Woodstock Logo" className="h-12 w-auto" />
      </div>

      <div className="flex items-center ml-auto space-x-8 transition-all ease-in-out duration-100">
        <ul className="flex space-x-8 text-white font-semibold">
          <li className="transition-all ease-in-out duration-500 px-4 py-2 hover:text-lightGreen hover:scale-110 cursor-pointer">HOME</li>
          <li className="transition-all ease-in-out duration-500 px-4 py-2 hover:text-lightGreen hover:scale-110 cursor-pointer">ABOUT</li>
          <li className="transition-all ease-in-out duration-500 px-4 py-2 hover:text-lightGreen hover:scale-110 cursor-pointer">MARKET</li>
          <li className="transition-all ease-in-out duration-500 px-4 py-2 hover:text-lightGreen hover:scale-110 cursor-pointer">CONTACT</li>
          <li className="bg-lightOrange text-white text-bold px-4 py-2 rounded-full hover:bg-darkOrange transition-all ease-in-out duration-500 hover:scale-110"> REGISTER</li>
        </ul>

        
      </div>
    </nav>
  );
}

export default Navbar;
