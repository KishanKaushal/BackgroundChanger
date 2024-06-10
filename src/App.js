import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentMode = isDarkMode ? 'dark-mode' : 'light-mode';
    document.documentElement.className = currentMode;
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>


      <div className="app">
        <div className="toggle-container" onClick={toggleMode}>
          <div className="toggle-button"></div>
          <span className="toggle-label">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
        </div>



        <div className="App login-container"  onClick={toggleMode} >

          <h2>Login</h2>
          <form>
            <div className="form-group" >
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
          </form>
          <p>Don't have an account? <button className="signup-button">Sign Up</button></p>
        </div>
      </div>
    </>
  );
}

export default App;
