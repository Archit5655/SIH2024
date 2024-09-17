import React, { useState } from 'react';
import DonationCard from './DonationCard';
import DonationForm from './DonationForm'

const donations = [
    { id: 1, title: 'Scholarship Fund', description: 'Help support students with scholarships to achieve their educational goals.', goal: '$5,000', raised: '$1,200', image: 'https://via.placeholder.com/400x200?text=Scholarship+Fund' },
    { id: 2, title: 'Annual Alumni Event', description: 'Contribute to organizing our annual alumni gathering for networking and development.', goal: '$3,000', raised: '$800', image: 'https://via.placeholder.com/400x200?text=Annual+Event' },
    { id: 3, title: 'Community Outreach Program', description: 'Support our initiatives to give back to the community through various outreach programs.', goal: '$2,000', raised: '$500', image: 'https://via.placeholder.com/400x200?text=Community+Outreach' },
    {id: 4, title: 'Community Outreach Program', description: 'Support our initiatives to give back to the community through various outreach programs.', goal: '$2,000', raised: '$500', image: 'https://via.placeholder.com/400x200?text=Community+Outreach' }
];

const DonationList = () => {
    const [selectedDonation, setSelectedDonation] = useState(null);

    const handleDonateClick = (title) => {
        setSelectedDonation(title);
    };

    const handleCloseForm = () => {
        setSelectedDonation(null);
    };

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {donations.map(donation => (
                    <DonationCard
                        key={donation.id}
                        title={donation.title}
                        description={donation.description}
                        goal={donation.goal}
                        raised={donation.raised}
                        image={donation.image}
                        onDonateClick={handleDonateClick}
                    />
                ))}
            </div>
            {selectedDonation && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <button
                            onClick={handleCloseForm}
                            className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-2xl font-semibold mb-4">Donate to {selectedDonation}</h2>
                        <DonationForm onClose={handleCloseForm} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DonationList;