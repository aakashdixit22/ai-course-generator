import React, { useState } from "react";

const PopupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold text-gray-800 text-center">Payment Method</h2>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium">Choose Payment Option:</label>
          <select className="w-full p-2 border border-gray-300 rounded-md mt-2">
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>UPI</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-medium">Card/UPI Details</label>
          <input
            type="text"
            placeholder="Enter details"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
          />
        </div>

        <div className="mt-6 flex justify-between">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;




