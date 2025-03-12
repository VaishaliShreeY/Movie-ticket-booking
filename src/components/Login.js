import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Login.css"; 

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {  
      setIsAuthenticated(true);
      sessionStorage.setItem("isAuthenticated", "true");

      
      const savedMovie = sessionStorage.getItem("selectedMovie");
      const savedBookingData = sessionStorage.getItem("bookingData");

      const redirectPath = location.state?.from || "/";
      navigate(redirectPath, {
        state: {
          ...(savedMovie ? { selectedMovie: JSON.parse(savedMovie) } : {}),
          ...(savedBookingData ? JSON.parse(savedBookingData) : {}),
        },
      });
    } else {
      alert("Please enter a valid email and password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
