import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (name.length < 2) {
      alert("Please enter a proper name.");
      return;
    }
    if (!email.includes('@')){
      alert("Please enter proper email address.");
      return;
    }
    setIsSent(true);
  };
      
    
    

  if (isSent) {
    return (
      <div className="container center-text">
        <div className="success-banner">
          <h3>Request message Sent Successfully!</h3>
          <p>Thank you {name},check your email {email} for our reply within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container small-form-box">
      <h3>Contact Details of Lisana Tours</h3>
      <form onSubmit={handleSendMessage} className="form-layout">
        <label>Enter Your Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
       

        <label>Enter Your Email Address:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

        <label>Request Message :</label>
        <textarea rows="4" value={msg} onChange={e => setMsg(e.target.value)} required />

        <button type="submit" className="btn">Send Support Request</button>
      </form>
    </div>
  );
}
