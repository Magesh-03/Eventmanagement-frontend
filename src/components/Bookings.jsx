import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/bookings');
        setBookings(response.data);
      } catch (error) {
        setMessage('Failed to load bookings. Please try again later.');
      }
    };

    fetchBookings();
  }, []);

  const handleDelete = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:4000/api/bookings/${bookingId}`);
      setBookings(bookings.filter((booking) => booking._id !== bookingId));
      setMessage('Booking deleted successfully.');
    } catch (error) {
      setMessage('Failed to delete booking. Please try again later.');
    }
  };

  return (
    <div className="bookings-container">
      <h1>Your Bookings</h1>
      {message && <p>{message}</p>}
      <ul>
  {bookings.map((booking) => (
    <li key={booking.id}>
      <p>
        {booking.eventName} - {new Date(booking.eventDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })} at {booking.eventTime}
      </p>
      <p>Booked by: {booking.name} ({booking.email})</p>
      
      <button onClick={() => handleDelete(booking.id)}>Delete Booking</button>
    </li>
  ))}
</ul>

    </div>
  );
};

export default Bookings;




