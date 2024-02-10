import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import Layout from "../components/layout/layout";
import CartProductBox from "../components/layout/cartProductBox";
import { useCart } from "../context/cartContext";
import axios from "axios";

const Cart = () => {
  const { cartItems, promoCode, clearCart } = useCart();
  const [inputPromoCode, setInputPromoCode] = useState("");
  const [price, setPrice] = useState(0);
  const [netPrice, setNetPrice] = useState(0);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (inputPromoCode === promoCode) {
        e.preventDefault();
        const discountFactor = 0.9;
        const discountedCartPrice = price * discountFactor;
        console.log(discountedCartPrice);
        setNetPrice(discountedCartPrice);
        alert("Promo Code Applied");
      } else {
        alert("Invalid Promo Code");
        e.preventDefault();
      }
    }
  };

  const navigation = useNavigate();

  useEffect(() => {
    setNetPrice(price);
  }, [price]);

  const handleCheckout = async (e) => {
    
  };
  

  const clearFullCart = () => {
    clearCart();
  };

  const handleTotalPrice = () => {
    let ans = 0;
    cartItems.map((product) => (ans += product.price * product.quantity));
    console.log(ans);
    setPrice(ans);
  };

  useEffect(() => {
    handleTotalPrice();
  });

  return (
    <Layout>
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title mb-4">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  {`Items ${cartItems.length}`}
                </div>
                <div className="col align-self-center text-right text-muted mb-2">
                  <button type="button" className=" " onClick={clearFullCart}>
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="scroll-container">
              <div className="scroll-content">
                {cartItems.map((product) => (
                  <CartProductBox key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            <div className="row">
              <div className="col" style={{ paddingLeft: 0 }}>
                TOTAL: {cartItems.length}
              </div>
              <div className="col text-right">Rs {price.toFixed(2)}</div>
            </div>
            <form>
              <p>COUPON CODE</p>
              <input
                id="code"
                placeholder="Enter your code "
                value={inputPromoCode}
                onChange={(e) => setInputPromoCode(e.target.value)}
                onKeyDown={handleEnter}
              />
            </form>
            <div
              className="row"
              style={{
                borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">Rs {netPrice.toFixed(2)}</div>
            </div>
            <button
              className="checkout-btn"
              type="button"
              onClick={handleCheckout}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
