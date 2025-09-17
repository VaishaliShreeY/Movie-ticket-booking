import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";

const Welcome = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const recommendedMovies = [
    {
      title: "Inception",
      image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg",
      description: "A thief enters dreams to steal secrets and finds himself on a deeper mission."
    },
    {
      title: "Interstellar",
      image: "https://images.pexels.com/photos/30516096/pexels-photo-30516096.jpeg",
      description: "A team travels through a wormhole in search of a new home for humanity."
    },
    {
      title: "The Dark Knight",
      image: "https://images.pexels.com/photos/5672735/pexels-photo-5672735.jpeg",
      description: "Batman faces the Joker in a battle for Gotham's soul."
    },
    {
      title: "Avengers",
      image: "https://tse4.mm.bing.net/th?id=OIP.ZNo1ftSQik9UXSlWiFrKIwHaLH&pid=Api&P=0&h=180",
      description: "The Avengers assemble to reverse the damage done by Thanos."
    },
    {
      title: "Lubber Pandhu",
      image: "https://tse2.mm.bing.net/th?id=OIP.m77Fls9mVq_c4JuxygSqlgAAAA&pid=Api&P=0&h=180",
      description: "A comedic drama about village life and unlikely friendships."
    },
    {
      title: "Stranger Things",
      image: "https://tse2.mm.bing.net/th?id=OIP.OPD9_UsXdGWSexDnZa2gxAHaNL&pid=Api&P=0&h=180",
      description: "A group of kids uncover supernatural secrets in their small town."
    }
  ];

  return (
    <div className="welcome-container">
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
          {recommendedMovies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <div className="movie-info">
                <p className="movie-title">{movie.title}</p>
                <div className="movie-description">{movie.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
