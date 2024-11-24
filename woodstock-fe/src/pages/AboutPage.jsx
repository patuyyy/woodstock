import React, { useState } from "react";
import LogoRaw from "../assets/LogoRaw";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";


const AboutPage = () => {
  return (
    <div>
        <Navbar/>
      <section className="bg-white dark:bg-black1 transition-all ease-in-out duration-500">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl text-xl font-title leading-none tracking-tight md:text-2xl xl:text-3xl dark:text-white">
              About
          </h1>
          <h1>
              <span className="text-lightGreen bg-black dark:bg-black1 rounded-xl dark:text-lightOrange text-6xl font-extrabold font-title text-outline inline-block transition-all ease-in-out duration-500">WOOD</span>
              <span className="text-lightOrange dark:text-lightGreen text-6xl font-extrabold font-title text-outline transition-all ease-in-out duration-500">STOCK</span>
          </h1>
            <p className="max-w-2xl mb-6 text-black font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            </p>
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
            <h1 className="text-white text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla.
                Nulla vitae elit libero, a pharetra augue. Integer sollicitudin quam in nisi.
                Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-white2 min-h-screen dark:bg-black1 transition-all duration-500">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-12">
          <div className=" items-center lg:col-span-full justify-center">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-3xl bg-black dark:bg-black2 inline-block px-4 py2 rounded-xl text-lightGreen font-title leading-none tracking-tight md:text-2xl xl:text-4xl transition-all duration-500">
                Our Teams
              </h1>
            </div>
            <h1 className="text-white text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla.
                Nulla vitae elit libero, a pharetra augue. Integer sollicitudin quam in nisi.
                Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </h1>
          </div>
        </div>
      </section>
    </div>


  );
};

export default AboutPage;
