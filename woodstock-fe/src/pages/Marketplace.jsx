import React, { useState, useEffect } from "react";
import NavbarB from "../components/NavbarB";
import { Link } from "react-router-dom";
import LogoRaw from "../assets/LogoRaw";
import AdminNavbar from "../components/AdminNavbar";

const Marketplace = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {
    username: "Guest",
  };

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4003/market/");
        const data = await response.json();

        if (data.success) {
          const productData = data.data.map((item) => ({
            id: item.id,
            name: item.name,
            image: item.photo,
            price: item.price,
            category: item.categories,
          }));
          setProducts(productData);

          // Extract unique categories
          const uniqueCategories = [
            "All",
            ...new Set(productData.map((product) => product.category)),
          ];
          setCategories(uniqueCategories);
        } else {
          console.error("Error fetching products:", data.message);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filtered products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

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
      {userInfo.isadmin ? <AdminNavbar /> : <NavbarB />}
      <section className="bg-brokenWhite dark:bg-black1 transition-all ease-in-out duration-500">
        <header className="bg-brokenWhite dark:bg-black1 p-5 transition-all ease-in-out duration-500">
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
          <aside className="bg-white dark:bg-black2 ease-in-out transition-all duration-500 w-1/5 p-4">
            <h2 className="font-bold text-leafGreen text-xl mb-4">Categories</h2>
            <ul>
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer text-lg py-2 ${
                    selectedCategory === category
                      ? "font-bold text-lightOrange"
                      : "text-black dark:text-gray-300"
                  } hover:text-lightGreen transition-all duration-300`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </aside>

          <main className="flex-grow bg-leafGreen dark:bg-black4 p-6 ease-in-out transition-all duration-500">
            <div
              id="our-products"
              className="text-2xl text-black dark:text-white font-title mb-5"
            >
              Our Products
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/details/${product.id}`}
                  className="bg-white2 hover:scale-105 dark:bg-black3 rounded-lg overflow-hidden shadow-md hover:shadow-lg duration-500 ease-in-out border border-gray-200 dark:border-gray-700 p-4 transition-all"
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
                      View Details
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
