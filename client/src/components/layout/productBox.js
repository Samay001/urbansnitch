import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style/productBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/cartContext";

const ProductBox = ({ product }) => {
  const { addItemToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");

  const handleAddToCart = () => {
    if (selectedSize === "") {
      alert("Please select a size");
      return;
    }
    addItemToCart({ ...product, size: selectedSize });
  };

  return (
    <div className="container">
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
              className={`btn btn-outline-secondary size ${selectedSize === "S" ? "selected" : ""}`}
              onClick={() => setSelectedSize("S")}
            >
              S
            </button>

            <button
              className={`btn btn-outline-secondary size ${selectedSize === "M" ? "selected" : ""}`}
              onClick={() => setSelectedSize("M")}
            >
              M
            </button>

            <button
              className={`btn btn-outline-secondary size ${selectedSize === "L" ? "selected" : ""}`}
              onClick={() => setSelectedSize("L")}
            >
              L
            </button>

            <button
              className={`btn btn-outline-secondary size ${selectedSize === "XL" ? "selected" : ""}`}
              onClick={() => setSelectedSize("XL")}
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
