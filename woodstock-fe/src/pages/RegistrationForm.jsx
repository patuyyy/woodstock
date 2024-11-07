import React from 'react';
import logo from '../assets/vertLogo.png';

const RegisterForm = () => {
  return (
    <div className="min-h-screen bg-darkGreen sm:rounded-lg flex justify-center flex-1">
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
            <img
              src="https://cdn.discordapp.com/attachments/998995830805643265/1304100065257848832/Group_13_5.png?ex=672e2954&is=672cd7d4&hm=905e2d2ba710a70efae4b78cc2b72e23e35ce26e317c459b67f6d8e2131adee6&"
              alt="Login Icon"
              className="w-8 h-8"
            />
          </div>
          LOGIN
        </a>

        <div className="m-12 xl:m-16 w-full bg-contain bg-center flex items-center justify-center bg-no-repeat">
          <img src={logo} alt="Woodstock Logo" className="h-auto w-auto" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
