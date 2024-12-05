import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarB from '../components/NavbarB';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load the cart from localStorage and ensure each product has a qty property
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Combine same products by summing up their quantity (qty)
    const updatedCart = storedCart.reduce((acc, product) => {
      const existingProduct = acc.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.qty += 1; // Increment qty if product is already in cart
      } else {
        product.qty = 1; // Initialize qty for new product
        acc.push(product);
      }
      return acc;
    }, []);
    
    setCart(updatedCart);
  }, []);

  const handleRemoveFromCart = (productId) => {
    // Remove the product by filtering out the item based on the product ID
    const updatedCart = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart); // Update the state
    window.location.reload();
  };

  const handleClearCart = () => {
    // Clear the entire cart from localStorage and state
    localStorage.removeItem('cart');
    setCart([]);
    window.location.reload();
  };

  return (
    <div>
      <NavbarB />
      <div className="p-6 bg-white dark:bg-black1 min-h-screen">
        <h1 className="text-3xl font-title text-black dark:text-white mb-4">Your Cart</h1>
        
        {cart.length === 0 ? (
          <p className="text-lg text-center text-black dark:text-white">Your cart is empty.</p>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cart.map((product) => (
                <div key={product.id} className="bg-white dark:bg-black3 rounded-lg p-4 shadow-md">
                  <div
                    className="h-40 w-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${product.photo})` }}
                  ></div>
                  <div className="p-4">
                    <h3 className="text-xl font-title text-black dark:text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 font-title text-lg dark:text-gray-300">
                      Rp {product.price ? product.price.toFixed(2) : "N/A"}
                    </p>
                    <p className="text-gray-600 font-title text-lg dark:text-gray-300">
                      Quantity: {product.qty}
                    </p>
                    <p className="text-gray-600 font-title text-lg dark:text-gray-300">
                      Total: Rp {product.qty * product.price}
                    </p>
                    <button
                      onClick={() => handleRemoveFromCart(product.id)}
                      className="mt-3 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-all duration-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between">
              <Link
                to="/marketplace"
                className="px-4 py-2 bg-lightGreen text-black text-sm font-medium rounded-md hover:bg-green-600 transition-all duration-500"
              >
                Continue Shopping
              </Link>
              <button
                onClick={handleClearCart}
                className="px-4 py-2 bg-lightOrange text-white text-sm font-medium rounded-md hover:bg-darkOrange transition-all duration-500"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
