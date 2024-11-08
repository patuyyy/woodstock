import React, { useState } from 'react';

function NavbarB() {
  const [searchQuery, setSearchQuery] = useState(""); // For controlling the search input value

  // Handle the search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="flex items-center justify-between bg-black px-8 py-4">
      <div className="flex items-center">
        {/* Logo and text from Navbar */}
        <svg width="300" height="60" viewBox="0 0 1152 219" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:scale-110 transition-all ease-in-out duration-500">
          <path d="M110.765 91.9259H80.7832L119.331 219H147.17L164.303 175.741L185.718 219H209.275L232.832 155.463L256.388 91.9259L269.237 56.7778L288.511 67.5926L275.662 0L226.407 29.7407L239.256 37.8519L243.539 40.5556L239.256 51.3704L224.265 91.9259L196.426 175.741L164.303 91.9259L136.463 175.741L110.765 91.9259Z" fill="url(#paint0_angular_152_85)"/>
        </svg>
        <span className="text-white text-2xl ml-2">WoodStock</span>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="px-4 py-2 rounded-md text-black focus:outline-none"
        />
        
        {/* User Profile Icon */}
        <div className="text-white">
          <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default NavbarB;
