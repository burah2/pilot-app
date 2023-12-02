// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AI from './components/AI';
import Authentication from './components/Authentication';
import DropdownMenu from './components/DropdownMenu';
import GoogleSignIn from './components/GoogleSignIn';
import LanguageSelector from './components/LanguageSelector';
import DarkModeSwitch from './components/DarkModeSwitch';
import Notification from './components/Notification';
import Parking from './components/Parking';
import Points from './components/Points';
import Profile from './components/Profile';
import VoiceAssistant from './components/VoiceAssistant';
import Weather from './components/Weather'; // Import the new component

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLanguageChange = (newLanguage) => {
    setSelectedLanguage(newLanguage);
  };

  const handleDarkModeToggle = (newMode) => {
    setIsDarkMode(newMode);
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
        {/* Language Selector */}
        <LanguageSelector onLanguageChange={handleLanguageChange} />

        {/* Dark Mode Switch */}
        <DarkModeSwitch onDarkModeToggle={handleDarkModeToggle} />

        {/* Notification Center */}
        <Notification />

        <Routes>
          <Route path="/ai" element={<AI />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/dropdown" element={<DropdownMenu />} />
          <Route path="/google-sign-in" element={<GoogleSignIn />} />
          <Route path="/parking" element={<Parking />} />
          <Route path="/points" element={<Points />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/voice-assistant" element={<VoiceAssistant />} />
          <Route path="/weather" element={<Weather />} /> {/* Add this line */}
          {/* Add more routes for other features */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
