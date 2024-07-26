import React from 'react';
import './Destinations.css';

const destinations = [
  { name: 'New York', image: '/images/new-york.jpg' },
  { name: 'Paris', image: '/images/paris.jpg' },
  { name: 'Tokyo', image: '/images/tokyo.jpg' },
  { name: 'Sydney', image: '/images/sydney.jpg' },
  { name: 'Kyiv', image: '/images/kyiv.jpg' },
  { name: 'Odessa', image: '/images/odessa.jpg' }
];

const Destinations = () => {
  return (
    <section>
      <h2>Popular Destinations</h2>
      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
