import React, { useState } from 'react';
import { events } from '../../dummy-data/data';
const Event = () => {

  const [searchTerm, setSearchTerm] = useState('');

 
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

 
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm) ||
    event.date.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="bg-gray-50 min-h-screen">
    
      <header className="bg-[#64a0ad] text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Alumni Association Events</h1>
          <p className="mt-4 text-lg">Stay updated on all upcoming alumni events and take a look at some past events we've celebrated.</p>
        </div>
      </header>

      
      <div className="container mx-auto px-4 py-6">
        <input
          type="text"
          placeholder="Search events by title or date..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
      </div>

      
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <div key={event.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.date} | {event.time}</p>
                  <p className="text-gray-600 mb-2">{event.location}</p>
                  <p className="text-gray-800 mb-4">{event.description}</p>
                  <button className="bg-[#64a0ad] text-white px-4 py-2 rounded hover:bg-[#64ada7 ]">More Info</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No events found matching your search.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Event;
