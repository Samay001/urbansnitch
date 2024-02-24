import React, { useState, createContext, useContext, useEffect } from "react";

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
      alert("Item already in cart");
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

  const updateTotalPrice = (id, price) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, price: item.price + price };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    console.log(updatedCartItems);
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
