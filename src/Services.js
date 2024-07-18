import React from 'react';
import explorePic from './Assets/BMW.JPG';
import explorePict from './Assets/Ford.JPG';
import explorePi from './Assets/Mini.JPG';
import explorePicx from './Assets/Crown.JPG';
import explorePicz from './Assets/Audi.JPG';
import explorePick from './Assets/Cruiser.JPG';
import RentCar from './RentCar';
import Header from './Header';
import BuySpareParts from './BuyingSpare';
import './Services.css'; 
import Footer from './Footer';

const Services = () => {
  const carsForSale = [
    {
      img: explorePic,
      model: 'BMW X3',
      price: '24.8M',
      year: 2012,
      type: 'Sun Roof',
      color: 'Silver',
      engine: 'Cc 1990',
    },
    {
      img: explorePict,
      model: 'Ford Ranger',
      price: '159M',
      year: 2015,
      type: 'C200AMG',
      color: 'Black',
      engine: 'Cc 1500',
    },
    {
      img: explorePi,
      model: 'Mini Cooper SD CrossOver',
      price: '45M',
      year: 2016,
      mileage: '95000km',
      color: 'Black',
      engine: '2.0L',
    },
    {
      img: explorePicx,
      model: 'Crown Athletes',
      price: '69M',
      year: 2013,
      mileage: '5000km',
      color: 'Silver',
      engine: 'Cc 2500',
    },
    {
      img: explorePicz,
      model: 'AUDI S4 TFSi quattro',
      price: '106M',
      year: 2018,
      mileage: '95300km',
      color: 'Blue',
      engine: 'Cc 2995',
    },
    {
      img: explorePick,
      model: 'TOYOTA LANDCRUISER',
      price: '185M',
      year: 2015,
      mileage: '61014km',
      color: 'Black',
      engine: 'VX V8',
    },
  ];

  return (
    <div className="explore">
      <Header/>
      <section className="news" id="news">
        <div className="container">
          <div className="heading">
            <span>Hot Offer</span>
            <h2>Our Car Is Always Excellent</h2>
            <h2>Car For Sale</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo rerum debitis iste exercitationem minus at doloribus quaerat mollitia dolor aliquid officia voluptate dicta, deleniti et maxime laudantium nihil tempora aspernatur?</p>
          </div>
          <div className="content">
            {carsForSale.map((car, index) => (
              <div className="box" key={index}>
                <img src={car.img} alt={car.model} />
                <span>Car Model: {car.model}</span>
                <h3>Specifications</h3>
                <p>Price: {car.price}</p>
                <ul>
                  <li>Year: {car.year}</li>
                  <li>Type: {car.type || 'N/A'}</li>
                  <li>Color: {car.color}</li>
                  <li>Engine: {car.engine}</li>
                  {car.mileage && <li>Mileage: {car.mileage}</li>}
                </ul>
                <a href="/BookingForm" className="btn">Buy now</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RentCar />
      <BuySpareParts/>
      <Footer/>
    </div>
  );
};

export default Services;
