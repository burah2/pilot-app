// src/components/Parking.jsx
import React, { useEffect } from 'react';
import "../Styles.css";
import { Link } from 'react-router-dom';

const Parking = () => {
  useEffect(() => {
    // Initialize Google Maps and add parking markers
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 14,
      });

      const parkingMarker1 = new window.google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map,
        title: 'Parking Lot 1',
      });

      const parkingMarker2 = new window.google.maps.Marker({
        position: { lat: 37.7695, lng: -122.4068 },
        map,
        title: 'Parking Lot 2',
      });
    };

    // Load the Google Maps API script
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=211a31de46e9e1a2d9c08eb0a97e3aaf805d1379 ';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove the Google Maps API script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <ul>
  
        <li>
          <a href="https://www.google.com/maps/@-1.3171533,36.9003409,15z?entry=ttu" target="_blank" rel="noopener noreferrer">Parking</a>
        </li>
      </ul>
      <div id="map" style={{ height: '10px' }}></div>
    </div>
  );
};

export default Parking;