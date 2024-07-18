import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
 
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/Blogpage',
    display: 'BlogPage'
  }
];

const Header = () => {
  return (
    <header className="header">
      <div className="nav-wrapper">
        <div className="logo">
          <h1>
            <i className="ri-car-line"></i>
            CarHub
          </h1>
        </div>
        <div className="navigation">
          <div className="menu">
            {navLinks.map((item, index) => (
              <NavLink
                to={item.path}
                className={(navClass) =>
                  navClass.isActive ? 'nav__active nav__item' : 'nav__item'
                }
                key={index}
              >
                {item.display}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="nav-right">
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <span>
              <i className="ri-search-line"></i>
            </span>
          </div>
          <div className="user">
            <NavLink to="/login" className="login-button">Login</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
