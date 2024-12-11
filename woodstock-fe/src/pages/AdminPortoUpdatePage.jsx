import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';

const AdminPortoUpdatePage = () => {
    const [progressPhoto, setProgressPhoto] = useState('');
    const [statusDescription, setStatusDescription] = useState('');
    const [error, setError] = useState(null);

    const { orderid } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            orderId: orderid,
            progressPhoto,
            statusDescription
        };

        try {
            const response = await fetch('http://localhost:4003/porto/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                navigate(`/admin/portofolio/${orderid}`); // Redirect after successful update
            } else {
                setError(result.message || 'Failed to update order');
            }
        } catch (err) {
            setError('Error updating order');
        }
    };

    return (
        <div>
            <AdminNavbar/>
            <h1 className="text-2xl font-semibold">Update Order Details</h1>

            <form onSubmit={handleSubmit} className="mt-6">
                <div className="mb-4">
                    <label htmlFor="progressPhoto" className="block text-gray-700">Progress Photo</label>
                    <input
                        type="text"
                        id="progressPhoto"
                        value={progressPhoto}
                        onChange={(e) => setProgressPhoto(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="statusDescription" className="block text-gray-700">Status Description</label>
                    <textarea
                        id="statusDescription"
                        value={statusDescription}
                        onChange={(e) => setStatusDescription(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                    ></textarea>
                </div>

                {error && <div className="text-red-500 mb-4">{error}</div>}

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Update</button>
            </form>
        </div>
    );
};

export default AdminPortoUpdatePage;
