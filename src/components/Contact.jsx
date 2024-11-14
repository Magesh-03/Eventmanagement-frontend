import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Contact.css"
const EventBookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventName, setEventName] = useState('');
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState('');

  
  const prices = {
    Birthday: 100,
    Wedding: 500,
    Anniversary: 300,
    Conference: 400,
    Party: 150,
    Graduation: 200,
    Meeting: 250,
    Exhibition: 450,
    Seminar: 350,
    Workshop: 300,
  };

  
  useEffect(() => {
    setPrice(eventName ? prices[eventName] : 0);
  }, [eventName]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !eventDate || !eventTime || !eventName) {
      setMessage('Please fill in all fields.');
      return;
    }
   

    try {
      const response = await axios.post('http://localhost:4000/api/book', {
      
        name,
        email,
        eventDate,
        eventTime,
        eventName,
        price,
      });

      setMessage(`Booking successful for "${eventName}" on ${eventDate} at ${eventTime}. Total price: $${price}.`);
      
      setName('');
      setEmail('');
      setEventDate('');
      setEventTime('');
      setEventName('');
    } catch (error) {
      setMessage('Failed to create booking. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <h1>Book Your Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="eventDate">Event Date:</label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="eventTime">Event Time:</label>
          <input
            type="time"
            id="eventTime"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="eventName">Event Type:</label>
          <select
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          >
            <option value="">Select Event</option>
            {Object.keys(prices).map((event) => (
              <option key={event} value={event}>{event}</option>
            ))}
          </select>
        </div>

        <div>
          <p>Price: ${price}</p>
        </div>

        
        <button type="submit">Book Event</button>
        
      </form>
      
     
      {message && <p>{message}</p>}
    </div>
   
  );
};

export default EventBookingForm;

