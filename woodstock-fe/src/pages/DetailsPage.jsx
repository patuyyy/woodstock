import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarB from "../components/NavbarB";
import AdminNavbar from "../components/AdminNavbar";

const DetailsPage = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {
    username: "Guest",
  };
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4003/market/${id}`);
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
    return <div className="min-h-screen bg-white1 dark:bg-darkwood text-white flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-white1 dark:bg-darkwood text-white flex items-center justify-center">{error}</div>;
  }

  const handleAddToCart = (product, event) => {
    event.preventDefault();  // Prevent the link from being followed
    event.stopPropagation(); // Stop the click event from propagating to the parent Link
  
    // Add the product to the cart in localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.reload();
  };
  
  return (
    <div className="min-h-screen bg-white1 dark:bg-darkwood text-black dark:text-white">
      <NavbarB/>
      <div className="max-w-full mx-auto p-8 flex flex-col lg:flex-row">
        {/* Left side (Image) */}
        <div className={`flex-shrink-0 w-full lg:w-1/2 mb-4 lg:mb-0 rounded-lg`}>
          <img
            src={product.photo}
            alt={product.name}
            className={`w-full h-64 object-cover rounded-lg transition-all duration-500 cursor-pointer ${expanded ? 'h-full' : 'h-64'}`}
            onClick={toggleImage}
            style={{
              objectFit: 'cover', // Ensures the image covers the area without distortion
              transition: 'all 0.3s ease' // Smooth transition when expanding
            }}
          />
          {!expanded && (
            <p className="text-center text-xl font-title text-gray-500 mt-2">Click to expand</p>
          )}
        </div>

        <div className="mt-8 bg-gray-800 p-6 rounded-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-lg text-gray-400">Stock: <span className="font-bold text-white">{product.availability.toLocaleString()}</span></div>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <button className="bg-green-500 px-6 py-2 rounded text-white font-bold hover:bg-green-600 transition-all">Buy Now</button>
              <button onClick={(e) => handleAddToCart(product, e)} className="bg-gray-700 px-6 py-2 rounded text-white font-bold hover:bg-gray-600 transition-all">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
