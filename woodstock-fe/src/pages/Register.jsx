import React from 'react';
import Navbar from '../components/Navbar';
import WoodStockLogo from '../assets/WoodStockLogo';

const Register = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen bg-darkGreen flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-1/2 p-6 sm:p-12">
          <div className="flex flex-col items-start">
            <div className="text-left">
            <h1
    className="text-4xl xl:text-7xl font-bold font-title text-lightGreen"
    style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 1)' }} // Darker shadow
  >
    Register
  </h1>

              <p className="text-2xl xl:text-2xl font-title text-lightGreen"
                  style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 1)' }}>
                Register your account!
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="max-w-xs lg:max-w-lg flex flex-col gap-4">
                <input
                  className="w-full font-title px-5 py-4 lg:py-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your name"
                />
                <input
                  className="w-full font-title px-5 py-4 lg:py-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
                />
                <input
                  className="w-full font-title px-5 py-4 lg:py-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="tel"
                  placeholder="Enter your phone"
                />
                <input
                  className="w-full font-title px-5 py-4 lg:py-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                />
                <button className="mt-5 tracking-wide font-semibold bg-leafGreen text-gray-100 w-full lg:min-w-fi py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>
                <p className="mt-6 text-xs text-white text-center">
                  Already have an account?{" "}
                  <a href="">
                    <span className="text-white font-semibold">Sign in</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-black text-center text-white relative hidden md:flex">
          <a href="/login" className="absolute top-4 left-4 flex items-center gap-2 text-light-green font-bold">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="27.5" cy="27.5" r="27.5" fill="#B86822"/>
                <path d="M37.388 16.2404C37.2207 15.1486 36.1999 14.3991 35.1081 14.5665L17.3159 17.2938C16.2241 17.4612 15.4747 18.4819 15.642 19.5737C15.8094 20.6655 16.8302 21.415 17.922 21.2476L33.7373 18.8234L36.1615 34.6386C36.3289 35.7305 37.3496 36.4799 38.4415 36.3125C39.5333 36.1452 40.2827 35.1244 40.1153 34.0326L37.388 16.2404ZM20.201 40.6402L37.0233 17.727L33.799 15.3598L16.9767 38.2729L20.201 40.6402Z" fill="black"/>
              </svg>

            </div>
            LOGIN
          </a>

          <div className="m-12 xl:m-16 w-full bg-contain bg-center flex items-center justify-center bg-no-repeat">
            <WoodStockLogo/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
