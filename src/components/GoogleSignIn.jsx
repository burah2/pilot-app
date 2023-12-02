// src/components/GoogleSignIn.jsx
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignIn = ({ onSuccess, onFailure }) => {
  // Replace 'YOUR_CLIENT_ID' with your Google API client ID
  const clientId = '63353374583';

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignIn;
