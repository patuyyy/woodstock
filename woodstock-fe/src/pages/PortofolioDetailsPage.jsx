import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavbarB from '../components/NavbarB';

const PortofolioDetailsPage = () => {
    const { orderid } = useParams();
    const [orderDetails, setOrderDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [activeTab, setActiveTab] = useState('details'); // Tab state for "details" and "rating"

    const yes = "Available";
    const no = "Not Available";

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/porto/order/${orderid}`);
                const data = await response.json();

                if (data.success) {
                    setOrderDetails(data.data);
                } else {
                    setError(data.message);
                }
            } catch (err) {
                setError('An error occurred while fetching order details.');
            } finally {
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [orderid]);

    const toggleImage = () => {
        setExpanded(!expanded);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white1 dark:bg-darkwood text-white flex items-center justify-center">
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-white1 dark:bg-darkwood text-white flex items-center justify-center">
                {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white1 dark:bg-black1 text-white transition-all duration-500">
            <NavbarB />
            <div className="max-w-6xl mx-auto py-8 px-4">
                <header className="text-center text-black dark:text-white text-3xl font-bold mb-6 transition-all duration-500 pt-20">
                    PORTFOLIO UPDATE DETAILS
                </header>
                <div className="flex flex-col gap-6">
                    {orderDetails.length > 0 ? (
                        orderDetails.map(order => (
                            <div key={order.id} className="flex flex-col gap-6">
                                {/* Image Section */}
                                <div>
                                    <img
                                        src={order.progressphoto}
                                        alt={order.treename}
                                        className={`w-full rounded-lg transition-all duration-500 cursor-pointer ${expanded ? 'h-full' : 'h-64'
                                            }`}
                                        onClick={toggleImage}
                                        style={{ objectFit: 'cover', transition: 'all 0.3s ease' }}
                                    />

                                    {!expanded && (
                                        <p className="text-center text-black dark:text-gray-400 mt-2 transition-all duration-500">
                                            Click to expand
                                        </p>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div>
                                    <h1 className="text-4xl text-darkGreen font-bold mb-2 dark:text-lightYellow transition-all duration-500">
                                        {order.treename}
                                    </h1>
                                    <p className="text-2xl font-bold text-black dark:text-green-400 my-4 transition-all duration-500">
                                        Date Updated: {new Date(order.dateupdated).toLocaleDateString()}
                                    </p>

                                    {/* Tab Navigation */}
                                    <div className="flex border-b border-black dark:border-gray-600 mb-4 transition-all duration-500">
                                        <button
                                            className={`px-4 py-2 ${activeTab === 'details'
                                                    ? 'text-black dark:text-lightGreen border-b-2 border-black dark:border-lightGreen transition-all duration-500'
                                                    : 'text-gray-400'
                                                }`}
                                            onClick={() => setActiveTab('details')}
                                        >
                                            Details
                                        </button>
                                        <button
                                            className={`px-4 py-2 ${activeTab === 'rating'
                                                    ? 'text-black dark:text-lightGreen border-b-2 border-black dark:border-lightGreen transition-all duration-500'
                                                    : 'text-gray-400'
                                                }`}
                                            onClick={() => setActiveTab('rating')}
                                        >
                                            Status
                                        </button>
                                    </div>

                                    {/* Content Based on Active Tab */}
                                    {activeTab === 'details' ? (
                                        <div className="text-black dark:text-gray-300 space-y-2 transition-all duration-500">
                                            <p>Tree Name: {order.treename}</p>
                                            <p>Ownership: {order.accountname}</p>
                                        </div>
                                    ) : (
                                        <div className="text-black dark:text-gray-300 space-y-2 transition-all duration-500">
                                            <p>Status: {order.statusdescription}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='justify-center items-center text-center'>
                            <p className='justify-center items-center text-center mb-9'>No portofolio Updates yet</p>
                            <Link to='/portofolio' className='bg-lightOrange rounded-lg px-4 py-2'>Back</Link>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
};

export default PortofolioDetailsPage;
