import React from "react";
import { NavLink } from "react-router-dom";
import "./productBox.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductBox = ({ product }) => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="pro-box">
          <div className="pro-img">
            <NavLink >
              <img src={product.image} alt="product" />
            </NavLink>
          </div>
          <div className="pro-text">
            <p style={{ color: "#000000" }}>{product.name}</p>
            <p>{product.description}</p>
            <p>Rs.{product.price}</p>
          </div>
          <div className="add-to-cart">
            <button className="btn btn-add-to-cart"> 
              <FontAwesomeIcon className="i" icon={faShoppingCart} size="lg" />
            </button>
          </div>
          <div className="">
            <div className="size-btn">
              <button className="btn btn-outline-secondary size">S</button>
              <button className="btn btn-outline-secondary size">M</button>
              <button className="btn btn-outline-secondary size">L</button>
              <button className="btn btn-outline-secondary size">XL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
