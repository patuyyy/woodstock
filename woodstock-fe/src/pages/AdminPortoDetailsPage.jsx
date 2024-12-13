import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';

const AdminPortoDetailsPage = () => {
    const [orderDetails, setOrderDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { orderid } = useParams(); // Get orderid from URL params
    const navigate = useNavigate();

    useEffect(() => {
        fetchOrderDetails(orderid);
    }, [orderid]);

    const fetchOrderDetails = async (orderid) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/porto/order/${orderid}`);
            const data = await response.json();

            if (data.success) {
                if (data.data.length > 0) {
                    setOrderDetails(data.data);
                } else {
                    setOrderDetails([]); // No Portofolio found
                }
            } else {
                setError(data.message || 'Failed to fetch order details');
            }
        } catch (err) {
            setError('Error fetching order details');
        } finally {
            setLoading(false);
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
            <AdminNavbar />
            <div className="p-6 bg-white1 dark:bg-black2 min-h-screen">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold text-black dark:text-white">Order Portofolio Details</h1>
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                        onClick={() => navigate(`/admin/portofolio/update/${orderid}`)}
                    >
                        Create Update
                    </button>
                </div>
                <div className="mt-6 text-black dark:text-white">
                    {orderDetails.length > 0 ? (
                        <div className="space-y-4">
                            {orderDetails.map((detail) => (
                                <div key={detail.id}>
                                    <h3 className="font-bold">Order ID: {detail.id}</h3>
                                    <p>Account Name: {detail.accountname}</p>
                                    <p>Tree Name: {detail.treename}</p>
                                    <p>Status: {detail.statusdescription}</p>
                                    <p>Date Updated: {new Date(detail.dateupdated).toLocaleString()}</p>
                                    <img src={detail.progressphoto} alt="Progress Photo" className="w-32 h-32 object-cover" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No details available for this order.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminPortoDetailsPage;
