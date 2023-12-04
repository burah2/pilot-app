// src/components/Notification.jsx
import React, { useState } from 'react';
import "../Styles.css";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  const handleNotificationClick = (notification) => {
    // Handle notification click event, e.g., navigate to a specific page
    console.log(`Notification clicked: ${notification.text}`);
  };

  return (
    <div className="notification-center">
      <h2>Notification Center</h2>
      {notifications.length === 0 ? (
        <p>Check your Notification</p>
      ) : (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index} onClick={() => handleNotificationClick(notification)}>
              {notification.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;
