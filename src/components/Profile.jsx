// src/components/Profile.jsx
import React, { useState } from 'react';
import "../Styles.css";

const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const createProfile = () => {
    // Add logic to create user profile (you can replace this with actual logic)
    console.log('User Profile Created:', { username, email, password });
    // You may want to send the user's profile data to your server here
  };

  return (
    <div className="profile-form-container">
      <h2>Create Your Profile</h2>
      <form onSubmit={createProfile}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default Profile;
