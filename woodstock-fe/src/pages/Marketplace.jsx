import React from 'react';
import NavbarB from '../components/NavbarB';

const Marketplace = () => {
  return (
    <div>
      <NavbarB/>
      <div className="flex flex-col min-h-screen bg-darkwood text-white1">
        <header className="bg-pastelGreen p-10">
          <h1 className="text-4xl font-title text-center text-darkwood mb-2">
            Welcome to <span className="text-lightGreen">Wood</span>
            <span className="text-darkOrange">Stock</span>
          </h1>
          <p className="text-xl font-title text-center text-lightGreen">How can we help you today?</p>
        </header>

        <div className="flex justify-between bg-lightYellow text-darkwood font-semibold text-lg p-2">
          <span>Product Growth</span>
          <span>Product Cart</span>
        </div>

        <div className="flex flex-1">
          <aside className="bg-brokenWhite w-1/5 p-4">
            <h2 className="font-bold text-leafGreen text-xl mb-4">Categories</h2>
          </aside>

          <main className="flex-grow bg-pastelGreen2 p-6">
            <div className="grid grid-cols-3 gap-6">
              {/* Placeholder untuk produk */}
              <div className="bg-lightGreen h-32 rounded-lg flex flex-col items-center justify-center">
                <div className="bg-black w-20 h-16 mb-2 rounded"></div>
                <p className="text-darkwood font-semibold">Product 1</p>
              </div>
              <div className="bg-lightGreen h-32 rounded-lg flex flex-col items-center justify-center">
                <div className="bg-black w-20 h-16 mb-2 rounded"></div>
                <p className="text-darkwood font-semibold">Product 2</p>
              </div>
              <div className="bg-lightGreen h-32 rounded-lg flex flex-col items-center justify-center">
                <div className="bg-black w-20 h-16 mb-2 rounded"></div>
                <p className="text-darkwood font-semibold">Product 3</p>
              </div>
              {/* Tambahkan produk lainnya jika diperlukan */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
