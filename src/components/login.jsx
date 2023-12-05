import React, { useState } from 'react';


// Main Login
export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Implemented a hardcoded credentials for authentication
    const validEmail = 'user@example.com';
    const validPassword = 'password';

    if (email === validEmail && password === validPassword) {
      // if credentials are correct, trigger successful login
      props.onSuccessfulLogin();
    } else {
      // if credentials are incorrect, notify the parent component
      props.onUnsuccessfulLogin();
    }
  };


    return(
        <div className='auth-form-container'>

            <h2>Login</h2>

            <form className='login-form'  onSubmit={handleSubmit}>

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email"></input>
    
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>

                <button type="submit">Login</button>

            </form>


        </div>
    )
    
}  


// UnsuccessfulLogin
export const UnsuccessfulLogin = ({ onTryAgain }) => {
  return (
    <div className='auth-form-container'>
      <h1>Login Failed</h1>
      <p>Wrong credentials. Please try again.</p>
      <button onClick={onTryAgain}>Go Back and Try Again</button>
    </div>
  );
};


// SuccessfulLogin
export const SuccessfulLogin = ({ onLogout }) => {
    return (
      <div className='auth-form-container'>
        <h1>Successfully Logged In</h1>
        {/* Additional content for a successfully logged-in state */}
        <button onClick={onLogout}>Logout</button>
      </div>
    );
  };

