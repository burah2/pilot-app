// GoogleSignIn.jsx
import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import "../Styles.css";

const GoogleSignIn = ({ onSignIn, onSignOut }) => {
  useEffect(() => {
    // Load the Google API client library
    const loadGoogleApi = () => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.async = true;
      script.defer = true;
      script.onload = initGoogleSignIn;
      document.head.appendChild(script);
    };

    // Initialize the Google Sign-In API
    const initGoogleSignIn = () => {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: 'your-google-client-id',
        });
      });
    };

    loadGoogleApi();
  }, []);

  const handleSuccess = (response) => {
    // Handle successful sign-in
    console.log('Google Sign-In success:', response);

    // Call the onSignIn function passed as a prop
    if (onSignIn) {
      onSignIn(response);
    }
  };

  const handleFailure = (error) => {
    // Handle sign-in failure
    console.error('Google Sign-In failure:', error);

    // Call the onSignOut function passed as a prop
    if (onSignOut) {
      onSignOut();
    }
  };

  const handleSignOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
      
      // Call the onSignOut function passed as a prop
      if (onSignOut) {
        onSignOut();
      }
    });
  };

  return (
    <div>
      {/* Google Sign-In button */}
      <GoogleLogin
        buttonText="Sign in with Google"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
      />

      {/* Sign-out link */}
      <a href="#" onClick={handleSignOut}>Sign in</a>
    </div>
  );
};

export default GoogleSignIn;
