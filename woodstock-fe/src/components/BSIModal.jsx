import React, { useState, useEffect } from 'react';

const BSIModal = ({ isOpen, onClose }) => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const taxRate = 0.1;

    // Calculate totals
    const subtotal = cart.reduce((sum, product) => sum + product.price * product.qty, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    // Retrieve user info from local storage
    const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {
        username: "Guest",
    };

    useEffect(() => {
        // Fetch cart data from local storage and group items by ID
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

    const createOrder = async (accountId, treeId) => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:4003/order/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ accountId, treeId }),
            });

            if (response.ok) {
                const result = await response.json();
                localStorage.removeItem('cart');
                window.location.reload();
                onClose();  // Close the modal after success
            } else {
                console.log("error")
            }
        } catch (error) {
            console.error('Error creating order:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleOrderCreation = () => {
        cart.forEach(product => {
            createOrder(userInfo.id, product.id); // Send each product in the cart
        });
    };

    if (!isOpen) return null; // Don't render if modal is closed

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-black3 p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-title text-black dark:text-white mb-4">BSI Invoice</h2>
                <div className="mb-4">
                    <h3 className="text-lg text-black dark:text-white mb-2">BSI Account Number:</h3>
                    <p className="text-l text-black dark:text-white">7185534779 (Raihan M. Ihsan)</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-title text-black dark:text-white mb-2">Product Totals:</h3>
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
                <div className="mt-6">
                    <button
                        onClick={handleOrderCreation}
                        disabled={loading}
                        className={`w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Processing...' : 'I Have Paid!'}
                    </button>
                    <button
                        onClick={onClose}
                        className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BSIModal;
