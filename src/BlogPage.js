import React from 'react';
import './BlogPage.css'; 
import Footer from './Footer';
import Header from './Header';
import About from './Assets/About1.JPG';
import About2 from './Assets/About2.JPG';
import About3 from './Assets/About3.JPG';

const Blogpage = () => {
  return (
    <div className="contact-container">
      <Header />
      <section className="news" id="news">
        <div className="container">
          <div className="heading">
            <span>Blog & News</span>
            <h2>Our Blog Content</h2>
            <p>Welcome to CarHub, the online platform dealing with car sales and rentals. Discover your dream ride or plan your next adventure with our seamless car sales and rental platform. Browse our extensive inventory of top-notch vehicles, from sleek sedans to robust SUVs, all just a click away. Ready to hit the road? Start your journey with us today!</p>
          </div>
          <div className="content">
            <div className="box">
              <img src={About} alt="About1" />
              <span>Jan 19, 2024</span>
              <h3>How To Get The Perfect Car At A Low Price</h3>
              <p>Welcome to CarHub, where we redefine your driving experience. Our mission is to provide high-quality cars for sale and rental services, ensuring that you find the perfect vehicle to suit your needs.</p>
              <p>At CarHub, we pride ourselves on transparency, customer satisfaction, and a diverse selection of vehicles. Whether you're looking to purchase a car or rent one for your next adventure, we've got you covered.</p>
            </div>
            <div className="box">
              <img src={About2} alt="About2" />
              <span>Jan 19, 2024</span>
              <h3>How To Get The Perfect Car At A Low Price</h3>
              <p>Welcome to CarHub, where we redefine your driving experience. Our mission is to provide high-quality cars for sale and rental services, ensuring that you find the perfect vehicle to suit your needs.</p>
              <p>At CarHub, we pride ourselves on transparency, customer satisfaction, and a diverse selection of vehicles. Whether you're looking to purchase a car or rent one for your next adventure, we've got you covered.</p>
            </div>
            <div className="box">
              <img src={About3} alt="About3" />
              <span>Jan 19, 2024</span>
              <h3>How To Get The Perfect Car At A Low Price</h3>
              <p>Welcome to CarHub, where we redefine your driving experience. Our mission is to provide high-quality cars for sale and rental services, ensuring that you find the perfect vehicle to suit your needs.</p>
              <p>At CarHub, we pride ourselves on transparency, customer satisfaction, and a diverse selection of vehicles. Whether you're looking to purchase a car or rent one for your next adventure, we've got you covered.</p>
            </div>
          </div>
          <div className="content">
            <div className="box">
              <img src={About} alt="About1" />
              <span>Jan 19, 2024</span>
              <h3>How To Get The Perfect Car At A Low Price</h3>
              <p>Welcome to CarHub, where we redefine your driving experience. Our mission is to provide high-quality cars for sale and rental services, ensuring that you find the perfect vehicle to suit your needs.</p>
              <p>At CarHub, we pride ourselves on transparency, customer satisfaction, and a diverse selection of vehicles. Whether you're looking to purchase a car or rent one for your next adventure, we've got you covered.</p>
            </div>
            <div className="box">
              <img src={About2} alt="About2" />
              <span>Jan 19, 2024</span>
              <h3>How To Get The Perfect Car At A Low Price</h3>
              <p>Welcome to CarHub, where we redefine your driving experience. Our mission is to provide high-quality cars for sale and rental services, ensuring that you find the perfect vehicle to suit your needs.</p>
              <p>At CarHub, we pride ourselves on transparency, customer satisfaction, and a diverse selection of vehicles. Whether you're looking to purchase a car or rent one for your next adventure, we've got you covered.</p>
            </div>
            <div className="box">
              <img src={About3} alt="About3" />
              <span>Jan 19, 2024</span>
              <h3>How To Get The Perfect Car At A Low Price</h3>
              <p>Welcome to CarHub, where we redefine your driving experience. Our mission is to provide high-quality cars for sale and rental services, ensuring that you find the perfect vehicle to suit your needs.</p>
              <p>At CarHub, we pride ourselves on transparency, customer satisfaction, and a diverse selection of vehicles. Whether you're looking to purchase a car or rent one for your next adventure, we've got you covered.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogpage;
