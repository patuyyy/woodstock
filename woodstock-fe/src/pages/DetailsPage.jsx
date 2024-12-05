import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarB from "../components/NavbarB";

const DetailsPage = () => {
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
    <div className="min-h-screen bg-darkwood text-white">
      <NavbarB />
      <div className="max-w-6xl mx-auto py-8 px-4">
        <header className="text-center text-3xl font-bold mb-6">PRODUCT DETAILS</header>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <img
              src={product.photo}
              alt={product.name}
              className={`w-full rounded-lg transition-all duration-500 cursor-pointer ${expanded ? 'h-full' : 'h-64'}`}
              onClick={toggleImage}
              style={{ objectFit: 'cover', transition: 'all 0.3s ease' }}
            />
            {!expanded && (
              <p className="text-center text-gray-400 mt-2">Click to expand</p>
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2 text-lightYellow">{product.name}</h1>
            <p className="text-2xl font-bold text-green-400 my-4">Rp. {product.price.toLocaleString()}</p>

            <div className="flex border-b border-gray-600 mb-4">
              <button className="px-4 py-2 text-lightGreen border-b-2 border-lightGreen">Details</button>
              <button className="px-4 py-2 text-gray-400">Rating</button>
            </div>

            <div className="text-gray-300 space-y-2">
              <p>{product.description}</p>
              <p><strong>Category :</strong> {product.categories}</p>

            </div>
          </div>
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
