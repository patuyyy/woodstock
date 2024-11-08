import React from 'react';
//import NavbarB from '../components/NavbarB'; // Import Navbar2

// Marketplace Component
const Marketplace = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar2 */}

      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-lightGreen w-1/5 p-4">
          <h2 className="font-bold text-lightBrown">Categories</h2>
          {/* Add category links or list items here */}
        </aside>

        {/* Product content */}
        <main className="flex-grow bg-beigeGreen p-6">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to <span className="text-pastelYellow">Wood</span><span className="text-darkWood">Stock</span>
          </h2>
          <p className="text-lg mb-6">How can we help you today?</p>

          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Product Growth</h3>
            <h3 className="font-semibold">Product Cart</h3>
          </div>

          {/* Dynamic Product Grid (Empty for now) */}
          <div className="grid grid-cols-3 gap-4">
            {/* No products, but the grid layout remains */}
            <div className="bg-green-200 h-32 rounded-lg flex flex-col items-center p-2">
              <div className="w-full h-16 object-cover rounded-md mb-2 bg-gray-300"></div>
              <h4 className="font-bold text-center">No Products Available</h4>
              <p className="text-sm text-center">Please check back later.</p>
            </div>
            {/* Repeat similar blocks as placeholders */}
            <div className="bg-green-200 h-32 rounded-lg flex flex-col items-center p-2">
              <div className="w-full h-16 object-cover rounded-md mb-2 bg-gray-300"></div>
              <h4 className="font-bold text-center">No Products Available</h4>
              <p className="text-sm text-center">Please check back later.</p>
            </div>
            <div className="bg-green-200 h-32 rounded-lg flex flex-col items-center p-2">
              <div className="w-full h-16 object-cover rounded-md mb-2 bg-gray-300"></div>
              <h4 className="font-bold text-center">No Products Available</h4>
              <p className="text-sm text-center">Please check back later.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Marketplace;
