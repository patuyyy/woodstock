import React from "react";
import { motion } from "framer-motion";
import LogoRaw from "../assets/LogoRaw";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="bg-white dark:bg-black"
    >
      <Navbar />
      <motion.section
        className="bg-white dark:bg-black1 transition-all ease-in-out duration-500 pt-16"
        variants={staggerContainer}
      >
        <motion.div
          className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28"
          variants={fadeInUp}
        >
          <motion.div
            className="mr-auto place-self-center lg:col-span-7"
            variants={fadeInLeft}
          >
            <h1 className="max-w-2xl text-xl font-title leading-none tracking-tight md:text-2xl xl:text-3xl dark:text-white">
              About
            </h1>
            <h1>
              <span className="text-lightGreen bg-black dark:bg-black1 rounded-xl dark:text-lightOrange text-6xl font-extrabold font-title text-outline inline-block transition-all ease-in-out duration-500">
                WOOD
              </span>
              <span className="text-lightOrange dark:text-lightGreen text-6xl font-extrabold font-title text-outline transition-all ease-in-out duration-500">
                STOCK
              </span>
            </h1>
            <p className="max-w-2xl mb-6 text-black font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              WoodStock is a green-metric based web application that accommodates
              anyone, most importantly nature lovers, to promote environmental greening
              movement through some web features.
            </p>
          </motion.div>
          <motion.div
            className="hidden lg:mt-0 lg:col-span-5 lg:flex items-center justify-center"
            variants={fadeInRight}
          >
            <LogoRaw />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="bg-white dark:bg-black2 transition-all duration-500"
        variants={staggerContainer}
      >
        <motion.div
          className="bg-white dark:bg-black1 transition-all duration-500 py-16"
          variants={fadeInUp}
        >
          <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
            <motion.div
              className="mr-auto place-self-center lg:col-span-7"
              variants={fadeInLeft}
            >
              <h1 className="text-3xl bg-black dark:bg-black2 inline-block px-4 py-2 dark:px-0 dark:py-0 rounded-xl text-lightGreen font-title leading-none tracking-tight md:text-2xl xl:text-4xl mb-6 transition-all duration-500">
                Our Goals
              </h1>
            </motion.div>
            <motion.div className="lg:col-span-12 flex flex-col gap-6" variants={fadeInUp}>
            <motion.div variants={staggerContainer} className="space-y-4">
              <motion.div
                variants={fadeInLeft}
                className="text-xl text-black dark:text-white transition-all duration-500">
                The main goal of the project is to provide a platform to anyone who wants to contribute in solving the environmental issues by planting trees on an individual level. Not only that, this project also has several other goals, including:
              </motion.div>

              <motion.div variants={staggerContainer} className="space-y-4">
                <div>
                  <motion.div 
                    variants={fadeInLeft}
                    className="text-2xl font-bold text-black dark:text-lightOrange transition-all duration-500">Improve and Support Community Education towards the Environment
                  </motion.div>
                  <motion.div
                  variants={fadeInLeft}
                    className="text-lg text-black dark:text-gray-400 transition-all duration-500">
                    With this platform, it is expected to increase public awareness of how important reforestation is to overcome several environmental problems. By raising awareness, it will also support public education about environmental issues and how important a tree is in the environment.
                  </motion.div>
                </div>

                <div>
                  <motion.div
                  variants={fadeInLeft}
                  className="text-2xl font-bold text-black dark:text-lightOrange transition-all duration-500">
                    Providing a Positive Impact for the Long Term of the Environment
                  </motion.div>
                  <motion.div variants={fadeInLeft} className="text-lg text-black dark:text-gray-400 transition-all duration-500">
                    By making people aware of how important trees are to the environment, it will provide a positive impact from the environment to the wider community. This impact will be in the form of climate and environmental stability both locally and globally.
                  </motion.div>
                </div>

                <div>
                  <motion.div variants={fadeInLeft} className="text-2xl font-bold text-black dark:text-lightOrange transition-all duration-500">Encouraging Investment Transparency</motion.div>
                  <motion.div variants={fadeInLeft} className="text-lg text-black dark:text-gray-400 transition-all duration-500">
                    With the transparency of investments made by this platform, tree investors will see the development of the value of a tree, both in financial and environmental terms.
                  </motion.div>
                </div>

                <div>
                  <motion.div variants={fadeInLeft} className="text-2xl font-bold text-black dark:text-lightOrange transition-all duration-500">Encouraging the Use of Environmentally Friendly Technology</motion.div>
                  <motion.div variants={fadeInLeft} className="text-lg text-black dark:text-gray-400 transition-all duration-500">
                    This platform can also support the community to use more environmentally friendly technology. Additionally, the application makers or developers will be encouraged to create applications that are more environmentally friendly.
                  </motion.div>
                </div>
                <br></br>
                <motion.div variants={fadeInLeft} className="text-xl text-black dark:text-gray-400 transition-all duration-500">
                  With the objectives mentioned, the platform is expected to be a solution to several environmental problems that occur, especially the lack of green space in the community. In addition to solving problems environmentally, this platform is also expected to solve problems educationally for the community, about increasing public awareness, and knowing the long-term impact of planting trees.
                </motion.div>
              </motion.div>
            </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="bg-white2 dark:bg-black1 transition-all duration-500"
        variants={staggerContainer}
      >
        <motion.div
          className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-12"
          variants={fadeInUp}
        >
          <div className="items-center lg:col-span-full justify-center">
            <motion.div
              className="mr-auto place-self-center lg:col-span-7"
              variants={fadeInLeft}
            >
              <h1 className="max-w-2xl mb-4 dark:px-0 dark:py-0 text-3xl bg-black dark:bg-black2 inline-block px-4 py-2 rounded-xl text-lightGreen font-title leading-none tracking-tight md:text-2xl xl:text-4xl transition-all duration-500">
                Our Teams
              </h1>
            </motion.div>
            <motion.h1
              className="text-black dark:text-white text-xl"
              variants={fadeInUp}
            >
              Our team is comprised of three dedicated individuals, all of whom are
              undergraduate students majoring in Computer Engineering at Universitas
              Indonesia. Together, we bring diverse perspectives, skills, and a shared
              passion for technology to tackle complex challenges and innovate.
            </motion.h1>
          </div>
        </motion.div>
      </motion.section>
      <Footer />
    </motion.div>
  );
};

export default AboutPage;
