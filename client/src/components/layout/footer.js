import React from "react";
import { NavLink } from 'react-router-dom';
import payment from './payment.png';
import logo from './logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer-main">
        <div className="col-flex">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Urbansnitch Logo" className="logo-img" />
          </NavLink>
          <h4>Contact</h4>
          <p><strong>Address:</strong> E-83,Sector-1,Noida</p>
          <p><strong>Phone:</strong> 0120-123456</p>
          <p><strong>Email:</strong> urbansnitch_support@gmail.com </p>
          <div className="social-handles">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <i className="fab fa-facebook-f fa-lg" />
              <i className="fab fa-instagram fa-lg" />
              <i className="fab fa-twitter fa-lg" />
              <i className="fab fa-youtube fa-lg" />
            </div>  
          </div>
        </div>
        <div className="col-flex">
          <h4>About</h4>
          <ul>
            <li><NavLink to="/" href>About Us</NavLink></li>
            <li><NavLink to="/" href>Careers</NavLink></li>
            <li><NavLink to="/" href>Press</NavLink></li>
            <li><NavLink to="/" href>Blog</NavLink></li>
          </ul>
        </div>
        <div className="col-flex">
          <h4>My Account</h4>
          <ul>
            <li><NavLink to="/" href>Sign in</NavLink></li>
            <li><NavLink to="/" href>View Cart</NavLink></li>
            <li><NavLink to="/" href>My wishlist</NavLink></li>
            <li><NavLink to="/" href>Help</NavLink></li>
          </ul>
        </div>
        <div className="col-flex">
          <h4>Install App</h4>
          <p>From Google Play or Apple Store</p>
          <div className="app-logo">
            <img src="/images/play.jpg" alt="" />
            <img src="/images/app.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways</p> 
          <NavLink className="navbar-brand" to="/">
            <img src={payment} alt="payment Logo" className="payment-img" />
          </NavLink>
        </div>
    </footer>
  );
}

export default Footer;



      
