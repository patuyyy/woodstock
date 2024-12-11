import React, { useState, useEffect } from 'react';

const BNIModal = ({ isOpen, onClose }) => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [photo, setPhoto] = useState(null);
    const taxRate = 0.1;

    // Calculate totals
    const subtotal = cart.reduce((sum, product) => sum + product.price * product.qty, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    // Retrieve user info from local storage
    const userInfo = JSON.parse(localStorage.getItem("userInfo")) || { username: "Guest" };

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const groupedCart = storedCart.reduce((acc, product) => {
            const existingProduct = acc.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.qty += 1;
            } else {
                acc.push({ ...product, qty: 1 });
            }
            return acc;
        }, []);
        setCart(groupedCart);
    }, []);

    const handlePhotoUpload = async (file) => {
        setIsUploading(true);
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/upload/upload`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Failed to upload photo');

            const photoUrl = await response.json();
            return photoUrl;
        } catch (error) {
            console.error('Photo upload failed:', error);
            throw error;
        } finally {
            setIsUploading(false);
        }
    };

    const createOrder = async (accountId, treeId, proof) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/order/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ accountId, treeId, proof }),
            });

            if (!response.ok) throw new Error('Order creation failed');
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    const handleOrderCreation = async () => {
        setLoading(true);
        try {
            let photoUrl = null;
            if (photo) {
                photoUrl = await handlePhotoUpload(photo);
            }

            for (const product of cart) {
                for (let i = 0; i < product.qty; i++) {
                    await createOrder(userInfo.id, product.id, photoUrl);
                }
            }

            localStorage.removeItem('cart');
            window.location.reload();
            onClose();
        } catch (error) {
            console.error('Order process failed:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-black3 p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-title text-black dark:text-white mb-4">BNI Invoice</h2>
                <div className="mb-4">
                    <h3 className="text-lg text-black dark:text-white mb-2">BNI Account Number:</h3>
                    <p className="text-l text-black dark:text-white">162400296 (Ryan)</p>
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
                    <input
                        className="mb-4 w-full px-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 dark:bg-black4 dark:text-white font-title placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white ease-in-out transition-all duration-500"
                        type="file"
                        accept="image/*"
                        aria-label="Upload photo"
                        onChange={(e) => setPhoto(e.target.files[0])}
                    />
                    <button
                        onClick={handleOrderCreation}
                        disabled={!photo || loading || isUploading}
                        className={`w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all ${!photo || loading || isUploading ? 'cursor-not-allowed opacity-50' : ''
                            }`}
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

export default BNIModal;
