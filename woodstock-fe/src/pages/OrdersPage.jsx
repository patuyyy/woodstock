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
            const response = await fetch(`${import.meta.env.VITE_API_URL}/order/user/${userid}`);
            const data = await response.json();

            if (data.success) {
                const pendingOrders = data.data.filter(order => order.paymentstatus === 'PENDING');
                setOrders(pendingOrders);
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
        return (
            <div className="flex justify-center items-center h-screen bg-white2 dark:bg-black2">
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-lightOrange border-solid"></div>
                    <p className="mt-4 text-xl text-lightOrange font-bold">
                        Loading Products...
                    </p>
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div>
            <NavbarB />
            <div className="p-6 bg-white1 dark:bg-black2 min-h-screen pt-24">
                <h1 className="text-2xl font-semibold text-black dark:text-white">Pending Orders</h1>
                <div className="mt-6 text-black dark:text-white">
                    {orders.length === 0 ? (
                        <p>No pending orders found.</p>
                    ) : (
                        <ul className="space-y-4">
                            {orders.map((order) => (
                                <li
                                    key={order.id}
                                    className="border-b py-4 px-2 rounded-lg shadow-lg bg-white dark:bg-black3"
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
