import React from "react";
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const logoImage = '/images/logo.png'; 
const storeImage = '/images/store-icon.avif'; 
const paymentImage = '/images/payment.png'; 


const Footer = () => {
  return (
    <footer id="footer-main" className="container">
    <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
            <NavLink className="" to="/">
                <img src={logoImage} alt="Urbansnitch Logo" className="logo-img" />
            </NavLink>
            <h4>Contact</h4>
            <p><strong>Address:</strong> E-83, Sector-1, Noida</p>
            <p><strong>Phone:</strong> 0120-123456</p>
            <p><strong>Email:</strong> urbansnitch_support@gmail.com </p>
            <div className="social-handles">
            <h4>Follow Us</h4>
            <div className="social-icons">
                <FontAwesomeIcon  className="i" icon={faFacebookF} size="lg" />
                <FontAwesomeIcon className="i" icon={faInstagram} size="lg" />
                <FontAwesomeIcon className="i" icon={faTwitter} size="lg" />
                <FontAwesomeIcon className="i" icon={faYoutube} size="lg" />
            </div>
        </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 footer-box">
            <h4>About</h4>
            <ul>
                <li><NavLink to="/" href>About Us</NavLink></li>
                <li><NavLink to="/" href>Careers</NavLink></li>
                <li><NavLink to="/" href>Press</NavLink></li>
                <li><NavLink to="/" href>Blog</NavLink></li>
            </ul>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 footer-box">
            <h4>My Account</h4>
            <ul>
                <li><NavLink to="/" href>Sign in</NavLink></li>
                <li><NavLink to="/" href>View Cart</NavLink></li>
                <li><NavLink to="/" href>My wishlist</NavLink></li>
                <li><NavLink to="/" href>Help</NavLink></li>
            </ul>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 footer-box">
            <h4>Install App</h4>
            <p>From Google Play or Apple Store</p>
            <div className="app-logo">
              <img src={storeImage} alt="Store-img" className="payment-img" />
            </div>
            <p>Secured Payment Gateways</p>
            <NavLink className="navbar-brand" to="/">
                <img src={paymentImage} alt="payment Logo" className="payment-img" />
            </NavLink>
        </div>
    </div>
</footer>

  );
}

export default Footer;



      
