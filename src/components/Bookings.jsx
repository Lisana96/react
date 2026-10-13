import React from 'react';

export default function Bookings({ items, onDelete }) {
  return (
    <div className="container">
      <h2>My Booked & Saved Trips</h2>
      
      {items.length === 0 ? (
        <h3>Your Travel List is empty.Visit our Destinations page and choose where you want to go...</h3>
        
      ) : (
        <div className="booking-list">
          {items.map(trip => (
            <div key={trip.id} className="booking-item">
              <div>
                <h4>{trip.destination}</h4>
                <p>Date: {trip.date}  | Attendees: {trip.travelers} Person(s)</p>
              </div>
              <button className="btn-danger" onClick={() => onDelete(trip.id)}>Cancel Trip</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
