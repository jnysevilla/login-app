import React, { useState } from 'react';
import girl from '../components/assets/images/girl.png';
import kitty from '../components/assets/images/kitty.png'
import sad from '../components/assets/images/sad.png'
import SpotifyEmbed from './Spotify';

// Main Login
export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Implemented hardcoded credentials for authentication
    const validEmail = 'user@example.com';
    const validPassword = 'password';

    if (email === validEmail && password === validPassword) {
      // If credentials are correct, trigger successful login
      props.onSuccessfulLogin();
    } else {
      // If credentials are incorrect, notify the parent component
      props.onUnsuccessfulLogin();
    }
  };

  // Returns the main login page
  return (
    <div className='auth-form-container'>
      <h1>Welcome!</h1>
      <img src={girl} alt="girl with antlers" className='img' />
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@email.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button className='shared-btn submit-btn' type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

// UnsuccessfulLogin
export const UnsuccessfulLogin = ({ onTryAgain }) => {
  return (
    <div className='auth-form-container'>
      <h1>Login Failed</h1>
      <img src={sad} alt="sad emoji" className='img' />
      <p>Wrong credentials. Please try again.</p>
      <button className='shared-btn loginfail-btn' onClick={onTryAgain}>
        Try again
      </button>
    </div>
  );
};

// SuccessfulLogin
export const SuccessfulLogin = ({ onLogout }) => {
  return (
    <div className='auth-form-container'>
      <h1>Successfully<br />Logged in!</h1>
      <img src={kitty} alt='kitty-icon' className='img' />
      {/* Additional content for a successfully logged-in state */}
      <SpotifyEmbed />
      <button className='shared-btn login-btn' onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
