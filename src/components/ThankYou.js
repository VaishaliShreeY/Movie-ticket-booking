import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ThankYou.css";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thank-you-container">
      <div className="thank-you-box">
        <h1>🎉 Thank You! 🎉</h1>
        <p>Your booking is confirmed.</p>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    </div>
    
  );
};

export default ThankYou;