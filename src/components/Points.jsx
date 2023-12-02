// src/components/Points.jsx
import React, { useState } from 'react';

const Points = () => {
  const [earnedPoints, setEarnedPoints] = useState(0);

  const earnPoints = () => {
    // Add logic to earn points (you can replace this with actual logic)
    const pointsEarned = Math.floor(Math.random() * 100) + 1; // Simulating points earned
    setEarnedPoints((prevPoints) => prevPoints + pointsEarned);
  };

  const getPoints = () => {
    // Display the earned points
    alert(`You have earned ${earnedPoints} points!`);
  };

  return (
    <div>
      <h1>Points Earned</h1>
      <button onClick={earnPoints}>Earn Points</button>
      <button onClick={getPoints}>Get Points</button>
      <div id="pointsDisplay">{earnedPoints} Points Earned</div>
    </div>
  );
};


export default Points;
