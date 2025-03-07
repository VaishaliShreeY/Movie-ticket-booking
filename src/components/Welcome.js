import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";

const Welcome = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);
      sessionStorage.removeItem("isAuthenticated");
      navigate("/");
    } else {
      navigate("/login", { state: { from: "/movie-selection" } });
    }
  };

  return (
    <div className="welcome-container">
      <div className="login-menu" onClick={handleAuthClick}>
        {isAuthenticated ? "Logout" : "Login"}
      </div>

      <div className="content">
        <h1 className="welcome-title">Welcome to Book My Ticket</h1>
        <p className="welcome-subtitle">Book tickets for your favorite movies effortlessly!</p>
        <button className="get-started-button" onClick={() => navigate("/movie-selection")}>
          Get Started
        </button>
      </div>

      <div className="recommended-movies">
        <h2>Recommended Movies</h2>
        <div className="movies-list">
          {[{
            title: "Inception",
            image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg"
          }, {
            title: "Interstellar",
            image: "https://images.pexels.com/photos/30516096/pexels-photo-30516096.jpeg"
          }, {
            title: "The Dark Knight",
            image: "https://images.pexels.com/photos/5672735/pexels-photo-5672735.jpeg"
          }, {
            title: "Avengers: Endgame",
            image: "https://images.pexels.com/photos/2854693/pexels-photo-2854693.jpeg"
          }].map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <div className="movie-info">
                <p className="movie-title">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
