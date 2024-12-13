import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';

const AdminOrderDetail = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(''); // For managing selected status
    const [updating, setUpdating] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchOrderDetail(id);
    }, [id]);

    const fetchOrderDetail = async (orderId) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/order/${orderId}`);
            const data = await response.json();

            if (data.success) {
                setOrder(data.data);
                setStatus(data.data.paymentstatus); // Initialize dropdown with current status
            } else {
                setError(data.message || 'Failed to fetch order details');
            }
        } catch (err) {
            setError('Error fetching order details');
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleConfirmEdit = async () => {
        setUpdating(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/order/edit/${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status }),
            });

            const data = await response.json();

            if (data.success) {
                alert('Order status updated successfully!');
                fetchOrderDetail(id); // Refresh order details after update
            } else {
                alert(data.message || 'Failed to update order status');
            }
        } catch (err) {
            alert('Error updating order status');
        } finally {
            setUpdating(false);
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
                <button
                    onClick={() => navigate(-1)}
                    className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    Back
                </button>
                <h1 className="text-2xl font-semibold text-black dark:text-white">Order Detail</h1>
                <div className="mt-6 text-black dark:text-white">
                    <p><strong>Order ID:</strong> {order.id}</p>
                    <p><strong>Account ID:</strong> {order.accountid}</p>
                    <p><strong>Account Name:</strong> {order.accountname}</p>
                    <p><strong>Tree ID:</strong> {order.treeid}</p>
                    <p><strong>Tree Name:</strong> {order.treename}</p>
                    <p><strong>Date Purchased:</strong> {new Date(order.datepurchased).toLocaleString()}</p>
                    <p>
                        <strong>Payment Proof: </strong>{' '}
                        {order.proof ? (
                            <a href={order.proof} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                View Payment Proof
                            </a>
                        ) : (
                            'No proof uploaded'
                        )}
                    </p>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status:</label>
                        <select
                            value={status}
                            onChange={handleStatusChange}
                            className="mt-2 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 dark:focus:ring-indigo-300"
                        >
                            <option value="PENDING">PENDING</option>
                            <option value="CANCELLED">CANCELLED</option>
                            <option value="ACCEPTED">ACCEPTED</option>
                        </select>
                    </div>
                    <button
                        onClick={handleConfirmEdit}
                        disabled={updating}
                        className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
                            updating ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        {updating ? 'Updating...' : 'Confirm Edit'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminOrderDetail;
