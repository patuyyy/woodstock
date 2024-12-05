import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import WoodStockLogo from '../assets/WoodStockLogo';
import { userSignUp } from '../actions/userAction';
import { useNavigate } from 'react-router-dom';
import RedirectLogo from '../assets/RedirectLogo';
import { Link } from 'react-router-dom';

const Register = () => {
  const [photo, setPhoto] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // New state for password visibility
  const navigate = useNavigate();
  const [country, setSelectedCountry] = useState("+1");


  const handlePhotoUpload = async (file) => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:4003/upload/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload photo');
      }

      const photoUrl = await response.json();
      setIsUploading(false);
      return photoUrl;
    } catch (err) {
      console.error('Photo upload failed:', err);
      setIsUploading(false);
      throw new Error('Failed to upload photo');
    }
  };

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    const phoneRegex = /^\d+$/;
    const errors = {};

    if(!name) errors.name = 'Name cannot be Empty';

    if (!username) errors.username = 'Username cannot be empty.';
    else if (!usernameRegex.test(username))
      errors.username = 'Username can only contain letters, numbers, and underscores.';

    if (!email) errors.email = 'Email cannot be empty.';
    else if (!emailRegex.test(email)) errors.email = 'Please enter a valid email.';

    if (!password) errors.password = 'Password cannot be empty.';
    else if (password.length < 8 || password.length > 16)
      errors.password = 'Password must be 8-16 characters long.';

    if (!phone) errors.phone = 'Phone number cannot be empty.';
    else if (!phoneRegex.test(phone)) errors.phone = 'Phone number can only contain numbers.';

    return errors;
  };

  const CountrySelect = ({ label, value, onChange, countries, error }) => (
    <div>
      <select
        className={`w-full px-5 py-4 lg:py-5 rounded-lg font-medium bg-gray-100 border ${
          error ? 'border-red-500' : 'border-gray-200'
        } dark:bg-black4 dark:placeholder:text-white dark:border-black dark:focus:bg-black2 dark:text-white text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white ease-in-out transition-all duration-500`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Select your country
        </option>
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
  

  const countries = [
    { name: 'Indonesia' },
    { name: 'United Kingdom' },
    { name: 'India' },
    { name: 'Canada' },
    { name: 'United States' },
    { name: 'Malaysia' },
    { name: 'Singapore' },
    { name: 'Australia' },
    { name: 'Thailand' },
  ];


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    try {
      let photoUrl = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

      if (photo) {
        // If a photo is uploaded, process the upload
        photoUrl = await handlePhotoUpload(photo);
      }

      const formData = { name, email, username, phone, password, photo: photoUrl, country };
      console.log(formData);
      const response = await userSignUp(formData);

      if (response.success) {
        setSuccess(true);
        setError({});
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        setError({ general: response.message }); // Display the message from the backend
        setSuccess(false);
      }
    } catch (err) {
      setError({ general: 'Something went wrong. Please try again.' });
      setSuccess(false);
    }
  };

  const handleKeyDown = (e, nextInputRef) => {
    if (e.key === "Enter" && nextInputRef) {
      e.preventDefault(); // Prevent default form submission
      nextInputRef.current.focus(); // Focus the next input field
    }
  };
  const nameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-leafGreen dark:bg-black1 flex justify-center flex-1 transition-all duration-500">
        <div className="lg:w-4/6 xl:w-7/12 p-6 sm:p-12">
          <div className="flex flex-col items-start">
            <div className="text-left">
              <h1 className="text-4xl xl:text-7xl font-title text-lightGreen dark:text-white2" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 1)' }}>
                Register
              </h1>
              <p className="text-2xl xl:text-2xl font-title text-lightGreen dark:text-white2" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 1)' }}>
                Register your account.
              </p>
            </div>

            <div className="w-full flex-1 mt-8">
              <div className="max-w-xs lg:max-w-screen-xl flex flex-col gap-4">
                <InputField
                  label="Name"
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={setName}
                  error={error.name}
                  inputRef={nameRef}
                  onKeyDown={(e) => handleKeyDown(e, usernameRef)}
                />
                <InputField
                  label="Username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={setUsername}
                  error={error.username}
                  inputRef={usernameRef}
                  onKeyDown={(e) => handleKeyDown(e, emailRef)}
                />
                <InputField
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={setEmail}
                  error={error.email}
                  inputRef={emailRef}
                  onKeyDown={(e) => handleKeyDown(e, phoneRef)}
                />
                <InputField
                  label="Phone"
                  type="tel"
                  placeholder="Enter your phone"
                  value={phone}
                  onChange={setPhone}
                  error={error.phone}
                  inputRef={phoneRef}
                  onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                />
                <CountrySelect
                  label="Country"
                  value={country}
                  onChange={setSelectedCountry}
                  countries={countries}
                  error={error.country}
                />
                <div className="relative">
                  <InputField
                    label="Password"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={setPassword}
                    error={error.password}
                    inputRef={passwordRef}
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 dark:text-white font-title"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? "Hide" : "Show"}
                  </button>
                </div>

                <div>
                  {error.photo && <p className="text-red-500 mb-1">{error.photo}</p>}
                  <input
                    className="w-full px-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 dark:bg-black4 dark:text-white font-title placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white ease-in-out transition-all duration-500"
                    type="file"
                    accept="image/*"
                    aria-label="Upload photo"
                    onChange={(e) => setPhoto(e.target.files[0])}
                  />
                  {isUploading && <p className="text-yellow-500 mt-2">Uploading photo...</p>}
                </div>

                {error.general && <p className="text-red-400 font-title mt-2">{error.general}</p>}
                {success && <p className="text-green-500 mt-2">Account created successfully! Redirecting...</p>}

                <button
                  className="mt-5 hover:bg-darkGreen hover:scale-105 dark:hover:bg-slate-500 tracking-wide font-semibold bg-darkGreen dark:bg-leafGreen text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex justify-center"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>

                <p className="mt-6 text-sm text-white text-start">
                  Already have an account?{' '}
                  <Link to="/login">
                    <span className="text-white font-semibold">Sign in</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white dark:bg-black text-black dark:text-white text-center relative hidden md:flex transition-all duration-500 ease-in-out">
          <Link to="/login" className="absolute top-4 left-4 flex items-center gap-2 text-black dark:text-lightGreen font-bold">
            <RedirectLogo className="w-10 h-10" />
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

const InputField = ({ label, type, placeholder, value, onChange, error, onKeyDown, inputRef }) => (
  <div>
    {error && <p className="text-red-500 mb-1">{error}</p>}
    <input
      ref={inputRef}
      className={`w-full px-5 py-4 lg:py-5 rounded-lg font-medium bg-gray-100 border ${
        error ? 'border-red-500' : 'border-gray-200'
      } placeholder-gray-500 dark:bg-black4 dark:placeholder:text-white dark:border-black dark:focus:bg-black2 placeholder:text-lg dark:text-white text-sm placeholder:font-title lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white ease-in-out transition-all duration-500`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown} // Added handler
      aria-label={label}
    />
  </div>
);


export default Register;
