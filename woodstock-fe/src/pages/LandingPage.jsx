import React from "react";
import { motion } from "framer-motion";
import LogoRaw from "../assets/LogoRaw";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const LandingPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  const features = [
    {
      title: "Eco-Friendly Design",
      description:
        "Promote sustainability with our green metrics. Our designs focus on using environmentally friendly materials and processes, ensuring that every project contributes to reducing carbon footprints.",
    },
    {
      title: "Community Driven",
      description:
        "Collaborate with nature enthusiasts worldwide. Join a supportive community where ideas and knowledge are shared for advancing environmental conservation and reforestation efforts.",
    },
    {
      title: "Innovative Features",
      description:
        "Explore tools to promote environmental greening. Utilize advanced tools designed to make environmental initiatives more efficient and impactful, fostering long-term sustainability.",
    },
  ];


  return (
    <div className="bg-white dark:bg-black">
      {/* Section 1 */}
      <motion.section
        className="bg-white dark:bg-black1 transition-all ease-in-out duration-500"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <motion.div
            className="mr-auto place-self-center lg:col-span-7"
            variants={fadeInUp}
          >
            <h1 className="max-w-2xl mb-4 text-xl font-title leading-none tracking-tight md:text-2xl xl:text-3xl dark:text-white">
              Welcome to
            </h1>
            <h1>
              <motion.span
                className="text-lightGreen bg-black4 dark:bg-black1 px-3 mr-1 dark:mr-0 dark:px-0 rounded-xl dark:text-lightOrange text-9xl font-extrabold font-title text-outline inline-block transition-all ease-in-out duration-1000"
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
              >
                WOOD
              </motion.span>

              <motion.span
                className="text-lightOrange dark:text-lightGreen text-9xl font-extrabold font-title text-outline transition-all ease-in-out duration-500"
                variants={fadeInUp}
              >
                STOCK
              </motion.span>
            </h1>
            <p className="max-w-2xl mb-6 mt-5 text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              WoodStock is a green-metric based web application that accommodates anyone, most importantly nature lovers, to promote environmental greening movement through some web features.
            </p>
            <Link
              to="/register"
              className="bg-lightOrange px-4 py-2 text-2xl hover:scale-105 transition-all duration-300 hover:text-lightGreen rounded-xl inline-block font-title text-white"
            >
              Get Started
            </Link>
          </motion.div>
          <motion.div
            className="hidden lg:mt-0 lg:col-span-5 lg:flex items-center justify-center"
            variants={fadeInUp}
          >
            <LogoRaw />
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        className="bg-white2 dark:bg-black2 transition-all duration-500 min-h-2.5 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <motion.div
            className="items-center lg:col-span-full justify-center"
            variants={fadeInUp}
          >
            <div className="mr-auto place-self-center items-center justify-center lg:col-span-7">
              <h1 className="max-w-2xl mb-8 text-3xl bg-black dark:bg-black2 inline-block px-4 py-2 dark:px-0 rounded-xl text-white font-title leading-none tracking-tight md:text-2xl xl:text-4xl transition-all duration-500 text-center">
                Our Goals
              </h1>
            </div>

            <div className="flex justify-center items-center">
              <motion.div
                className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
                variants={staggerContainer}
              >
                {[" Inspire greater public involvement in reforestation initiatives.", "Provide a transparent platform for landowners and investors to collaborate on environmental projects.", " Empower individuals with the tools and knowledge to track tree growth and environmental impact."].map((text, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center shadow-lg hover:scale-110 justify-center p-10 bg-white rounded-xl dark:bg-black4 transition-all duration-500"
                    variants={fadeInUp}
                  >
                    <p className="text-start text-lg font-title hover:scale-105 font-medium text-gray-700 dark:text-gray-300 transition-all duration-500">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        className="bg-white dark:bg-black1 py-20 items-start justify-start transition-all duration-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-screen-md px-4 mx-auto text-left items-start justify-start transition-all duration-500">
          <h2 className="text-4xl font-title text-black dark:text-white mb-8 transition-all duration-500">Why Choose Us?</h2>
          <motion.div className="space-y-8" variants={staggerContainer}>
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white dark:bg-black4 rounded-xl shadow-md transition-all duration-500"
                variants={fadeInUp}
              >
                <h3 className="text-xl dark:text-white font-bold mb-4 transition-all duration-500">{feature.title}</h3>
                <p className="text-gray-600 dark:text-white mb-4 transition-all duration-500">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default LandingPage;