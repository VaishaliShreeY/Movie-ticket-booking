
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TheaterSelection.css";

const TheaterSelection = ({ selectedMovie, onSelectTheater }) => {
  const navigate = useNavigate();

  if (!selectedMovie) {
    return <div>Please select a movie first!</div>;
  }

  const movieTheaterMap = {
    1: [
      { id: 1, name: "Sathyam Cinemas", rating: 4.5, price: 200, image: "https://images.pexels.com/photos/11310114/pexels-photo-11310114.jpeg" },
      { id: 2, name: "PVR Cinemas", rating: 4.2, price: 180, image: "https://images.pexels.com/photos/1622510/pexels-photo-1622510.jpeg" },
      { id: 3, name: "IMAX 1", rating: 4.0, price: 160, image: "https://images.pexels.com/photos/8616023/pexels-photo-8616023.jpeg" },
    ],
    2: [
      { id: 4, name: "IMAX 2", rating: 4.0, price: 160, image: "https://images.pexels.com/photos/8616023/pexels-photo-8616023.jpeg" },
      { id: 5, name: "Cinepolis", rating: 4.3, price: 170, image: "https://images.pexels.com/photos/275640/pexels-photo-275640.jpeg" },
      {id: 6, name: "INOX", rating: 4.6, price: 210, image: "https://images.pexels.com/photos/3345918/pexels-photo-3345918.jpeg" },
    ],
    3: [
      { id: 7, name: "INOX", rating: 4.6, price: 210, image: "https://images.pexels.com/photos/3345918/pexels-photo-3345918.jpeg" },
      { id: 8, name: "Regal Cinemas", rating: 4.1, price: 175, image: "https://images.pexels.com/photos/3378994/pexels-photo-3378994.jpeg" },
      { id: 9, name: "PVR Gold", rating: 4.9, price: 300, image: "https://images.pexels.com/photos/3815135/pexels-photo-3815135.jpeg" },
    ],
    4: [
      { id: 10, name: "PVR Gold", rating: 4.9, price: 300, image: "https://images.pexels.com/photos/3815135/pexels-photo-3815135.jpeg" },
      { id: 11, name: "Cineplex", rating: 4.2, price: 180, image: "https://images.pexels.com/photos/275640/pexels-photo-275640.jpeg" },
       { id: 12, name: "Dolby Cinema", rating: 4.7, price: 250, image: "https://images.pexels.com/photos/2130597/pexels-photo-2130597.jpeg" },
    ],
    5: [
      { id: 13, name: "Dolby Cinema", rating: 4.7, price: 250, image: "https://images.pexels.com/photos/2130597/pexels-photo-2130597.jpeg" },
      { id: 14, name: "IMAX 3D", rating: 4.8, price: 275, image: "https://images.pexels.com/photos/3119160/pexels-photo-3119160.jpeg" },
      { id: 15, name: "Majestic Cinemas", rating: 4.3, price: 160, image: "https://images.pexels.com/photos/3574678/pexels-photo-3574678.jpeg" },
    ],
    6: [
      { id: 16, name: "Majestic Cinemas", rating: 4.3, price: 160, image: "https://images.pexels.com/photos/3574678/pexels-photo-3574678.jpeg" },
      { id: 17, name: "Sathyam Classic", rating: 4.4, price: 190, image: "https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg" },
       { id: 18, name: "Regal Theaters", rating: 4.6, price: 200, image: "https://images.pexels.com/photos/11310114/pexels-photo-11310114.jpeg" },
    ],
    7: [
      { id: 19, name: "Regal Theaters", rating: 4.6, price: 200, image: "https://images.pexels.com/photos/11310114/pexels-photo-11310114.jpeg" },
      { id: 20, name: "IMAX Supreme", rating: 4.9, price: 280, image: "https://images.pexels.com/photos/1334931/pexels-photo-1334931.jpeg" },
      { id: 21, name: "Broadway Cinemas", rating: 4.5, price: 190, image: "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg" },
    ],
    8: [
      { id: 22, name: "Broadway Cinemas", rating: 4.5, price: 190, image: "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg" },
      { id: 23, name: "Cineworld", rating: 4.2, price: 170, image: "https://images.pexels.com/photos/2146472/pexels-photo-2146472.jpeg" },
      { id: 24, name: "IMAX Supreme", rating: 4.2, price: 170, image: "https://images.pexels.com/photos/1334931/pexels-photo-1334931.jpeg" },
    ],
    9: [
      { id: 25, name: "Broadway Cinemas", rating: 4.9, price: 170, image: "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg" },
      { id: 26, name: "Cineworld", rating: 4.2, price: 170, image: "https://images.pexels.com/photos/2146472/pexels-photo-2146472.jpeg" },
      { id: 27, name: "IMAX", rating: 4.0, price: 200, image: "https://images.pexels.com/photos/8616023/pexels-photo-8616023.jpeg" },
    ],
    10: [
      { id: 28, name: "IMAX", rating: 4.0, price: 200, image: "https://images.pexels.com/photos/8616023/pexels-photo-8616023.jpeg" },
      { id: 29, name: "Cinepolis", rating: 4.3, price: 170, image: "https://images.pexels.com/photos/275640/pexels-photo-275640.jpeg" },
      { id: 30, name: "Sathyam Cinemas", rating: 4.5, price: 100, image: "https://images.pexels.com/photos/11310114/pexels-photo-11310114.jpeg" },
    ],
    11: [
      { id: 31, name: "Sathyam Cinemas", rating: 4.5, price: 100, image: "https://images.pexels.com/photos/11310114/pexels-photo-11310114.jpeg" },
      { id: 32, name: "PVR Cinemas", rating: 4.2, price: 180, image: "https://images.pexels.com/photos/1622510/pexels-photo-1622510.jpeg" },
         { id: 33, name: "IMAX", rating: 4.0, price: 200, image: "https://images.pexels.com/photos/8616023/pexels-photo-8616023.jpeg" },
    ],
    12: [
      { id: 34, name: "Sathyam Cinemas", rating: 4.5, price: 200, image: "https://images.pexels.com/photos/11310114/pexels-photo-11310114.jpeg" },
      { id: 35, name: "PVR Cinemas", rating: 4.2, price: 150, image: "https://images.pexels.com/photos/1622510/pexels-photo-1622510.jpeg" },
        { id: 36, name: "Cinepolis", rating: 4.3, price: 170, image: "https://images.pexels.com/photos/275640/pexels-photo-275640.jpeg" },
    ],

  };

  const theaters = movieTheaterMap[selectedMovie.id] || [];

  const handleTheaterSelect = (theater) => {
    if (onSelectTheater) {
      onSelectTheater(theater);
      navigate("/seat-selection", { state: { selectedMovie, selectedTheater: theater } });
    }
  };

  return (
    <div className="theater-selection-container">
      <h1>Select a Theater for: {selectedMovie.title}</h1>
      <div className="theater-grid">
        {theaters.map((theater) => (
          <div key={theater.id} className="theater-card">
            <img src={theater.image} alt={theater.name} className="theater-image" />
            <h2>{theater.name}</h2>
            <p>⭐ Rating: {theater.rating}</p>
            <p>💰 Price: ₹{theater.price}</p>
            <button onClick={() => handleTheaterSelect(theater)}>Select Theater</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheaterSelection;
