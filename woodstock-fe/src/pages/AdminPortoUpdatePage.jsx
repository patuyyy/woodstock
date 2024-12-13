import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';

const AdminPortoUpdatePage = () => {
    const [progressPhoto, setProgressPhoto] = useState('');
    const [statusDescription, setStatusDescription] = useState('');
    const [error, setError] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // New loading state
    const [photo, setPhoto] = useState(null);

    const { orderid } = useParams();
    const navigate = useNavigate();

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading
        setError(null);

        let photoUrl = '';
        try {
            if (photo) {
                // If a photo is uploaded, process the upload
                photoUrl = await handlePhotoUpload(photo);
            }
            const data = {
                orderId: orderid,
                progressPhoto: photoUrl,
                statusDescription,
            };

            const response = await fetch(`${import.meta.env.VITE_API_URL}/porto/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                navigate(`/admin/portofolio/${orderid}`); // Redirect after successful update
            } else {
                setError(result.message || 'Failed to update order');
            }
        } catch (err) {
            setError('Error updating order');
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div className="min-h-screen bg-white1 dark:bg-black1 text-lightYellow duration-500 transition-all">
            <AdminNavbar />
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-semibold mb-6 text-lightOrange">Update Order Details</h1>

                <form onSubmit={handleSubmit} className="bg-white2 dark:bg-black4 p-6 rounded-lg shadow-md transition-all duration-500">
                    <div className="mb-4">
                        <label htmlFor="progressPhoto" className="block mb-2 text-black dark:text-white">Progress Photo</label>
                        <input
                            className="mb-4 w-full px-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 dark:bg-black4 dark:text-white font-title placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white ease-in-out transition-all duration-500"
                            type="file"
                            accept="image/*"
                            aria-label="Upload photo"
                            onChange={(e) => setPhoto(e.target.files[0])}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="statusDescription" className="block mb-2 text-black dark:text-white">Status Description</label>
                        <textarea
                            id="statusDescription"
                            value={statusDescription}
                            onChange={(e) => setStatusDescription(e.target.value)}
                            className="w-full px-4 py-2 border border-lightGreen rounded-lg bg-white text-black dark:text-white dark:bg-black3 duration-500 transition focus:ring-2 focus:ring-leafGreen"
                        ></textarea>
                    </div>

                    {error && <div className="text-lightOrange mb-4">{error}</div>}

                    {isLoading ? ( // Show loading state
                        <div className="text-center text-lightOrange">Loading...</div>
                    ) : (
                        <button
                            type="submit"
                            className="bg-lightOrange hover:bg-darkOrange text-lightYellow font-bold px-6 py-2 rounded-lg transition-colors"
                            disabled={isUploading}
                        >
                            Update
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AdminPortoUpdatePage;
