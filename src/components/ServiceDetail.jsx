import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DETAILS_LOOKUP = {
  Dubai: { name: 'Dubai Romantic Tour', price: 22000 },
  Malaysiya: { name: 'Kualalumpur Adventure', price: 26000 },
  Newyork: { name: 'New york Resort Stay', price: 12000 }
};

export default function ServiceDetail({ onAdd }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dateInputRef = useRef();

  const activePackage = DETAILS_LOOKUP[id] || { name: 'Dubai Package', price: 22000};
  
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);

  // Focus the input box when the component mounts
  useEffect(() => {
    if (dateInputRef.current) {
      dateInputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      alert("Please select a valid tour date!");
      return;
    }

    const newTrip = {
      id: Date.now(),
      destination: activePackage.name,
      date: date,
      travelers: Number(guests)
    };

    onAdd(newTrip);
    navigate('/bookings');
  };

  return (
    <div className="container small-form-box">
      <h2>Book your Dream Destination & Travel Beyond Boundries,</h2>
      <h3>Selected: {activePackage.name}</h3>
      <p>Pricing Rate: {activePackage.price} / person</p>

      <form onSubmit={handleSubmit} className="form-layout">
        <label>Select Date:</label>
        <input 
          type="date" 
          ref={dateInputRef} 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />

        <label>Number of Travelers:</label>
        <input 
          type="number" 
          min="1" 
          max="10" 
          value={guests} 
          onChange={(e) => setGuests(e.target.value)} 
        />

        <div className="total-indicator">
          <h4>Estimated Price: {activePackage.price * guests}</h4>
        </div>

        <button type="submit" className="btn">Confirm Booking & Save Date</button>
      </form>
    </div>
  );
}
