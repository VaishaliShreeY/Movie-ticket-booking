import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MovieSelection.css";

const MovieSelection = ({ onSelectMovie }) => {
  const navigate = useNavigate();

  const movies = [
    { id: 1, title: "Spider-Man", image: "https://images.pexels.com/photos/2854693/pexels-photo-2854693.jpeg" },
    { id: 2, title: "Tik Tik Tik", image: "https://tse3.mm.bing.net/th?id=OIP.DgUmR9Cm-CyqIhLhkXiPwwHaLl&pid=Api&P=0&h=180" },
    { id: 3, title: "Triangle", image: "https://images.pexels.com/photos/6074859/pexels-photo-6074859.jpeg" },
    { id: 4, title: "Inception", image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg" },
    { id: 5, title: "Gravity", image: "https://images.pexels.com/photos/2753432/pexels-photo-2753432.jpeg" },
    { id: 6, title: "The Lion King", image: "https://images.pexels.com/photos/29186270/pexels-photo-29186270.jpeg" },
    { id: 7, title: "The Dark Knight", image: "https://images.pexels.com/photos/5672735/pexels-photo-5672735.jpeg" },
    { id: 8, title: "Joker", image: "https://images.pexels.com/photos/10033194/pexels-photo-10033194.jpeg" },
    { id: 9, title: "Avengers", image: "https://tse4.mm.bing.net/th?id=OIP.ZNo1ftSQik9UXSlWiFrKIwHaLH&pid=Api&P=0&h=180" },
    { id: 10, title: "Interstellar", image: "https://images.pexels.com/photos/30516096/pexels-photo-30516096.jpeg" },
    { id: 11, title: "Lubber Pandhu", image: "https://tse2.mm.bing.net/th?id=OIP.m77Fls9mVq_c4JuxygSqlgAAAA&pid=Api&P=0&h=180" },
    { id: 12, title: "Stranger Things", image: "https://tse2.mm.bing.net/th?id=OIP.OPD9_UsXdGWSexDnZa2gxAHaNL&pid=Api&P=0&h=180" }
  ];

  const handleMovieSelect = (movie) => {
    sessionStorage.setItem("selectedMovie", JSON.stringify(movie)); 
    onSelectMovie(movie);
    navigate("/theater-selection", { state: { selectedMovie: movie } });
  };

  return (
    <div className="movie-selection-container">
      <h1 className="title">Welcome! Available Movies</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <h2 className="movie-title">{movie.title}</h2>
            <button className="select-button" onClick={() => handleMovieSelect(movie)}>
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSelection;
