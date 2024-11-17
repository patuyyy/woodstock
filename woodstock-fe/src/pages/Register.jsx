import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import WoodStockLogo from '../assets/WoodStockLogo';
import { userSignUp } from '../actions/userAction';
import { useNavigate } from 'react-router-dom';
import RedirectLogo from '../assets/RedirectLogo';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !username || !phone || !password) {
      setError('Please fill out all fields.');
      return;
    }

    const formData = { email, username, phone, password };

    try {
      const response = await userSignUp(formData);

      if (response.success) {
        setSuccess(true);
        setError(null);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        setError('Failed to create account.');
        setSuccess(false);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-leafGreen dark:bg-darkGreen flex justify-center flex-1 transition-all duration-500">
        <div className="lg:w-4/6 xl:w-7/12 p-6 sm:p-12">
          <div className="flex flex-col items-start">
            <div className="text-left">
              <h1
                className="text-4xl xl:text-7xl font-bold font-title text-lightGreen [text-shadow:2px_2px_0px_black,-2px_-2px_0px_black,2px_-2px_0px_black,-2px_2px_0px_black]"
              >
                Register
              </h1>
              <p
                className="text-2xl xl:text-2xl font-title text-lightGreen [text-shadow:2px_2px_0px_black,-2px_-2px_0px_black,2px_-2px_0px_black,-2px_2px_0px_black]"
              >
                Register your account!
              </p>
            </div>

            <div className="w-full flex-1 mt-8">
              <div className="max-w-xs lg:max-w-screen-md flex flex-col gap-4">
                <input
                  className="w-full placeholder:font-title px-5 py-4 lg:py-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="w-full placeholder:font-title px-5 py-4 lg:py-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="w-full placeholder:font-title px-5 py-4 lg:py-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="tel"
                  placeholder="Enter your phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  className="w-full placeholder:font-title px-5 py-4 lg:py-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="text-red-500 mt-2">{error}</p>}
                {success && <p className="text-green-500 mt-2">Account created successfully! Redirecting...</p>}

                <button
                  className="mt-5 hover:bg-darkGreen hover:scale-105 dark:hover:bg-slate-500 tracking-wide font-semibold bg-darkGreen dark:bg-leafGreen text-gray-100 w-full lg:min-w-fi py-4 rounded-lg transition-all duration-300 ease-in-out flex items-start justify-start focus:shadow-outline focus:outline-none"
                  onClick={handleSubmit}
                >
                  <span className="ml-5">Sign Up</span>
                </button>

                <p className="mt-6 ms-4 text-m text-white text-start">
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="text-white font-semibold">Sign in</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white dark:bg-black  text-black dark:text-white text-center relative hidden md:flex transition-all duration-500 ease-in-out">
          <Link to="/login" className="absolute top-4 left-4 flex items-center gap-2 text-light-green font-bold">
            <div className="w-10 h-10 flex items-center justify-center">
              <RedirectLogo/>
            </div>
            LOGIN
          </Link>

          <div className="m-12 xl:m-16 w-full bg-contain bg-center flex items-center justify-center bg-no-repeat">
            <WoodStockLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
