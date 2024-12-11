import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";

const AdminDashboard = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    categories: "",
    photo: "",
    availability: true, // Default to true
  });

  // State for success/error messages
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data (basic validation)
    if (!formData.name || !formData.price || !formData.description || !formData.categories || !formData.photo) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/market/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Tree added successfully!");
        setFormData({
          name: "",
          price: "",
          description: "",
          categories: "",
          photo: "",
          availability: true,
        });
      } else {
        setMessage(data.message || "Error adding tree.");
      }
    } catch (error) {
      setMessage("An error occurred while adding the tree.");
    }
  };

  return (
    <div className="min-h-screen bg-darkwood text-white">
      <AdminNavbar/>
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-title mb-4">Add New Tree</h1>

        {message && (
          <div
            className={`mb-4 p-4 rounded-md ${
              message.includes("success") ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-black dark:bg-black3 rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">Tree Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-lg mb-2">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-lg mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              rows="4"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="categories" className="block text-lg mb-2">Categories</label>
            <input
              type="text"
              id="categories"
              name="categories"
              value={formData.categories}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="photo" className="block text-lg mb-2">Tree Photo URL</label>
            <input
              type="url"
              id="photo"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="availability"
              name="availability"
              checked={formData.availability}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="availability" className="text-lg">Available</label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
          >
            Add Tree
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
