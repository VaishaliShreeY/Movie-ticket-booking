import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import MovieSelection from "./components/MovieSelection";
import TheaterSelection from "./components/TheaterSelection";
import SeatSelection from "./components/SeatSelection";
import Payment from "./components/Payment";
import ThankYou from "./components/ThankYou";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer"; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") === "true"
  );

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <Router>
      <Dashboard />
      <Routes>
        <Route path="/" element={<Welcome isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/movie-selection" element={<MovieSelection onSelectMovie={setSelectedMovie} />} />
        <Route path="/theater-selection" element={<TheaterSelection selectedMovie={selectedMovie} onSelectTheater={setSelectedTheater} />} />
        <Route path="/seat-selection" element={<SeatSelection selectedMovie={selectedMovie} selectedTheater={selectedTheater} onSelectSeats={setSelectedSeats} />} />
        <Route 
          path="/payment" 
          element={isAuthenticated ? (
            <Payment selectedMovie={selectedMovie} selectedTheater={selectedTheater} selectedSeats={selectedSeats} />
          ) : (
            <Navigate to="/login" state={{ from: "/payment" }} replace />
          )}
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer /> {}
    </Router>
  );
}

export default App;
