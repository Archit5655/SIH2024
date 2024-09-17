// src/components/DonationCard.js

import React from 'react';

const DonationCard = ({ title, description, goal, raised, image, onDonateClick }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <img className="w-full h-40 object-cover rounded-t-lg mb-4" src={image} alt={title} />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between text-gray-600 mb-4">
            <p>Goal: <span className="font-semibold">{goal}</span></p>
            <p>Raised: <span className="font-semibold">{raised}</span></p>
        </div>
        <button
            onClick={() => onDonateClick(title)}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
            Donate
        </button>
    </div>
);

export default DonationCard;
