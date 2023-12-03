import React from 'react';

import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import Button from './components/Button/Button.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my Page!</h1>

        <Button />
      </header>
    </div>
  );
}

export default App;
