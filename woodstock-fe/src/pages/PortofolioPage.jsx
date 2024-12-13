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
            <div className="bg-white1 dark:bg-black1 min-h-screen text-white p-8 pt-28 transition-all duration-500">
                <h1 className="text-3xl text-black dark:text-white font-bold mb-6">MY TREES PORTOFOLIO</h1>
                <div className="grid grid-cols-1 gap-6">
                    {trees.map((tree, index) => (
                        <Link to={`/portofolio/${tree.id}`}
                            key={tree.id}
                            className="bg-white2 shadow-lg hover:shadow-2xl dark:bg-black2 rounded-lg overflow-hidden flex hover:dark:bg-black1 transition-all duration-300 items-center"
                        >
                            <img
                                src={tree.treephoto}
                                alt={tree.treename}
                                className="w-40 h-40 object-cover"
                            />
                            <div className="p-4 flex-1">
                                <h2 className="text-lg font-bold text-black dark:text-white">
                                    Share {index + 1}: {tree.treename}
                                </h2>
                                <p className="text-sm text-gray-400 mb-4">
                                    Date Purchased: {new Date(tree.datepurchased).toLocaleDateString()}
                                </p>
                                <Link to={`/portofolio/${tree.id}`} className="mt-4 bg-oren bg-lightOrange hover:bg-darkOrange transition-all duration-500 text-white px-4 py-2 rounded">
                                    Details
                                </Link>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
