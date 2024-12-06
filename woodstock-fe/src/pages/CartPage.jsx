import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarB from "../components/NavbarB";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // Load the cart from localStorage and ensure each product has a qty property
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Combine same products by summing up their quantity (qty)
    const updatedCart = storedCart.reduce((acc, product) => {
      const existingProduct = acc.find((item) => item.id === product.id);
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
    const updatedCart = cart.filter((product) => product.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart); // Update the state
    setSelectedItems((prev) => prev.filter((id) => id !== productId)); // Remove from selected items
  };

  const handleClearCart = () => {
    // Clear the entire cart from localStorage and state
    localStorage.removeItem("cart");
    setCart([]);
    setSelectedItems([]);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);

    if (newSelectAll) {
      // Select all products
      setSelectedItems(cart.map((product) => product.id));
    } else {
      // Deselect all products
      setSelectedItems([]);
    }
  };

  const handleCheckboxChange = (productId) => {
    if (selectedItems.includes(productId)) {
      // Deselect the item
      setSelectedItems((prev) => prev.filter((id) => id !== productId));
    } else {
      // Select the item
      setSelectedItems((prev) => [...prev, productId]);
    }
  };

  const calculateTotal = () => {
    return cart
      .filter((product) => selectedItems.includes(product.id))
      .reduce((total, product) => total + product.price * product.qty, 0);
  };

  const handleCheckout = () => {
    const selectedProducts = cart.filter((product) =>
      selectedItems.includes(product.id)
    );
    console.log("Checked out products:", selectedProducts);

    const handleCheckout = () => {
      const selectedProducts = cart.filter((product) =>
        selectedItems.includes(product.id)
      );
    
      // Save checkout data to portfolio
      const currentPortfolio = JSON.parse(localStorage.getItem("portfolio")) || [];
      const newPortfolio = selectedProducts.map((product) => ({
        name: product.name,
        image: product.photo,
        lastUpdate: new Date().toISOString().split("T")[0], // Current date
      }));
    
      localStorage.setItem("portfolio", JSON.stringify([...currentPortfolio, ...newPortfolio]));
      alert("Checkout successful! Items added to portfolio.");
    };
    

    // Optional: You can implement further checkout logic here.
    alert("Checkout successful!");
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
            {/* Select All Checkbox */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-orange-500"
                checked={selectAll}
                onChange={handleSelectAll}
              />
              <span className="ml-2 text-black dark:text-white">Select All</span>
            </div>

            {/* Cart Items */}
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

                    {/* Product Checkbox */}
                    <div className="mt-3 flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-orange-500"
                        checked={selectedItems.includes(product.id)}
                        onChange={() => handleCheckboxChange(product.id)}
                      />
                      <span className="ml-2 text-black dark:text-white">Select</span>
                    </div>

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

            {/* Footer Controls */}
            <div className="mt-6 flex justify-between items-center">
              <Link
                to="/marketplace"
                className="px-4 py-2 bg-lightGreen text-black text-sm font-medium rounded-md hover:bg-green-600 transition-all duration-500"
              >
                Continue Shopping
              </Link>
              <div className="text-lg font-title text-black dark:text-white">
                Total: Rp {calculateTotal().toLocaleString("id-ID")},00
              </div>
              <button
                onClick={handleCheckout}
                className="px-4 py-2 bg-lightOrange text-white text-sm font-medium rounded-md hover:bg-darkOrange transition-all duration-500"
              >
                Checkout
              </button>
            </div>

            <div className="mt-4 text-right">
              <button
                onClick={handleClearCart}
                className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-all duration-500"
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
