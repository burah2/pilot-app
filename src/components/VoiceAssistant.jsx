// src/components/VoiceAssistant.jsx
import React, { useState } from 'react';

const VoiceAssistant = () => {
  const [recognition, setRecognition] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const startVoiceRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscript(transcript);
      // You can add logic to process the transcript as needed
      alert(`You said: ${transcript}`);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    setRecognition(recognition);
    recognition.start();
    setIsListening(true);
  };

  const stopVoiceRecognition = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  return (
    <div>
      <h1>Voice Assistant</h1>
      <div id="chat-container">
        <div id="chat">{isListening ? 'Listening...' : 'Not Listening'}</div>
        <button onClick={startVoiceRecognition}>Start Voice Recognition</button>
        <button onClick={stopVoiceRecognition}>Stop Voice Recognition</button>
        <div id="transcript">Transcript: {transcript}</div>
      </div>
    </div>
  );
};

export default VoiceAssistant;
