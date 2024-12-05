import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarB from "../components/NavbarB";
import AdminNavbar from "../components/AdminNavbar";

const ProfilePage = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  const [showConfirmModal, setShowConfirmModal] = useState(false); // State to toggle modal

  const handleSignOut = () => {
    // Remove user info and cart from localStorage
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cart");

    // Redirect to login page
    navigate("/login");
  };

  const handleConfirmSignOut = () => {
    handleSignOut();
    setShowConfirmModal(false); // Close modal after sign out
  };

  const handleCancelSignOut = () => {
    setShowConfirmModal(false); // Close modal without sign out
  };

  return (
    <div>
      {userInfo.isadmin ? <AdminNavbar /> : <NavbarB />}
      <div className="min-h-screen bg-white dark:bg-black text-white flex flex-col ease-in-out transition-all duration-500">
        {/* Main Content */}
        <div className="w-full mx-auto p-8 flex flex-col flex-grow">
          {/* Top Section */}
          <div className="flex items-center justify-between mb-6">
            {/* Greeting Section */}
            <div>
              <h1 className="text-4xl text-black dark:text-white font-title md:text-6xl ease-in-out transition-all duration-500">
                Hello, {userInfo.username}
              </h1>
            </div>

            {/* Profile Picture */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 md:w-32 md:h-32 bg-lightOrange rounded-full flex items-center justify-center">
                {/* Placeholder Avatar */}
                <span
                  className="w-28 h-28 rounded-full bg-cover bg-center cursor-pointer"
                  style={{ backgroundImage: `url(${userInfo.photo})` }}
                ></span>
              </div>
              <p className="mt-4 text-black dark:text-white text-lg md:text-xl font-bold ease-in-out transition-all duration-500">
                {userInfo.username}
              </p>
            </div>
          </div>

          {/* Profile Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start mt-6 mb-8">
            {/* Title */}
            <div className="col-span-1 sm:col-span-2 md:col-span-4">
              <h2 className="text-3xl text-black dark:text-white sm:text-4xl font-title md:text-5xl ease-in-out transition-all duration-500">
                My Profile
              </h2>
            </div>

            {/* Name Field */}
            <div className="sm:col-span-1 md:col-span-2">
              <label className="block text-xl text-black dark:text-white sm:text-2xl font-title md:text-3xl mb-4 ease-in-out transition-all duration-500">
                Name
              </label>
              <div className="bg-gray-800 dark:bg-black4 p-6 rounded-md text-xl sm:text-2xl md:text-2xl ease-in-out transition-all duration-500">
                {userInfo.name}
              </div>
            </div>

            {/* Phone Field */}
            <div className="sm:col-span-1 md:col-span-2">
              <label className="block text-xl text-black dark:text-white sm:text-2xl font-title md:text-3xl mb-4 ease-in-out transition-all duration-500">
                Phone
              </label>
              <div className="bg-gray-800 dark:bg-black4 p-6 rounded-md text-gray-300 text-xl sm:text-2xl md:text-2xl ease-in-out transition-all duration-500">
                {userInfo.phone}
              </div>
            </div>

            {/* Email Field */}
            <div className="sm:col-span-1 md:col-span-2">
              <label className="block text-xl text-black dark:text-white sm:text-2xl font-title md:text-3xl mb-4 ease-in-out transition-all duration-500">
                Email
              </label>
              <div className="bg-gray-800 dark:bg-black4 p-6 rounded-md text-gray-300 text-xl sm:text-2xl md:text-2xl ease-in-out transition-all duration-500">
                {userInfo.email}
              </div>
            </div>

            {/* Username Field */}
            <div className="sm:col-span-1 md:col-span-2">
              <label className="block text-xl text-black dark:text-white sm:text-2xl font-title md:text-3xl mb-4 ease-in-out transition-all duration-500">
                Username
              </label>
              <div className="bg-gray-800 dark:bg-black4 p-6 rounded-md text-gray-300 text-xl sm:text-2xl md:text-2xl ease-in-out transition-all duration-500">
                {userInfo.username}
              </div>
            </div>

            <div className="sm:col-span-1 md:col-span-2">
              <label className="block text-xl text-black dark:text-white sm:text-2xl font-title md:text-3xl mb-4 ease-in-out transition-all duration-500">
                Country
              </label>
              <div className="bg-gray-800 dark:bg-black4 p-6 rounded-md text-gray-300 text-xl sm:text-2xl md:text-2xl ease-in-out transition-all duration-500">
                {userInfo.country}
              </div>
            </div>
          </div>

          {/* Sign Out Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowConfirmModal(true)} // Show confirmation modal
              className="bg-red-600 text-white py-2 px-6 rounded-lg text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-red-500"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full bg-black2 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {/* Ongoing Order */}
            <div className="flex flex-col items-center">
              <span className="text-orange-500 text-4xl sm:text-5xl md:text-6xl">🔄</span>
              <p className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold">Ongoing Order</p>
            </div>

            {/* Shopping Cart */}
            <div className="flex flex-col items-center">
              <span className="text-orange-500 text-4xl sm:text-5xl md:text-6xl">🛒</span>
              <p className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold">Shopping Cart</p>
            </div>

            {/* Portfolio */}
            <div className="flex flex-col items-center">
              <span className="text-orange-500 text-4xl sm:text-5xl md:text-6xl">📄</span>
              <p className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold">Portfolio</p>
            </div>

            {/* Order History */}
            <div className="flex flex-col items-center">
              <span className="text-orange-500 text-4xl sm:text-5xl md:text-6xl">⏳</span>
              <p className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold">Order History</p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-black p-6 rounded-lg w-1/3">
            <h2 className="text-2xl text-black dark:text-white mb-4">Are you sure?</h2>
            <p className="text-lg text-black dark:text-white mb-4">
              Signing out will delete your cart!.
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleConfirmSignOut}
                className="bg-red-600 text-white py-2 px-6 rounded-lg text-lg"
              >
                Yes, Sign Out
              </button>
              <button
                onClick={handleCancelSignOut}
                className="bg-gray-500 text-white py-2 px-6 rounded-lg text-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
