// src/components/DarkModeSwitch.jsx
import React from 'react';
import '../Styles.css';

const DarkModeSwitch = ({ onDarkModeToggle }) => {
  const handleDarkModeToggle = () => {
    // Toggle dark mode logic
    // For example, you can use local storage to persist the dark mode state
    const isDarkModeEnabled = !document.body.classList.contains('dark-mode');
    document.body.classList.toggle('dark-mode', isDarkModeEnabled);

    // Call the onDarkModeToggle function passed as a prop
    if (onDarkModeToggle) {
      onDarkModeToggle(isDarkModeEnabled);
    }
  };

  return (
    <div>
      {/* Your dark mode switch UI */}
      <label>
        Dark Mode:
        <input type="checkbox" onChange={handleDarkModeToggle} />
      </label>
    </div>
  );
};

export default DarkModeSwitch;
