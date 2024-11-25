import React, { useState, useEffect } from "react";
import NavbarB from "../components/NavbarB";
import { Link } from "react-router-dom";
import LogoRaw from "../assets/LogoRaw";

const Marketplace = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {
    username: "Guest",
  };

  // State to hold product data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // Simulating an API call with static data
      const productData = [
        {
          id: 1,
          name: "Product 1",
          image:
            "https://burst.shopifycdn.com/photos/dark-image-of-a-plants-leaves-with-yellow-spots.jpg?width=1000&format=pjpg&exif=0&iptc=0",
          price: 19.99,
        },
        {
          id: 2,
          name: "Product 2",
          image:
            "https://burst.shopifycdn.com/photos/dark-image-of-a-plants-leaves-with-yellow-spots.jpg?width=1000&format=pjpg&exif=0&iptc=0",
          price: 24.99,
        },
        {
          id: 3,
          name: "Product 3",
          image:
            "https://burst.shopifycdn.com/photos/dark-image-of-a-plants-leaves-with-yellow-spots.jpg?width=1000&format=pjpg&exif=0&iptc=0",
          price: 15.49,
        },
        {
          id: 4,
          name: "Product 4",
          image:
            "https://burst.shopifycdn.com/photos/dark-image-of-a-plants-leaves-with-yellow-spots.jpg?width=1000&format=pjpg&exif=0&iptc=0",
          price: 10.0,
        },
      ];
      setProducts(productData);
    };

    fetchProducts();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 80;
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <NavbarB />
      <section className="bg-white dark:bg-black1 transition-all ease-in-out duration-500">
        <header className="bg-white dark:bg-black1 p-5 transition-all ease-in-out duration-500">
          <h1 className="text-4xl font-title text-start text-black2 dark:text-white mb-2 ease-in-out transition-all duration-500">
            Welcome back {userInfo.username}, to{" "}
            <span className="text-lightGreen bg-black4 dark:bg-black1 px-1 dark:px-0 rounded-xl dark:text-lightOrange font-title text-outline inline-block ease-in-out transition-all duration-500">
              Wood
            </span>
            <span className="text-darkOrange dark:text-lightGreen ease-in-out transition-all duration-500">
              Stock
            </span>
          </h1>
          <p className="text-xl font-title text-start text-black3 dark:text-lightGreen">
            How can we help you today?
          </p>
        </header>
        <div className="grid max-w-screen-xl mx-auto px-4 items-center justify-center text-center pb-20 lg:flex lg:flex-row lg:gap-8">
          <div className="lg:col-span-2 flex flex-col items-center justify-center">
            <p className="max-w-2xl mb-4 text-2xl text-black font-title dark:text-gray-400">
              Browse your trees now
            </p>
            <h1
              onClick={() => scrollToSection("our-products")}
              className="bg-lightOrange px-4 py-2 text-2xl hover:scale-105 transition-all duration-300 hover:text-lightGreen rounded-xl inline-block font-title text-white"
            >
              Browse trees
            </h1>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center">
            <LogoRaw />
          </div>
        </div>
      </section>

      <div className="flex flex-col min-h-screen bg-darkwood text-white1">
        <div className="flex flex-1">
          <aside className="bg-white1 dark:bg-black2 ease-in-out transition-all duration-500 w-1/5 p-4">
            <h2 className="font-bold text-leafGreen text-xl mb-4">Categories</h2>
          </aside>

          <main className="flex-grow bg-brokenWhite dark:bg-black4 p-6 ease-in-out transition-all duration-500">
            <div
              id="our-products"
              className="text-2xl text-black dark:text-white font-title mb-5"
            >
              Our Products
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white2 dark:bg-black3 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-500 ease-in-out border border-gray-200 dark:border-gray-700 p-4"
                >
                  <div
                    className="h-40 w-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <div className="p-4">
                    <h3 className="text-xl font-title text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 font-title text-lg dark:text-gray-300">
                      ${product.price ? product.price.toFixed(2) : "N/A"}
                    </p>
                    <button className="mt-3 px-4 py-2 bg-lightOrange text-white text-sm font-medium rounded-md hover:bg-darkOrange transition-all duration-500">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default Marketplace;
