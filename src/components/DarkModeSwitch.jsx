// src/components/DarkModeSwitch.jsx
import React, { useState } from 'react';

const DarkModeSwitch = ({ onDarkModeToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    onDarkModeToggle(newMode);
  };

  return (
    <div className="dark-mode-switch">
      <label>
        Dark Mode:
        <input type="checkbox" checked={isDarkMode} onChange={handleDarkModeToggle} />
      </label>
    </div>
  );
};

export default DarkModeSwitch;
