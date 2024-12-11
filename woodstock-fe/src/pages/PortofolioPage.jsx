import React, { useEffect, useState } from 'react';
import NavbarB from '../components/NavbarB';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
    const [trees, setTrees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrees = async () => {
            try {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                const accountId = userInfo?.id;

                if (!accountId) {
                    console.error("No accountId found in localStorage.");
                    setLoading(false);
                    return;
                }

                const response = await fetch(`${import.meta.env.VITE_API_URL}/order/acc/${accountId}`);
                const data = await response.json();
                setTrees(data.data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch trees:", error);
                setLoading(false);
            }
        };

        fetchTrees();
    }, []);

    if (loading) {
        return <div className="text-center text-white">Loading...</div>;
    }

    if (!trees.length) {
        return (
            <div className="text-center text-white">
                <h1 className="text-3xl font-bold">MY TREES</h1>
                <p>No trees found.</p>
            </div>
        );
    }

    return (
        <div>
            <NavbarB />
            <div className="bg-gray-900 min-h-screen text-white p-8 pt-28">
                <h1 className="text-3xl font-bold mb-6">MY TREES PORTOFOLIO</h1>
                <div className="grid grid-cols-1 gap-6">
                    {trees.map((tree, index) => (
                        <div
                            key={tree.id}
                            className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex items-center"
                        >
                            {/* Left: Tree photo */}
                            <img
                                src={tree.treephoto}
                                alt={tree.treename}
                                className="w-40 h-40 object-cover"
                            />
                            {/* Right: Tree information */}
                            <div className="p-4 flex-1">
                                <h2 className="text-lg font-bold">
                                    Share {index + 1}: {tree.treename}
                                </h2>
                                <p className="text-sm text-gray-400">
                                    Date Purchased: {new Date(tree.datepurchased).toLocaleDateString()}
                                </p>
                                <Link to={`/portofolio/${tree.id}`} className="mt-4 bg-oren hover:bg-biru text-white px-4 py-2 rounded">
                                    Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
