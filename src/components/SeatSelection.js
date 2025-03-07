import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/SeatSelection.css";

const SeatSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedMovie, selectedTheater } = location.state || {};

  const totalSeats = 50;
  const seatsPerRow = 10;

  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Load booked seats from localStorage
  useEffect(() => {
    if (selectedTheater) {
      const savedSeats = JSON.parse(localStorage.getItem(`bookedSeats_${selectedTheater.id}`)) || [];
      setBookedSeats(savedSeats);
    }
  }, [selectedTheater]);

  if (!selectedMovie || !selectedTheater) {
    return <div>Please select a movie and theater first!</div>;
  }

  // Toggle seat selection
  const toggleSeatSelection = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) return;

    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((seat) => seat !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  // Proceed to payment
  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat to proceed.");
      return;
    }

    const updatedBookedSeats = [...bookedSeats, ...selectedSeats];
    localStorage.setItem(`bookedSeats_${selectedTheater.id}`, JSON.stringify(updatedBookedSeats));

    // Persist data for later retrieval (fixes issue after login)
    localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
    localStorage.setItem("selectedTheater", JSON.stringify(selectedTheater));
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));

    navigate("/payment");
  };

  return (
    <div className="seat-selection-container">
      <div className="theater-box">
        <h2>{selectedTheater.name}</h2>
      </div>

      <div className="seat-card">
        <div className="seat-grid" style={{ gridTemplateColumns: `repeat(${seatsPerRow}, 1fr)` }}>
          {Array.from({ length: totalSeats }, (_, index) => {
            const seatNumber = index + 1;
            const isBooked = bookedSeats.includes(seatNumber);
            const isSelected = selectedSeats.includes(seatNumber);

            return (
              <div
                key={seatNumber}
                className={`seat ${isBooked ? "booked" : isSelected ? "selected" : "available"}`}
                onClick={() => toggleSeatSelection(seatNumber)}
              >
                {seatNumber}
              </div>
            );
          })}
        </div>
      </div>

      <button onClick={handleBooking} className="proceed-button">Proceed to Payment</button>
    </div>
  );
};

export default SeatSelection;
