import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarB from '../components/NavbarB';
import PaymentModal from '../components/PaymentModal'; // Import the modal

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const taxRate = 0.1;
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {
    username: "Guest",
  };
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = storedCart.reduce((acc, product) => {
      const existingProduct = acc.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.qty += 1;
      } else {
        product.qty = 1;
        acc.push(product);
      }
      return acc;
    }, []);
    setCart(updatedCart);
  }, []);

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.location.reload();
  };

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
    window.location.reload();
  };

  const handlePaymentSelect = (method) => {
    
  };

  const subtotal = cart.reduce((sum, product) => sum + product.price * product.qty, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div>
      {userInfo.isadmin ? <AdminNavbar /> : <NavbarB />}
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
                      Total: Rp {(product.qty * product.price).toFixed(2)}
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

            <div className="mt-8 bg-white dark:bg-black3 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-title text-black dark:text-white mb-4">Invoice</h2>
              <div className="mb-4">
                <h3 className="text-xl font-title text-black dark:text-white mb-2">Product Totals:</h3>
                {cart.map(product => (
                  <div key={product.id} className="flex justify-between text-gray-600 dark:text-gray-300 text-lg">
                    <span>{product.name} x {product.qty}:</span>
                    <span>Rp {(product.qty * product.price).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300">
                <p className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>Rp {subtotal.toFixed(2)}</span>
                </p>
                <p className="flex justify-between">
                  <span>Tax (10%):</span>
                  <span>Rp {tax.toFixed(2)}</span>
                </p>
                <p className="flex justify-between font-bold text-black dark:text-white">
                  <span>Total:</span>
                  <span>Rp {total.toFixed(2)}</span>
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <Link
                to="/marketplace"
                className="px-4 py-2 bg-lightGreen text-black text-sm font-medium rounded-md hover:bg-green-600 transition-all duration-500"
              >
                Continue Shopping
              </Link>
              <button
                onClick={() => setPaymentModalOpen(true)} // Open the payment modal
                className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-all duration-500"
              >
                Pay Now
              </button>
              <button
                onClick={handleClearCart}
                className="px-4 py-2 bg-lightOrange text-white text-sm font-medium rounded-md hover:bg-darkOrange transition-all duration-500"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}

        {/* Payment Modal */}
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setPaymentModalOpen(false)}
          onPaymentSelect={handlePaymentSelect}
        />
      </div>
    </div>
  );
};

export default CartPage;
