// App.js
import React, { useState } from 'react';
import './App.css';
import { Login, UnsuccessfulLogin, SuccessfulLogin } from "../src/components/login";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [showUnsuccessfulLogin, setShowUnsuccessfulLogin] = useState(false);

  const handleSuccessfulLogin = () => {
    setLoginStatus(true);
    setShowUnsuccessfulLogin(false); // Reset unsuccessful login status
  };

  const handleUnsuccessfulLogin = () => {
    setShowUnsuccessfulLogin(true);
  };

  const handleTryAgain = () => {
    setShowUnsuccessfulLogin(false); // Reset unsuccessful login status
  };

  const handleLogout = () => {
    setLoginStatus(false);
  };

  const renderContent = () => {
    if (showUnsuccessfulLogin) {
      return <UnsuccessfulLogin onTryAgain={handleTryAgain} />;
    }

    if (loginStatus) {
      return <SuccessfulLogin onLogout={handleLogout} />;
    } else {
      return (
        <Login
          onSuccessfulLogin={handleSuccessfulLogin}
          onUnsuccessfulLogin={handleUnsuccessfulLogin}
        />
      );
    }
  };

  return (
    <div className="App">
      {renderContent()}
    </div>
  );
}

export default App;
