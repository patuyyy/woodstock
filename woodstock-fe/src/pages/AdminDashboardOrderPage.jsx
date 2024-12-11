import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';

const AdminDashboardOrderPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userInfo = JSON.parse(localStorage.getItem("userInfo")) || { id: null };
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo.id) {
            fetchOrders(userInfo.id);
        }
    }, [userInfo]);

    const fetchOrders = async (userid) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/order/`);
            const data = await response.json();

            if (data.success) {
                const sortedOrders = data.data.sort((a, b) => a.id - b.id); // Sort by ID
                setOrders(sortedOrders);
            } else {
                setError(data.message || 'Failed to fetch orders');
            }
        } catch (err) {
            setError('Error fetching orders');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div>
            <AdminNavbar />
            <div className="p-6 bg-white1 dark:bg-black2 min-h-screen">
                <h1 className="text-2xl font-semibold text-black dark:text-white">Orders List</h1>
                <div className="mt-6 text-black dark:text-white">
                    {orders.length === 0 ? (
                        <p>No orders found.</p>
                    ) : (
                        <ul className="space-y-4">
                            {orders.map((order) => (
                                <li
                                    key={order.id}
                                    className="border-b py-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-500 p-2 rounded-lg"
                                    onClick={() => navigate(`/AdminOrderDetail/${order.id}`)}
                                >
                                    <div className="flex justify-between">
                                        <h3 className="font-bold">Order ID: {order.id}</h3>
                                        <span>{new Date(order.datepurchased).toLocaleString()}</span>
                                    </div>
                                    <div className="mt-2 flex justify-between">
                                        <span>Tree Name: {order.treename}</span>
                                        <span>Status: {order.paymentstatus}</span>
                                    </div>
                                    <span>Account Name: {order.accountname}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardOrderPage;
