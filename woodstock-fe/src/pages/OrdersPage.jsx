import React, { useState, useEffect } from 'react';
import NavbarB from '../components/NavbarB';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userInfo = JSON.parse(localStorage.getItem("userInfo")) || { id: null };

    useEffect(() => {
        if (userInfo.id) {
            fetchOrders(userInfo.id);
        }
    }, [userInfo]);

    const fetchOrders = async (userid) => {
        try {
            const response = await fetch(`http://localhost:4003/order/user/${userid}`);
            const data = await response.json();

            if (data.success) {
                setOrders(data.data);
            } else {
                setError(data.message || 'Failed to fetch orders');
            }
        } catch (err) {
            setError('Error fetching orders');
        } finally {
            setLoading(false);
        }
    };

    const getStatusBgColor = (status) => {
        switch (status) {
            case 'ACCEPTED':
                return 'text-green-500';
            case 'PENDING':
                return 'text-yellow-500';
            case 'CANCELLED':
                return 'text-red-500';
            default:
                return 'bg-gray-200';
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
            <NavbarB />
            <div className="p-6 bg-white1 dark:bg-black2 min-h-screen">
                <h1 className="text-2xl font-semibold text-black dark:text-white">My Orders</h1>
                <div className="mt-6 text-black dark:text-white">
                    {orders.length === 0 ? (
                        <p>No orders found.</p>
                    ) : (
                        <ul className="space-y-4">
                            {orders.map((order) => (
                                <li
                                    key={order.id}
                                    className={`border-b py-4 px-2 rounded-lg shadow-lg bg-white`}
                                >
                                    <div className="flex justify-between">
                                        <h3 className="font-bold">Order ID: {order.id}</h3>
                                        <span>{new Date(order.datepurchased).toLocaleString()}</span>
                                    </div>
                                    <div className="mt-2 flex justify-between">
                                        <span>Tree Name: {order.treename}</span>
                                        <span className={`${getStatusBgColor(order.paymentstatus)} font-extrabold`}>Status: {order.paymentstatus}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrdersPage;
