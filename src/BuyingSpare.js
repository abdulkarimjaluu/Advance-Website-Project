import React from 'react';
import Part6 from './Assets/Part 6.PNG'
import Part5 from './Assets/Part 5.PNG'
import Part4 from './Assets/Part 4.PNG'
import Part3 from './Assets/Part 3.PNG'
import Part2 from './Assets/Part 2.PNG'
import Part1 from './Assets/Part 1.PNG'
import './BuyingSpare.css';

const BuySpareParts = () => {
  const spareParts = [
    {
      img: Part6, 
      part: 'Engine Oil',
      price: '10,000',
      description: 'High quality engine oil for smooth performance.',
    },
    {
      img: Part5,  
      part: 'Brake Pads',
      price: '8,000',
      description: 'Durable brake pads for safe stopping.',
    },
    {
      img: Part4,  
      part: 'Air Filter',
      price: '5,000',
      description: 'Efficient air filters for clean engine operation.',
    },
    {
      img: Part3, 
      part: 'Engine Oil',
      price: '10,000',
      description: 'High quality engine oil for smooth performance.',
    },
    {
      img: Part2,  
      part: 'Brake Pads',
      price: '8,000',
      description: 'Durable brake pads for safe stopping.',
    },
    {
      img: Part1,  
      part: 'Air Filter',
      price: '5,000',
      description: 'Efficient air filters for clean engine operation.',
    },
  ];

  return (
    <div className="buy-spare-parts">
      <h2>Buy Spare Parts</h2>
      <div className="spare-parts-content">
        {spareParts.map((part, index) => (
          <div className="spare-part-box" key={index}>
            <img src={part.img} alt={part.model} />
            <span>Part: {part.part}</span>
            <h3>Specifications</h3>
            <p>Price: {part.price}</p>
            <p>Description: {part.description}</p>
            <a href="#buy-now" className="btn">Buy Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuySpareParts;
