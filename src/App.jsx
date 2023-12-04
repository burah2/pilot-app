import React, { useState } from 'react';
import './Styles.css';  // Corrected import path
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
import Weather from './components/Weather';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleAIAction = () => {
    console.log('AI action performed');
  };

  const handleLogin = () => {
    console.log('User logged in');
  };

  const handleLogout = () => {
    console.log('User logged out');
  };

  const handleDarkModeToggle = () => {
    // Toggle dark mode state
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleSignIn = (googleUser) => {
    // Your logic for handling successful sign-in
    console.log('User signed in:', googleUser);
  };

  const handleLanguageChange = (newLanguage) => {
    setSelectedLanguage(newLanguage);
  };


  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>

        <AI onAIAction={handleAIAction} />

        <Authentication onLogin={handleLogin} onLogout={handleLogout} />

        <DarkModeSwitch onDarkModeToggle={handleDarkModeToggle} />

        <GoogleSignIn onSignIn={handleSignIn} />

        <LanguageSelector onLanguageChange={handleLanguageChange} />

        <Profile />
        <Notification />
        <Parking />
        <Points />
        <VoiceAssistant/>
        <Weather/>

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
