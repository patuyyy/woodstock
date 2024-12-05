import React, { useState } from "react";
import LogoRaw from "../assets/LogoRaw";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";


const Page404 = () => {
  return (
    <div>
      <section className="bg-white dark:bg-black1 min-h-screen items-center justify-center transition-all ease-in-out duration-500">
        <Navbar/>
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 items-center justify-center">
          <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-xl font-title leading-none tracking-tight md:text-2xl xl:text-3xl dark:text-white">
              404
          </h1>
          <h1>
              <span className="text-lightGreen bg-black4 dark:bg-black1 px-3 mr-1 dark:mr-0 dark:px-0 rounded-xl dark:text-lightOrange text-9xl font-extrabold font-title text-outline inline-block transition-all ease-in-out duration-1000">NOT</span>
              <span className="text-lightOrange dark:text-lightGreen text-9xl font-extrabold font-title text-outline transition-all ease-in-out duration-500">FOUND</span>
          </h1>
            <p className="max-w-2xl mb-6 text-black font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            We are sorry because the page you are looking for does not exist.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex items-center justify-center">
              <LogoRaw/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page404;
