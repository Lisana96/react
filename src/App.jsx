import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Destinations from './components/Destinations.jsx';
import ServiceDetail from './components/ServiceDetail.jsx';
import Bookings from './components/Bookings.jsx';
import Contact from './components/Contact.jsx';
import Profile from './components/Profile.jsx';
import './App.css';

export default function App() {
  // Application global state for holding active trips

  
  const [bookings, setBookings] = useState([
    { id: 1, destination: "Dubai Romantic Tours", date: "2026-12-11", travelers: 5 }
  ]);

  // Create operation: Adds a trip
  const addBooking = (newTrip) => {
    setBookings([...bookings, newTrip]);
  };

  // Delete operation: Removes a trip
  const deleteBooking = (id) => {
    const updated = bookings.filter(trip => trip.id !== id);
    setBookings(updated);
  };

  return (
    
    <BrowserRouter>
      <div className="app-wrapper"> <h1>LISANA TOURS & TRAVEL AGENCY</h1>
        <Navbar />
        <div className="main-content">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            {/* Nested parameter route mapping */}
            <Route path="/destinations/:id" element={<ServiceDetail onAdd={addBooking} />} />
            <Route path="/bookings" element={<Bookings items={bookings} onDelete={deleteBooking} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
