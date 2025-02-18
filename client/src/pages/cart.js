import React, { useEffect, useState } from "react";
import "./style/cart.css";
import Layout from "../components/layout/layout";
import CartProductBox from "../components/layout/cartProductBox";
import { useCart } from "../context/cartContext";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/auth";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cartItems, promoCode, clearCart } = useCart();
  const [auth] = useAuth();
  const [inputPromoCode, setInputPromoCode] = useState("");
  const [price, setPrice] = useState(0);
  const [netPrice, setNetPrice] = useState(0);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (inputPromoCode === promoCode && !(cartItems.length === 0)) {
        e.preventDefault();
        const discountFactor = 0.9;
        const discountedCartPrice = price * discountFactor;
        console.log(discountedCartPrice);
        setNetPrice(discountedCartPrice);
        toast.success("Promo Code Applied");
      } 
      else if (cartItems.length === 0) {
        toast.error("Cart is empty");
        e.preventDefault();
      }
      else {
        toast.error("Invalid Promo Code. Enter SAMAY for 10% discount");
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    setNetPrice(price);
  }, [price]);

  const handleCheckout = async () => {
    try {
      toast.loading("Please wait while it's loading...");

      const stripe = await loadStripe("pk_test_51OiEITSB0hgPpt6fqZzkYl8a6REnI80ZZ5jXVxd44JHCjhZNvsLtwvyMweJU14uPuT5DYQEbBf003P1BI3tAawe100bg42uDYS");

      const body = {
        products: cartItems.map(item => ({
          ...item,
          price: Math.round(item.price) // Ensure price is an integer
        })),
      };

      const headers = { "Content-Type": "application/json" };

      const response = await axios.post(
        "https://urbansnitch.onrender.com/api/v1/orders",
        body,
        { headers }
      );

      const session = response.data;  

      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        toast.error(error.message);
      }
    } catch (error) {
      toast.error("Error during checkout");
    }
};


  const clearFullCart = () => {
    if(cartItems.length === 0) return toast.error("Cart is already empty");
    toast.success("Cart Cleared");
    clearCart();
  };

  const handleTotalPrice = () => {
    let ans = 0;
    cartItems.map((product) => (ans += product.totalPrice));
    setPrice(ans);
  };

  useEffect(() => {
    handleTotalPrice();
  }, [cartItems]);

  return (
    <Layout>
      <div className="wrpper pb-4">
        <div >
          <h1>Cart</h1>
        </div>
        <div className="card ">
          <div className="row masla">
            <div className="col-md-8 cart">
              <div className="title mb-4">
                <div className="row">
                  <div className="col align-self-center text-right text-muted d-flex justify-content-between">
                    <span className="total-item" >{`Items ${cartItems.length}`}</span>
                    <span className="">
                      <button
                        type="button "
                        className="clear-btn"
                        onClick={clearFullCart}
                      >
                        Clear Cart
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="product-heading">
                <div className="row justify-content-between align-items-center">
                  <div className="col text-white text-center ">
                    <b>Name</b>
                  </div>
                  <div className="col text-white text-center">
                    <b>Size</b>
                  </div>
                  <div className="col text-white text-center">
                    <b>Quantity</b>
                  </div>
                  <div className="col text-white text-center">
                    <b>Price</b>
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

            <div className="col-md-4 summary pb-4">
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
                <div className="col text-right">Rs {Math.round(price)}</div>
              </div>
              <form>
                <p>COUPON CODE</p>
                <input
                  id="code"
                  placeholder="CODE: SAMAY"
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
                <div className="col text-right">Rs {Math.round(netPrice) }</div>
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
      </div>
    </Layout>
  );
};

export default Cart;
