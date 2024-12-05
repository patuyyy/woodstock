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
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState("none"); // State for sorting criteria

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4003/market/");
        const data = await response.json();

        if (data.success) {
          const productData = data.data.map((item) => ({
            id: item.id,
            name: item.name,
            photo: item.photo,
            price: item.price,
            category: item.categories,
          }));
          setProducts(productData);

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

  const sortProducts = (products) => {
    switch (sortCriteria) {
      case "price-asc":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...products].sort((a, b) => b.price - a.price);
      case "name-asc":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return products;
    }
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      : products
        .filter((product) => product.category === selectedCategory)
        .filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

  const sortedProducts = sortProducts(filteredProducts);

  const handleAddToCart = (product, event) => {
    event.preventDefault();
    event.stopPropagation();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.reload();
  };

  return (
    <div>
      {userInfo.isadmin ? <AdminNavbar /> : <NavbarB />}
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
          <aside className="bg-white2 dark:bg-black2 ease-in-out transition-all duration-500 w-1/5 p-4">
            <h2 className="font-bold text-leafGreen text-xl mb-4">Categories</h2>
            <ul>
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer text-lg py-2 ${selectedCategory === category
                      ? "font-bold text-lightOrange"
                      : "text-black dark:text-gray-300"
                    } hover:text-lightGreen transition-all duration-300`}
                >
                  {category}
                </li>
              ))}
            </ul>

            {/* Sorting Section */}
            <div className="mt-6">
              <h3 className="font-bold text-leafGreen text-lg mb-2">
                Sort By
              </h3>
              <select
                className="w-full p-2 rounded-md bg-white dark:bg-black3 text-black dark:text-white border border-gray-300 dark:border-gray-600"
                value={sortCriteria}
                onChange={(e) => setSortCriteria(e.target.value)}
              >
                <option value="none">None</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </aside>

          <main className="flex-grow bg-white1 dark:bg-black4 p-6 ease-in-out transition-all duration-500">
            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search for a tree..."
                className="w-full p-3 rounded-md bg-white dark:bg-black3 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-lightGreen"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div id="our-products" className="text-2xl font-title mb-5">
              Our Products
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/details/${product.id}`}
                  className="bg-white2 hover:scale-105 dark:bg-black3 rounded-lg overflow-hidden shadow-md hover:shadow-lg duration-500 ease-in-out border border-gray-200 dark:border-gray-700 p-4 transition-all"
                >
                  <div
                    className="h-40 w-full bg-center bg-cover rounded-xl"
                    style={{ backgroundImage: `url(${product.photo})` }}
                  ></div>
                  <div className="p-4">
                    <h3 className="text-xl font-title text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 font-title text-lg dark:text-gray-300">
                      Rp {product.price ? product.price.toFixed(2) : "N/A"}
                    </p>
                    <button
                      onClick={(e) => handleAddToCart(product, e)}
                      className="mt-3 px-4 py-2 bg-lightOrange text-white text-sm font-medium rounded-md hover:bg-darkOrange transition-all duration-500"
                    >
                      Add to Cart
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
