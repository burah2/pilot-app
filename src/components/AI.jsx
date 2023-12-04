// AI.jsx

import React, { useState, useRef } from 'react';
import "../Styles.css";

const AI = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const userInputRef = useRef(null);

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (userMessage.trim() === '') return;

    // Add user's message to the chat
    setChatMessages((prevMessages) => [...prevMessages, { type: 'user', text: userMessage }]);
    setUserMessage('');

    // Here, you can send the userMessage to your server for AI processing.
    // For simplicity, let's just echo the user message for now.
    const botMessage = `PathPilot AI: ${userMessage}`;

    // Add the bot's message to the chat after a short delay (simulating server response time)
    setTimeout(() => {
      setChatMessages((prevMessages) => [...prevMessages, { type: 'bot', text: botMessage }]);
    }, 500);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat with PathPilot AI</h2>
      </div>
      <div className="chat-box">
        {/* Display chat messages */}
        {chatMessages.map((message, index) => (
          <div key={index} className={message.type}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          ref={userInputRef}
          value={userMessage}
          onChange={handleUserMessageChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default AI;
