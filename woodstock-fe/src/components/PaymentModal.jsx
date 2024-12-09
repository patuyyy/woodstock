import React, { useState } from 'react';
import BNIModal from './BNIModal';
import BSIModal from './BSIModal';
import GopayModal from './GopayModal';

const PaymentModal = ({ isOpen, onClose, onPaymentSelect }) => {
  const [selectedPayment, setSelectedPayment] = useState(null); // Track selected payment method

  const paymentMethods = [
    {
      name: 'BNI Transfer',
      photo: 'https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/2560px-BNI_logo.svg.png',
    },
    {
      name: 'Gopay',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VO1mf2pOVxGL97L5S113nnkna3zui6PEbQ&s',
    },
    {
      name: 'BSI Transfer',
      photo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDhebSTuD3XQxAOqX1JqDroemBYQ1sq3wBuPmYLiBYUOdakGiYO01kjswPoYir6DpeVwEtL50fUL51xravpFJRO1FGoXqOD1H004tzAcZdXCd6KkcIczLIO_M1is6ogK7gX9DQghtT2vYAUfxiZcIABJ6cE_8bLUCTjSGWBvb3RRGYSPf4nekNOQ/w640-h182/BSI%20(Bank%20Syariah%20Indonesia)%20Logo.png',
    },
  ];

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method); // Set the selected payment method
    onPaymentSelect && onPaymentSelect(method); // Trigger parent callback if provided
  };

  const handleModalClose = () => {
    setSelectedPayment(null); // Reset the selected payment
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Render the modal based on the selected payment method */}
      {selectedPayment ? (
        <>
          {selectedPayment.name === 'BNI Transfer' && (
            <BNIModal
              isOpen={!!selectedPayment}
              paymentMethod={selectedPayment}
              onClose={handleModalClose}
            />
          )}
          {selectedPayment.name === 'BSI Transfer' && (
            <BSIModal
              isOpen={!!selectedPayment}
              paymentMethod={selectedPayment}
              onClose={handleModalClose}
            />
          )}
          {selectedPayment.name === 'Gopay' && (
            <GopayModal
              isOpen={!!selectedPayment}
              paymentMethod={selectedPayment}
              onClose={handleModalClose}
            />
          )}
        </>
      ) : (
        <div className="bg-white dark:bg-black3 p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-xl font-title text-black dark:text-white mb-4">Choose Payment Method</h2>
          <ul>
            {paymentMethods.map((method, index) => (
              <li key={index} className="mb-3">
                <button
                  onClick={() => handlePaymentSelect(method)}
                  className="flex items-center w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                >
                  <img
                    src={method.photo}
                    alt={method.name}
                    className="w-20 h-15 p-2 rounded-lg bg-white mr-5"
                  />
                  <span>{method.name}</span>
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={onClose}
            className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentModal;
