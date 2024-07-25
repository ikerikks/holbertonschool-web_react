import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" name="mail" id="email" value="" readOnly/>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" value="" readOnly/>
          <button type="reset">OK</button>
        </form>
      </main>

      <footer className="App-footer">
        <p>Copyright 2024 - holberton School</p>
      </footer> 
    </div>
  );
}

export default App;
