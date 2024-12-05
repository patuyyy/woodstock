import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4003/market/${id}`);
        const data = await response.json();

        if (data.success) {
          setProduct(data.data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("An error occurred while fetching product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen bg-darkwood text-white flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-darkwood text-white flex items-center justify-center">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-darkwood text-white">
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white dark:bg-black3 rounded-lg shadow-md p-6">
          <img
            src={product.photo}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h1 className="text-3xl font-title mb-2">{product.name}</h1>
          <p className="text-lg mb-4">Price: ${product.price}</p>
          <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Category: {product.categories}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
