import React from 'react';
import Homeservice from './Homeservice';

const Card = () => {
  const cardsData = [
    {
      title: 'Card 1',
      description: 'This is the first card.',
      image: 'https://via.placeholder.com/300x200?text=Card+1'
    },
    {
      title: 'Card 2',
      description: 'This is the second card.',
      image: 'https://via.placeholder.com/300x200?text=Card+2'
    }
  ];

  return (
    <div>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default Card;
