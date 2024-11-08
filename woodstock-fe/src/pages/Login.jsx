import React from 'react';
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-darkGreen sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-1/2 p-6 sm:p-12">
          <div className="flex flex-col items-start">
            <div className="text-left">
              <h1
                className="text-4xl xl:text-7xl font-bold font-title text-lightGreen"
                style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 1)' }}
              >
                Login
              </h1>

              <p
                className="text-2xl xl:text-2xl font-title text-lightGreen"
                style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 1)' }}
              >
                Welcome back! Please login to your account.
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="max-w-xs lg:max-w-lg flex flex-col gap-4">
                <input
                  className="w-full font-title px-5 py-4 lg:py-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
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
                  <span className="ml-3">Login</span>
                </button>
                <p className="mt-6 text-xs text-white text-center">
                  Don't have an account?{" "}
                  <a href="/register">
                    <span className="text-white font-semibold">Register here</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-black text-center text-white relative hidden md:flex">
          <a href="/register" className="absolute top-4 left-4 flex items-center gap-2 text-lightGreen font-bold">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="27.5" cy="27.5" r="27.5" fill="#B86822"/>
                <path d="M37.388 16.2404C37.2207 15.1486 36.1999 14.3991 35.1081 14.5665L17.3159 17.2938C16.2241 17.4612 15.4747 18.4819 15.642 19.5737C15.8094 20.6655 16.8302 21.415 17.922 21.2476L33.7373 18.8234L36.1615 34.6386C36.3289 35.7305 37.3496 36.4799 38.4415 36.3125C39.5333 36.1452 40.2827 35.1244 40.1153 34.0326L37.388 16.2404ZM20.201 40.6402L37.0233 17.727L33.799 15.3598L16.9767 38.2729L20.201 40.6402Z" fill="black"/>
              </svg>
            </div>
            REGISTER
          </a>

          <div className="m-12 xl:m-16 w-full bg-contain bg-center flex items-center justify-center bg-no-repeat">
            <svg width="339" height="490" viewBox="0 0 339 490" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M110.765 91.9259H80.7832L119.331 219H147.17L164.303 175.741L185.718 219H209.275L232.832 155.463L256.388 91.9259L269.237 56.7778L288.511 67.5926L275.662 0L226.407 29.7407L239.256 37.8519L243.539 40.5556L239.256 51.3704L224.265 91.9259L196.426 175.741L164.303 91.9259L136.463 175.741L110.765 91.9259Z" fill="url(#paint0_angular_128_179)"/>
              <path d="M75.231 75.3753C57.7902 71.6322 29.6766 58.8147 29.6535 31.6391C29.6511 28.7725 32.3759 26.8047 35.1434 27.6047C58.2146 34.2736 76.2317 54.6053 79.9045 70.1796C79.9626 70.4258 80.017 70.6708 80.0679 70.9145C80.6646 73.7746 78.0937 75.9897 75.231 75.3753Z" fill="#5B8844"/>
              <defs>
                <filter id="filter0_i_128_179" x="46.8049" y="106.295" width="35.5338" height="59.153" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.352941 0 0 0 0 0.533333 0 0 0 0 0.266667 0 0 0 1 0"/>
                  <feBlend in2="shape" result="effect1_innerShadow_128_179"/>
                </filter>
                <linearGradient id="paint0_angular_128_179" x1="197.5" y1="27.5" x2="27.5" y2="27.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#D6D700"/>
                  <stop offset="1" stopColor="#0056B3"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
