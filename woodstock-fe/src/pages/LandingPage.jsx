import React, { useState } from "react";
import LogoRaw from "../assets/LogoRaw";
import { Link } from 'react-router-dom';


const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("slide-in");

  const goals = [
    "Lorem ipsum dolor sit amet",
    "consectetuer adipiscing elit",
    "Maecenas porttitor congue massa.",
    "Ensure customer satisfaction",
    "Fusce posuere, magna sed pulvinar ultricies",
  ];

  const maxItems = 3;
  const totalItems = goals.length;

  const nextItem = () => {
    if (currentIndex + maxItems < totalItems) {
      setAnimationClass("slide-in");
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevItem = () => {
    if (currentIndex > 0) {
      setAnimationClass("slide-out");
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div>
      <section className="bg-white dark:bg-black1 transition-all ease-in-out duration-500">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-xl font-title leading-none tracking-tight md:text-2xl xl:text-3xl dark:text-white">
              Welcome to
          </h1>
          <h1>
              <span className="text-lightGreen bg-black4 dark:bg-black1 px-3 mr-1 dark:mr-0 dark:px-0 rounded-xl dark:text-lightOrange text-9xl font-extrabold font-title text-outline inline-block transition-all ease-in-out duration-1000">WOOD</span>
              <span className="text-lightOrange dark:text-lightGreen text-9xl font-extrabold font-title text-outline transition-all ease-in-out duration-500">STOCK</span>
          </h1>
            <p className="max-w-2xl mb-6 text-black font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            </p>
            <Link to="/register" className="bg-lightOrange px-4 py-2 text-2xl hover:scale-105 transition-all duration-300 hover:text-lightGreen rounded-xl inline-block font-title text-white">
              Get Started
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex items-center justify-center">
              <LogoRaw/>
          </div>
        </div>
      </section>
      <section className="bg-white2 dark:bg-black2 transition-all duration-500">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-12">
          <div className=" items-center lg:col-span-full justify-center">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-3xl bg-black dark:bg-black2 inline-block px-4 py2 rounded-xl text-lightGreen font-title leading-none tracking-tight md:text-2xl xl:text-4xl transition-all duration-500">
                Our Goals
              </h1>
            </div>

          <div className="flex justify-center items-center">
              {/* Left Arrow Button */}
              <button
                onClick={prevItem}
                className="p-2 bg-darkOrange text-white rounded-full mr-4"
                disabled={currentIndex === 0}
              >
                &#8592;
              </button>
            {/* Centered List */}
            <div className="w-full max-w-3xl flex justify-center">
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {goals
                  .slice(currentIndex, currentIndex + maxItems)
                  .map((goal, index) => (
                    <li
                      key={index}
                      className="text-center p-6 bg-gray-800 text-lightGreen rounded-lg shadow-lg dark:bg-gray-900 dark:text-white 
                                transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700 
                                dark:hover:bg-gray-800"
                    >
                      {goal}
                    </li>
                  ))}
              </ul>
            </div>
              {/* Right Arrow Button */}
              <button
                onClick={nextItem}
                className="p-2 bg-darkOrange text-white rounded-full ml-4"
                disabled={currentIndex + maxItems >= totalItems}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>


  );
};

export default LandingPage;
