import React from 'react';
import Image from 'next/image';

export const Card = (props: any) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-64">
        <Image src={props.image} alt={props.category} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">{props.category}</h3>
        <p className="text-gray-600 mt-2">${props.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
