import React, { useState } from 'react';
import './Login.css';
import ApiService from '../../services/ApiService';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiService.login({ username, password });
      localStorage.setItem('token', response.data.token); // Store the token
      alert('Login Successful!');
      window.location.href = '/admin/allMembers'; // Redirect to members page
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <header className="header">
        <div className="header-left">
          <span className="logo">Elephant Ad Agency</span>
        </div>
        <nav className="header-right">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/help">Help</a></li><br></br><br></br><nbsp></nbsp>
           
          </ul>
        </nav>
      </header>

      <div className="login-form">
        <h2>Login</h2>
        <h3>Gym Management System</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Log In</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

      <footer className="footer">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default Login;
