import React from 'react';
// import { NavLink } from 'react-router-dom';

const Banner = ({ imageUrl, altText, text }) => {
  return (
    <div className="container my-4 position-relative">
      <div className="row justify-content-center">
        <div className="col-lg-8 position-relative">
          {text && (
            <div className="banner-text mb-3">
              <p style={{ fontSize: '1.5rem', color: '#3b3b3b', textAlign: 'center', padding: '10px' }}>
                {text}
              </p>
            </div>
          )}
          <img src={imageUrl} alt={altText} className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
