import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavbarB from "../components/NavbarB";

const ProDetailPage = () => {
  const { id } = useParams(); // Mengambil id produk dari URL
  const [activeTab, setActiveTab] = useState("details"); // State untuk tab aktif

  // Data produk
  const productData = {
    1: {
      name: "Mango Tree",
      price: "Rp. 100.000,00",
      sold: 500,
      rating: 4.8,
      stock: 402,
      harvestTime: "50 Weeks",
      place: "Lahan Hutan Universitas Indonesia",
      technique: "NPK Fertilizer",
    },
    2: {
      name: "Apple Tree",
      price: "Rp. 120.000,00",
      sold: 320,
      rating: 4.5,
      stock: 150,
      harvestTime: "45 Weeks",
      place: "Lahan Gunung Salak",
      technique: "Organic Fertilizer",
    },
    // data produk tambahan, ini masih belum selesai
  };

  // Cari produk berdasarkan id
  const product = productData[id];

  // output kalau produk tidak ada
  if (!product) {
    return (
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center font-title">
        <NavbarB/>
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-title flex flex-col relative transition-all duration-500">
      {/* Header */}
      <NavbarB/>
      <div className="text-left text-4xl p-4 font-bold">PRODUCT DETAILS</div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between p-8 gap-6 relative">
        {/* Left Section: Product Image */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="bg-gray-300 dark:bg-gray-800 w-full h-64 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">CLICK TO EXPAND</p>
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full md:w-2/3">
          {/* Product Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Sold {product.sold}+ ★ {product.rating}
          </p>
          <p className="text-3xl md:text-4xl text-orange-500 font-bold mb-6">
            {product.price}
          </p>

          {/* Tabs: Details and Rating */}
          <div className="flex border-b border-gray-400 dark:border-gray-600 mb-4">
            <button
              className={`px-4 py-2 ${
                activeTab === "details"
                  ? "border-b-2 border-orange-500 text-black dark:text-white"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("details")}
            >
              Details
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "rating"
                  ? "border-b-2 border-orange-500 text-black dark:text-white"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("rating")}
            >
              Rating
            </button>
          </div>

          {/* Tab Content */}
          <div className="text-lg">
            {activeTab === "details" ? (
              <div>
                <p>Min. Buying: 1 Tree</p>
                <p>Stock: {product.stock} Pcs</p>
                <p>Time to Harvest: {product.harvestTime}</p>
                <p>Place: {product.place}</p>
                <p>Maintain Technique: {product.technique}</p>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold mb-4">Rating</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  No ratings available yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Purchase Details Section */}
      <div className="absolute bottom-8 right-8 bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md space-y-4 w-64 transition-all duration-500">
        <p className="text-gray-500 dark:text-gray-300 text-lg font-bold">
          Purchase Details
        </p>
        <div className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white p-4 rounded">
          Stock: {product.stock} Pcs
        </div>
        <div className="flex flex-col gap-2">
          <button className="px-4 py-2 bg-orange-500 rounded text-white font-bold hover:bg-orange-400 transition-all duration-300">
            Buy Now
          </button>
          <button className="px-4 py-2 bg-gray-300 dark:bg-gray-800 rounded text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProDetailPage;
