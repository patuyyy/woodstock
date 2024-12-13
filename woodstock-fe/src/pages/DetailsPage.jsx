import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarB from "../components/NavbarB";
import AdminNavbar from "../components/AdminNavbar";

const DetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("details"); // Tambahkan state untuk tab aktif
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {
    username: "Guest",
  };
  

  const yes = "Available"
  const no = "Not Available"
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/market/${id}`);
        const data = await response.json();

        if (data.success) {
          setProduct(data.data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("An error occurred while fetching product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const toggleImage = () => {
    setExpanded(!expanded);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white2 dark:bg-black2">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-lightOrange border-solid"></div>
            <p className="mt-4 text-xl text-lightOrange font-bold">
              Loading Products...
            </p>
          </div>
        </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white1 dark:bg-darkwood text-white flex items-center justify-center">
        {error}
      </div>
    );
  }

  const handleAddToCart = (product, event) => {
    event.preventDefault();
    event.stopPropagation();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-white1 dark:bg-black1 text-white transition-all duration-500">
      {userInfo.isadmin ? <AdminNavbar /> : <NavbarB />}
      <div className="max-w-6xl mx-auto py-8 px-4">
        <header className="text-center text-black dark:text-white text-3xl font-bold mb-6 transition-all duration-500 pt-20">
          PRODUCT DETAILS
        </header>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Bagian Gambar */}
          <div className="w-full lg:w-1/2">
            <img
              src={product.photo}
              alt={product.name}
              className={`w-full rounded-lg transition-all duration-500 cursor-pointer ${
                expanded ? "h-full" : "h-64"
              }`}
              onClick={toggleImage}
              style={{ objectFit: "cover", transition: "all 0.3s ease" }}
            />
            {!expanded && (
              <p className="text-center text-black dark:text-gray-400 mt-2 transition-all duration-500">Click to expand</p>
            )}
          </div>

          {/* Bagian Konten */}
          <div className="flex-1">
            <h1 className="text-4xl text-darkGreen font-bold mb-2 dark:text-lightYellow transition-all duration-500">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-black dark:text-green-400 my-4 transition-all duration-500">
              Rp. {product.price.toLocaleString()}
            </p>

            {/* Tab Navigasi */}
            <div className="flex border-b border-black dark:border-gray-600 mb-4 transition-all duration-500">
              <button
                className={`px-4 py-2 ${
                  activeTab === "details"
                    ? "text-black dark:text-lightGreen border-b-2 border-black dark:border-lightGreen transition-all duration-500"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab("details")}
              >
                Details
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === "rating"
                    ? "text-black dark:text-lightGreen border-b-2 border-black dark:border-lightGreen transition-all duration-500"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab("rating")}
              >
                Rating
              </button>
            </div>

            {/* Konten Berdasarkan Tab Aktif */}
            {activeTab === "details" ? (
              <div className="text-black dark:text-gray-300 space-y-2 transition-all duration-500">
                <p>{product.description}</p>
                <p>
                  <strong>Category:</strong> {product.categories}
                </p>
              </div>
            ) : (
              <div className="text-black dark:text-gray-300 space-y-2 transition-all duration-500">
                {product.rating ? (
                  <p>
                    Average Rating:{" "}
                    <span className="text-lightYellow font-bold">
                      ★ {product.rating}
                    </span>
                  </p>
                ) : (
                  <p>No ratings available yet.</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bagian Footer */}
        <div className="mt-8 bg-gray-800 p-6 rounded-lg ease-in-out duration-500 transition-all">
          <div className="flex flex-col sm:flex-row items-center justify-between ease-in-out duration-500 transition-all">
            <div className="text-lg text-gray-400">
              Stock:{" "}
              <span className="font-bold text-white">
                { product.availability ? yes : no}
              </span>
            </div>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <button
                onClick={(e) => handleAddToCart(product, e)}
                className="bg-lightOrange px-6 py-2 rounded text-white font-bold hover:bg-gray-600 transition-all"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;