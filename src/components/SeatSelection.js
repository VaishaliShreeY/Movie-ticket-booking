import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/SeatSelection.css";

const SeatSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedMovie, selectedTheater } = location.state || {};

  const seatsPerRow = 20;

  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (selectedTheater) {
      const savedSeats = JSON.parse(localStorage.getItem(`bookedSeats_${selectedTheater.id}`)) || [];
      setBookedSeats(savedSeats);
    }
  }, [selectedTheater]);

  if (!selectedMovie || !selectedTheater) {
    return <div>Please select a movie and theater first!</div>;
  }

  const getSeatCategory = (seatNumber) => {
    if (seatNumber <= 40) return "silver";
    if (seatNumber <= 80) return "gold";
    return "platinum";
  };

  const toggleSeatSelection = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) return;

    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((seat) => seat !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat to proceed.");
      return;
    }

    const updatedBookedSeats = [...bookedSeats, ...selectedSeats];
    localStorage.setItem(`bookedSeats_${selectedTheater.id}`, JSON.stringify(updatedBookedSeats));
    localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
    localStorage.setItem("selectedTheater", JSON.stringify(selectedTheater));
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));

    navigate("/payment", {
      state: {
        selectedMovie,
        selectedTheater,
        selectedSeats,
        seatCount: selectedSeats.length,
      },
    });
  };

  const renderSeats = (count, startNumber) => {
    return Array.from({ length: count }, (_, index) => {
      const seatNumber = startNumber + index;
      const isBooked = bookedSeats.includes(seatNumber);
      const isSelected = selectedSeats.includes(seatNumber);
      const category = getSeatCategory(seatNumber);

      return (
        <div
          key={seatNumber}
          className={`seat ${category} ${isBooked ? "booked" : isSelected ? "selected" : "available"}`}
          onClick={() => toggleSeatSelection(seatNumber)}
        >
          {seatNumber}
        </div>
      );
    });
  };

  return (
    <div className="seat-selection-container">
      <div className="theater-box">
        <h2>{selectedTheater.name}</h2>
      </div>

      <div className="legend">
        <span className="legend-box silver" /> Silver (1–40)
        <span className="legend-box gold" /> Gold (41–80)
        <span className="legend-box platinum" /> Platinum (81–120)
      </div>

      <div className="seat-card">
        <div className="seat-grid" style={{ gridTemplateColumns: `repeat(${seatsPerRow}, 1fr)` }}>
          {}
          {renderSeats(40, 1)}

          {}
          {Array.from({ length: seatsPerRow }, (_, index) => (
            <div key={`spacer-sg-${index}`} className="seat spacer" />
          ))}

          {}
          {renderSeats(40, 41)}

          {}
          {Array.from({ length: seatsPerRow }, (_, index) => (
            <div key={`spacer-gp-${index}`} className="seat spacer" />
          ))}

          {}
          {renderSeats(40, 81)}
        </div>
      </div>

      <button onClick={handleBooking} className="proceed-button">Proceed to Payment</button>
    </div>
  );
};

export default SeatSelection;
