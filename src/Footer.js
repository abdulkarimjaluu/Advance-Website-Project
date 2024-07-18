import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
<div className='footer-content'>
    <div className='footer-section'>
        <h3>Automotive Service</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Nulla id ipsa neque harum quod quae reiciendis et quasi illum
        alias. Vero ipsam a omnis! Totam nam eaque sequi voluptates
        doloribus?</p>
    </div>
    <div className='footer-section'>
        <h3>Quick Links</h3>
        <ul>
            <li><a href='/home'>Home</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/blogpage'>BlogPage</a></li>
            <li><a href='/login'>Login</a></li>
        </ul>
    </div>
    <div className='footer-section'>
      <h3>Head Office</h3>
      <p>Zanzibar, Tanzania</p>
      <p>phone: +255766416625</p>
      <p>Email: abdulkarimjaluu@gmail.com</p>
    </div>
    <div className='footer-section'>
      <h3>Newsletter</h3>
      <p>Subscribe to our Newsletter</p>
      <form>
        <input type='email' placeholder='Email'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
</div>
    </footer>
    
  )
}
export default Footer;