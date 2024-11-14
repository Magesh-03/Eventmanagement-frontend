
import React from 'react';
import './CustomerReviews.css';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      image: 'customer1.jpg',
      name: 'Ajith kumar',
      review: 'The event planning was outstanding. Every detail was perfect!',
    },
    {
      id: 2,
      image: 'customer2.jpg',
      name: 'Hardik pandya',
      review: 'The best event management team we could ask for!',
    },
    {
      id: 3,
      image: 'customer3.jpg',
      name: 'Messi',
      review: 'Incredible experience! Highly recommend their services!',
    },
  ];

  return (
    <div className="reviews-container">
      <h2>Customer Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <img src={review.image} alt={review.name} className="review-image" />
            <h3 className="review-name">{review.name}</h3>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
