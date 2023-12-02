// src/components/LanguageSelector.jsx
import React, { useState } from 'react';

const LanguageSelector = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);
    onLanguageChange(newLanguage);
  };

  return (
    <div id="languageSelector" className="language-selector">
      <label htmlFor="languageDropdown">Select Language:</label>
      <select id="languageDropdown" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        {/* Add more language options as needed */}
      </select>
    </div>
  );
};

export default LanguageSelector;
