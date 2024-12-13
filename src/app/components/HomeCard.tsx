import React from 'react';
import { Card } from './Card';

const HomeCard = () => {
  const items = [
    {
      image: '/pots.jpg',
      category: 'Electronics',
      price: 199.99,
    },
    {
      image: '/clay.jpg',
      category: 'Clothing',
      price: 49.99,
    },
    {
      image: '/chair.jpg',
      category: 'Books',
      price: 15.99,
    },
    {
      image: '/Bedroom.jpg',
      category: 'Furniture',
      price: 299.99,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
