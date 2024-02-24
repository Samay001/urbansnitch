import React from "react";
import { NavLink } from "react-router-dom";
import "./style/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to top
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* First Section */}
          <div className="col-md-4 custom-border section ">
            <h2>NAVIGATION</h2>
            <div className="row">
              <div className="col">
                <ul className="list-unstyled">
                  <li>
                    <NavLink to="/men" onClick={scrollToTop}>Men</NavLink>
                  </li>
                  <li>
                    <NavLink to="/women" onClick={scrollToTop}>Women</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-unstyled">
                  <li>
                    <NavLink to="/kids" onClick={scrollToTop}>Kids</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart" onClick={scrollToTop}>Cart</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <NavLink to="/register" onClick={scrollToTop}>
              <button className="btn">Sign Up</button>
            </NavLink>
          </div>

          {/* Second Section */}
          <div
            className="col-md-4 custom-border section"
            style={{ textAlign: "center" }}
          >
            <h2>URBAN SNITCH</h2>
            <p class="text-uppercase">
              Upgrade your daily wardrobe with our Timeless and high quality
              prices,designed to seamlessly transition from work to play.
            </p>
            <div className="quick-links">
              <h4>Quick Links</h4>
              <div className="link-container">
                <NavLink to="/contact">
                  Contact Us
                </NavLink>
                <NavLink to="/about">
                  About Us
                </NavLink>
              </div>
            </div>
          </div>

          {/* Third Section */}
          <div className="col-md-4 section">
            <h2>FOLLOW US</h2>
            <ul className="list-unstyled">
              <li>
                <span>
                  <FontAwesomeIcon icon={faFacebook} />
                </span>
                <a
                  href="https://github.com/Samay001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
                <a
                  href="https://github.com/Samay001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
                <a
                  href="https://github.com/Samay001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row" style={{ padding: "10px" }}>
          <div className="col-md-12 text-center">
            <p>&copy; 2023 Urban Snitch</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
