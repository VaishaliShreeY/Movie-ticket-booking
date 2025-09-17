import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-title">🎬 Book My Ticket</div>
      <nav className="dashboard-nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          end
        >
          Home
        </NavLink>
        <NavLink 
          to="/movie-selection" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Movies
        </NavLink>
        <NavLink 
          to="/theater-selection" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Theaters
        </NavLink>
        <NavLink 
          to="/seat-selection" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Seats
        </NavLink>
        <NavLink 
          to="/payment" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Payment
        </NavLink>
      </nav>
    </div>
  );
};

export default Dashboard;
