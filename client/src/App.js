import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import PageNotFound from "./pages/pageNotFound";
import Register from "./pages/Auth/register";
import Login from "./pages/Auth/login";
import Male from "./pages/Products/male";
import Female from "./pages/Products/female";
import Kids from "./pages/Products/kids";
import Cart from "./pages/cart";
import Success from "./pages/success";
import Failed from "./pages/failed";
import { CartContextProvider } from "./context/cartContext";
import { AuthProvider } from "./context/auth";

function App() {
  return (
  <AuthProvider>
    <CartContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/men" element={<Male />} />
        <Route path="/women" element={<Female />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CartContextProvider>
  </AuthProvider>
  );
}

export default App;
