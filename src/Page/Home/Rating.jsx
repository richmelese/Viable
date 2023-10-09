import React, { useState } from 'react';

const Rating = () => {
  const [ratings, setRatings] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  const handleRatingChange = (rating) => {
    const newRatings = [...ratings, rating];
    setRatings(newRatings);
    const total = newRatings.reduce((sum, value) => sum + value, 0);
    setAverageRating(total / newRatings.length);
  };

  return (
    <div className="rating-container">
      <h2>Rating App</h2>
      <div className="rating-buttons">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            onClick={() => handleRatingChange(rating)}
          >
            {rating}
          </button>
        ))}
      </div>
      <div className="average-rating">
        Average Rating: {averageRating.toFixed(2)}
      </div>
    </div>
  );
};

export default Rating;
