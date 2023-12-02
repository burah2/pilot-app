// src/components/Parking.jsx
import React, { useEffect } from 'react';

const Parking = () => {
  useEffect(() => {
    // Initialize Google Maps and add parking markers
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // Set the initial map center
        zoom: 14, // Set the initial zoom level
      });

      // Add parking markers to the map
      const parkingMarker1 = new window.google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 }, // Set the marker position
        map, // Set the map
        title: 'Parking Lot 1', // Set the marker title
      });

      const parkingMarker2 = new window.google.maps.Marker({
        position: { lat: 37.7695, lng: -122.4068 },
        map,
        title: 'Parking Lot 2',
      });

      // Add more parking markers as needed
    };

    // Load the Google Maps API script
    const script = document.createElement('script');
    script.src ='https://www.google.com/maps/@-1.3171533,36.9003409,15z?entry=ttu';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove the Google Maps API script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ height: '400px' }}></div>;
};

export default Parking;
