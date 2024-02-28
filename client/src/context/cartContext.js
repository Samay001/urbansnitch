import React, { useState, createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const promoCode = "SAMAY";

  const addItemToCart = (product) => {
    let isPresent = false;
    cartItems.forEach((item) => {
      if (product.id === item.id)
        isPresent = true;
    });
    if (isPresent) {
      toast.error("Item already in cart");
      return;
    }
    setCartItems([...cartItems, product]);
  };
  

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateTotalPrice = (id, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, totalPrice: item.price * quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        promoCode,
        updateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
