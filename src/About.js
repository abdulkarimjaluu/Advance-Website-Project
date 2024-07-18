/* eslint-disable no-unused-vars */
import React from 'react';
import './About.css';
import './Footer.js';
import Header from './Header.js';
import Footer from  './Footer.js'
import about from './Assets/Car7.JPG'
import about1 from './Assets/About3.JPG'

const About = () => {
  return (
    <main>
      <Header/>
      <section className='about-content'>
       <div className='about-commitment'>
        <img src={about1} alt='About'/>
        <div className='commitment-text'>
          <h3>We Are Committed To Provide Safe Ride Solutions</h3>
          <p>Welcome to CarHub, where we redefine your driving experience. Our mission is to provide high-quality cars for sale and rental services, ensuring that you find the perfect vehicle to suit your needs.</p>
              <p>At CarHub, we pride ourselves on transparency, customer satisfaction, and a diverse selection of vehicles. Whether you're looking to purchase a car or rent one for your next adventure, we've got you covered.</p>
              <p>Our team consists of passionate automotive enthusiasts dedicated to assisting you throughout your car-buying or rental journey. We value your trust and strive to make every interaction with us memorable.</p>
        <p>Need Any Help? +255766416625</p>
        </div>
       </div>
      </section>
      <Footer/>
    </main>
  )
}
export default About;