import React, { useState } from 'react';
import DonationList from '../components/DonationList';




const DonationForm = () => {

    return (
    <>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Support Our Alumni Association</h2>
            <p className="text-gray-800 text-lg">
                Our Alumni Association is dedicated to creating a vibrant network of graduates who support each other and
                contribute to meaningful causes. Your donation helps us fund scholarships, organize alumni events, and
                support community initiatives. Together, we can make a significant impact and continue to foster a
                strong, supportive alumni community. Thank you for your generosity!
            </p>
        </div>
        <br />
        <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Ongoing Donations</h2>
            <p className="text-gray-600">Here are the current donation campaigns that you can contribute to:</p>
        </div>
        <br />
        <DonationList/>
        
    </>
    );
};

export default DonationForm;
