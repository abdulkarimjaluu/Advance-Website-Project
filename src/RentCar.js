import React from 'react';
import alphard from './Assets/Alphard.JPG';
import harrier from './Assets/Harrier.JPG';
import bmw from './Assets/BMW.JPG';
import range from './Assets/Range.JPG';
import dualis from './Assets/Dualis.JPG';
import car from './Assets/Car4.JPG';
import './RentCar.css';

const RentCar = () => {
  const carsForRent = [
    {
      img: alphard, 
      model: 'Toyota Alphard',
      price: '50,000/day',
      year: 2018,
      type: 'Sedan',
      color: 'Black',
      engine: '2.5L',
    },
    {
      img: harrier, 
      model: 'Honda Civic',
      price: '45,000/day',
      year: 2020,
      type: 'Sedan',
      color: 'Black',
      engine: '1.8L',
    },
    {
      img: bmw,  
      model: 'BMW X5',
      price: '100,000/day',
      year: 2019,
      type: 'SUV',
      color: 'Blue',
      engine: '3.0L',
    },
    {
      img: range,
      model: 'Range',
      price: '50,000/day',
      year: 2018,
      type: 'Sedan',
      color: 'White',
      engine: '2.5L',
    },
    {
      img: dualis,
      model: 'Toyota Dualis',
      price: '45,000/day',
      year: 2020,
      type: 'Sedan',
      color: 'Silver',
      engine: '1.8L',
    },
    {
      img: car,
      model: 'BMW X5',
      price: '100,000/day',
      year: 2019,
      type: 'SUV',
      color: 'Blue',
      engine: '3.0L',
    },
  ];

  return (
    <div className="rent-car">
      <h2>Rent a Car</h2>
      <div className="rent-content">
        {carsForRent.map((car, index) => (
          <div className="rent-box" key={index}>
             <img src={car.img} alt={car.model} />
            <span>Car Model: {car.model}</span>
            <h3>Specifications</h3>
            <p>Price: {car.price}</p>
            <ul>
              <li>Year: {car.year}</li>
              <li>Type: {car.type}</li>
              <li>Color: {car.color}</li>
              <li>Engine: {car.engine}</li>
            </ul>
            <a href="/BookingForm" className="btn">Rent Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentCar;
