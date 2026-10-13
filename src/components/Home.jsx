import React from 'react';

import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();

  return (
    <div
     className="hero-banner"

     
     > 
      <h1>Your Journey Begins Here , Explore the World,Your Way</h1>
      <p>Easy Bookings. Lifelong Memories, premium destinations, Endless Adventures..., Unforgettable Memories.The world is Waiting....Explore Now...</p>
      <button className="btn" onClick={() => navigate('/destinations')}>
        Book Your Trip
      </button>

    </div>
  );
}
