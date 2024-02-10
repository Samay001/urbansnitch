import React, { useState } from "react";
import { useCart } from "../../context/cartContext";

const CartProductBox = ({ product }) => {
  const { removeItemFromCart } = useCart();
  const [quantity, setQuantity] = useState(product.quantity);

  const increment = () => {
    if (quantity >= 1) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleClearProduct = () => {
    removeItemFromCart(product.id);
  };

  return (
    <div className="row border-top border-bottom">
      <div className="row main align-items-center">
        <div className="col-2">
          <img
            className="img-fluid cartProductImage"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="col">
          <div className="row text-muted">{product.name}</div>
          <div className="row">{product.quantity}</div>
        </div>
        <div className="col d-flex align-items-center justify-content-between">
          <button className="decrementButton" type="button" onClick={decrement}>
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button className="decrementButton" type="button" onClick={increment}>
            +
          </button>
        </div>
        <div className="col">
          Rs {product.price}{" "}
          <button className="close" type="button" onClick={handleClearProduct}>
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductBox;
