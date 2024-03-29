import React, { useState } from "react";
import { useCart } from "../../context/cartContext";
import "./style/cardProductBox.css";

const CartProductBox = ({ product }) => {
  const { removeItemFromCart,updateTotalPrice } = useCart();
  const [quantity, setQuantity] = useState(product.quantity);

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateTotalPrice(product.id, newQuantity);
  };
  
  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateTotalPrice(product.id, newQuantity);
  }
};

  const handleClearProduct = () => {
    removeItemFromCart(product.id);
  };

  return (
    <div
      className="row"
      style={{
        borderTop: "2px solid #FFE9A3",
        borderBottom: "2px solid #FFE9A3",
        padding: "2vh 0",
      }}
    >
      <div className="row main align-items-center">
        <div className="col-2">
          <img
            className="img-fluid cartProductImage"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="col name">
          <div className="row text-white">{product.name}</div>
          <div className="row text-white">{product.description}</div>
        </div>
        <div className="col">
          <div className="row text-white">Size: {product.size}</div>
        </div>
        <div className="col d-flex align-items-center justify-content-between">
          <button
            className="decrementButton custom-btn"
            type="button"
            onClick={decrement}
          >
            -
          </button>
          <span className="mx-2 text-white">{quantity}</span>
          <button
            className="decrementButton custom-btn"
            type="button"
            onClick={increment}
          >
            +
          </button>
        </div>
        <div className="col text-center">
        <span className="text-white">Rs {product.totalPrice.toFixed(2)}</span>{" "}
          <button
            className="close custom-btn "
            type="button"
            onClick={handleClearProduct}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductBox;
