import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [selectedShowTime, setSelectedShowTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const selectedMovie = location.state?.selectedMovie || JSON.parse(localStorage.getItem("selectedMovie"));
  const selectedTheater = location.state?.selectedTheater || JSON.parse(localStorage.getItem("selectedTheater"));
  const selectedSeats = location.state?.selectedSeats || JSON.parse(localStorage.getItem("selectedSeats")) || [];
  const initialSeatCount = location.state?.seatCount || selectedSeats.length || 1;
  const [seats, setSeats] = useState(initialSeatCount);

  const ticketPrice = selectedTheater?.price || 150;
  const totalAmount = seats * ticketPrice;
  const availableShowTimes = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"];

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) {
      navigate("/login", { state: { from: "/payment" } });
    }
  }, [navigate]);

  if (!selectedMovie || !selectedTheater) {
    return <div>Error: Movie or theater data is missing.</div>;
  }

  const handleConfirmPayment = () => {
    if (!selectedDate) {
      alert("Please select a movie date!");
      return;
    }
    if (!selectedShowTime) {
      alert("Please select a show time!");
      return;
    }
    if (!userName.trim() || !phoneNumber.trim()) {
      alert("Please enter your name and phone number to proceed.");
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Payment Successful! 🎉",
      html: `
        <strong>Name:</strong> ${userName}<br/>
        <strong>Phone:</strong> ${phoneNumber}<br/>
        <strong>Movie:</strong> ${selectedMovie.title}<br/>
        <strong>Theater:</strong> ${selectedTheater.name}<br/>
        <strong>Seat Numbers:</strong> ${selectedSeats.join(", ")}<br/>
        <strong>Seats Count:</strong> ${seats}<br/>
        <strong>Total Amount:</strong> ₹${totalAmount}
      `,
      confirmButtonText: "OK"
    }).then(() => {
      localStorage.removeItem("selectedSeats");
      navigate("/thank-you");
    });
  };

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h2>Confirm Payment</h2>
        <table className="payment-table">
          <tbody>
            <tr><td><strong>Theater:</strong></td><td>{selectedTheater.name}</td></tr>
            <tr><td><strong>Movie:</strong></td><td>{selectedMovie.title}</td></tr>
            <tr>
              <td><strong>Select Date:</strong></td>
              <td>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </td>
            </tr>
            <tr>
              <td><strong>Select Show Time:</strong></td>
              <td>
                <select value={selectedShowTime} onChange={(e) => setSelectedShowTime(e.target.value)}>
                  <option value="">Select Show Time</option>
                  {availableShowTimes.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr><td><strong>Ticket Price:</strong></td><td>₹{ticketPrice} per seat</td></tr>
            <tr>
              <td><strong>Seats Count:</strong></td>
              <td>
                <input
                  type="number"
                  value={seats}
                  onChange={(e) => setSeats(parseInt(e.target.value) || 1)}
                  min="1"
                />
              </td>
            </tr>
            <tr><td><strong>Total Amount:</strong></td><td><strong>₹{totalAmount}</strong></td></tr>
            <tr>
              <td><strong>Payment Method:</strong></td>
              <td>
                <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                  <option>UPI</option>
                  <option>Cash</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><strong>Your Name:</strong></td>
              <td>
                <input 
                  type="text" 
                  value={userName} 
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name"
                />
              </td>
            </tr>
            <tr>
              <td><strong>Phone Number:</strong></td>
              <td>
                <input 
                  type="tel" 
                  value={phoneNumber} 
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter phone number"
                />
              </td>
            </tr>
            <tr>
              <td><strong>Seat Numbers:</strong></td>
              <td>{selectedSeats.join(", ")}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={handleConfirmPayment} className="pay-button">Confirm Payment</button>
      </div>
    </div>
  );
};

export default Payment;
