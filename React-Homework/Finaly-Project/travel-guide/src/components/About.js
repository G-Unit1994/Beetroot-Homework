import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './About.css';

const About = () => {
  const position = [46.4825, 30.7233]; // Координати Одеси

  return (
    <section>
      <h2>About Us</h2>
      <p>We provide information about the best travel destinations around the world.</p>
      <div className="map-container">
        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Welcome to Odessa! <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default About;
