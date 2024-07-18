import React from 'react';
import Pic1 from './Assets/Car1.JPG';
import Pic2 from './Assets/Car2.JPG';
import Pic3 from './Assets/Car3.JPG';
import Pic4 from './Assets/Car4.JPG';
import Pic5 from './Assets/Car5.JPG';
import Pic6 from './Assets/Car6.JPG';
import Pic7 from './Assets/Car7.JPG';
import Pic8 from './Assets/Car8.JPG';
import Pic9 from './Assets/Car9.JPG';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="dashboard">
      <Header />
      <section className="dashboard-back">
        <h2>HIRE OR BUY YOUR FAVORITE CAR FROM US</h2>
        <h3>AND THE REST WILL BE HISTORY</h3>
      </section>
      <section className="dashboard-mid">
        <h1>VINTAGE CARS AVAILABLE</h1>
        <h2>CHECK OUT OUR TOP RATED FLEET</h2>
      </section>
      <section className="dashboard-slider">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={Pic1} alt="Car 1" />
            </div>
            <div className="slide">
              <img src={Pic2} alt="Car 2" />
            </div>
            <div className="slide">
              <img src={Pic3} alt="Car 3" />
            </div>
            <div className="slide">
              <img src={Pic4} alt="Car 4" />
            </div>
            <div className="slide">
              <img src={Pic5} alt="Car 5" />
            </div>
            <div className="slide">
              <img src={Pic6} alt="Car 6" />
            </div>
            <div className="slide">
              <img src={Pic7} alt="Car 7" />
            </div>
            <div className="slide">
              <img src={Pic8} alt="Car 8" />
            </div>
            <div className="slide">
              <img src={Pic9} alt="Car 9" />
            </div>
          </div>
        </div>
      </section>
    <Footer/>
    </div>
  );
}

export default Home;