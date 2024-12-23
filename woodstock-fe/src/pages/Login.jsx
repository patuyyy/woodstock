import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import WoodStockLogo from '../assets/WoodStockLogo';
import { userLogin } from '../actions/userAction';
import { Link, useNavigate } from 'react-router-dom';
import RedirectLogo from '../assets/RedirectLogo';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const passwordInputRef = useRef(null); // Ref for the password input

  const handleKeyDown = (e, nextInputRef) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submission
      if (nextInputRef?.current) {
        nextInputRef.current.focus(); // Move focus to the next input
      } else {
        handleSubmit(e); // Trigger submit if no next input
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError({ general: 'Please fill out all fields.' });
      return;
    }

    const formData = { username, password };

    try {
      const response = await userLogin(formData);

      if (response.success) {
        setSuccess(true);
        setError({});
        localStorage.setItem('userInfo', JSON.stringify(response.data));
        setTimeout(() => {
          navigate('/marketplace');
        }, 1000);
      } else {
        setError({ general: response.message });
        setSuccess(false);
      }
    } catch (err) {
      setError({ general: 'Something went wrong. Please try again.' });
      setSuccess(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-leafGreen dark:bg-black1 flex justify-center flex-1 transition-all duration-500 pt-20">
        <div className="lg:w-1/2 xl:w-7/12 p-6 sm:p-12">
          <div className="flex flex-col items-start">
            <div className="text-left">
              <h1
                className="text-4xl xl:text-7xl font-title text-lightGreen dark:text-white2"
                style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 1)' }}
              >
                Login
              </h1>
              <p
                className="text-2xl xl:text-2xl font-title text-lightGreen dark:text-white2"
                style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 1)' }}
              >
                Welcome back! Please login to your account.
              </p>
            </div>

            <div className="w-full flex-1 mt-8">
              <div className="max-w-xs lg:max-w-screen-md flex flex-col gap-4">
                {/* Username Input */}
                <input
                  className="w-full placeholder:font-title px-5 py-4 lg:py-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, passwordInputRef)} // Move to password on Enter
                />

                {/* Password Input */}
                <div className="relative">
                  <input
                    className="w-full placeholder:font-title px-5 py-4 lg:py-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ref={passwordInputRef} // Attach ref
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSubmit(e); // Submit only on Enter key
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-black font-title"
                  >
                    {showPassword ? 'Hide password' : 'Show password'}
                  </button>
                </div>

                {/* Error and Success Messages */}
                {error.general && <p className="text-red-400 mt-2">{error.general}</p>}
                {success && <p className="text-green-500 mt-2">Login successful! Redirecting...</p>}

                {/* Submit Button */}
                <button
                  className="mt-5 tracking-wide font-semibold bg-darkGreen dark:bg-leafGreen text-gray-100 w-full lg:min-w-fi py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={handleSubmit}
                >
                  <span className="ml-3">Login</span>
                </button>

                {/* Register Redirect */}
                <p className="mt-6 text-xs text-white text-center">
                  Don't have an account?{' '}
                  <Link to="/register">
                    <span className="text-white font-semibold">Register here</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="flex-1 bg-white dark:bg-black text-black dark:text-white text-center relative hidden md:flex transition-all duration-500 ease-in-out">
          <Link
            to="/register"
            className="absolute top-4 left-4 flex items-center gap-2 text-black dark:text-lightGreen font-bold"
          >
            <RedirectLogo className="w-10 h-10" />
            REGISTER
          </Link>
          <div className="m-12 xl:m-16 w-full bg-contain bg-center flex items-center justify-center bg-no-repeat">
            <WoodStockLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
