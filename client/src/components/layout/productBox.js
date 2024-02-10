import React from "react";
import { NavLink } from "react-router-dom";
import "./productBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/cartContext";

const ProductBox = ({ product }) => {
  const { addItemToCart } = useCart();

  const handleAddToCart = () => {
    console.log("Adding item to cart:", product);
    addItemToCart(product);
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="pro-box">
          <div className="pro-img">
            <NavLink to={`/product/${product.id}`}>
              <img src={product.image} alt="product" />
            </NavLink>
          </div>
          <div className="pro-text">
            <p style={{ color: "#000000" }}>{product.name}</p>
            <p>{product.description}</p>
            <p>Rs.{product.price}</p>
          </div>
          <div className="add-to-cart">
            <button
              className="btn btn-add-to-cart"
              onClick={handleAddToCart}
            >
              <FontAwesomeIcon className="i" icon={faShoppingCart} size="lg" />
            </button>
          </div>
          <div className="size-btn">
            <button
              className={`btn btn-outline-secondary size `}
            >
              S
            </button>

            <button
              className={`btn btn-outline-secondary size`}
            >
              M
            </button>

            <button
              className={`btn btn-outline-secondary size`}
            >
              L
            </button>

            <button
              className={`btn btn-outline-secondary size `}
            >
              XL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
