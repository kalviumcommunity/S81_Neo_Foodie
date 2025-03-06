import React from 'react';
import './App.css';

function App() {
  return (
    <nav className="Navbar">
      <h2 className="logo">Neo Foodie</h2>
      <div className="nav-links">
        <h1>Home</h1>
        <h1>Your Reviews</h1>
        <h1 className="login">Login</h1>
      </div>
    </nav>
  );
}

export default App;
