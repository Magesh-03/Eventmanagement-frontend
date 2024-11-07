import React, { useState } from 'react';
import axios from 'axios';

const EventBookingForm = () => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventName, setEventName] = useState('');
  const [message, setMessage] = useState('');

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !eventDate || !eventTime || !eventName) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      
      const response = await axios.post('https://eventmanagementz-backend.onrender.com/api/book', {
        name,
        email,
        eventDate,
        eventTime,
        eventName,
      });

      setMessage(`Booking successful for "${eventName}" on ${eventDate} at ${eventTime}.`);
      
      
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
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Conference">Conference</option>
            <option value="Party">Party</option>
            <option value="Graduation">Graduation</option>
            <option value="Meeting">Meeting</option>
            <option value="Exhibition">Exhibition</option>
            <option value="Seminar">Seminar</option>
            <option value="Workshop">Workshop</option>
          </select>
        </div>

        <button type="submit">Book Event</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default EventBookingForm;

