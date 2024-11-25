import React from 'react';
import NavbarB from '../components/NavbarB';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <NavbarB/>
      {/* Profile Section */}
      <section className="bg-gray-200 dark:bg-gray-800 text-center py-8">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>
        <div className="flex flex-col items-center">
          <div className="bg-black dark:bg-gray-300 rounded-full w-24 h-24"></div>
          <p className="text-lg font-bold mt-4">USERNAME</p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="bg-gray-300 dark:bg-gray-700 flex justify-evenly py-4">
        {['Ongoing Order', 'Cart', 'Portfolio', 'Order History', 'Setting'].map((tab) => (
          <button key={tab} className="font-semibold text-base">
            {tab.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Recommendations */}
      <section className="bg-gray-400 dark:bg-gray-900 py-8 px-4">
        <h3 className="text-center font-semibold mb-4">YOU MAY LIKE THIS</h3>
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-leafGreen dark:bg-gray-600 w-24 h-24 flex items-center justify-center"
            >
              <div className="bg-black dark:bg-gray-300 w-16 h-16"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;