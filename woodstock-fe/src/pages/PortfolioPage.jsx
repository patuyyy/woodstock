import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const PortfolioPage = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    // Load portfolio data from localStorage (simulating backend data fetch)
    const storedPortfolio = JSON.parse(localStorage.getItem("portfolio")) || [];
    setPortfolio(storedPortfolio);
  }, []);

  return (
    <div>
        <Navbar/>
    <div className="min-h-screen bg-black3 p-6">
        
      {/* Navigation
      <nav className="mb-6">
        <Link to="/profile" className="font-title text-black font-bold text-lg">
          PROFILE &gt; PORTFOLIO
        </Link>
      </nav> */}

      <h1 className="text-6xl font-title text-black mb-6">MY TREES</h1>

      {portfolio.length === 0 ? (
        <p className="text-xl font-title text-black">You have no items in your portfolio.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="bg-[#8a704e] text-white rounded-lg shadow-md p-4"
            >
              <div
                className="h-40 w-full bg-center bg-cover rounded-md"
                style={{
                  backgroundImage: `url(${item.image || "placeholder-image.png"})`,
                }}
              ></div>
              <div className="mt-4">
                <h2 className="text-xl font-bold">STOCK {index + 1}: {item.name}</h2>
                <p>Last Growth Update: {item.lastUpdate}</p>
                <button className="mt-2 px-4 py-2 bg-[#b08653] rounded hover:bg-[#a5704d]">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination in Footer */}
      <footer className="mt-6 py-4 flex justify-center items-center space-x-2">
        <div className="pagination">
          <button className="mx-2 px-4 py-2 bg-lightOrange text-white rounded-md">1</button>
          <button className="mx-2 px-4 py-2 bg-lightOrange text-white rounded-md">2</button>
          <span className="mx-2 text-gray-500">...</span>
          <button className="mx-2 px-4 py-2 bg-lightOrange text-white rounded-md">10</button>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default PortfolioPage;
