// components/Banner.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = ({ imageUrl, altText, linkTo }) => {
  const buttonStyle = {
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 600,
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
    border: '1px solid black',
  };

  return (
    <div className="container my-4 position-relative">
      <div className="row justify-content-center">
        <div className="col-lg-8 position-relative">
          <img src={imageUrl} alt={altText} className="img-fluid rounded" />
          <div className="shop-now-button text-center" style={buttonStyle}>
            <NavLink to={linkTo} className="btn" style={{ backgroundColor: 'white', color: 'black', textDecoration: 'none' }}>
              Shop Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;



