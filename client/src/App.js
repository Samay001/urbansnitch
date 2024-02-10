import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import PageNotFound from "./pages/pageNotFound";
import Register from './pages/Auth/register';
import Login from './pages/Auth/login';
import Male from './pages/Products/male';
import Female from './pages/Products/female';
import Cart from './pages/cart';
import Orders from './pages/orders';
import { CartContextProvider } from './context/cartContext';

function App() {

  return (
    <>
    <CartContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/male" element={<Male />} />
        <Route path="/female" element={<Female />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        {/* <Route path="/" element={<Payment />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CartContextProvider>
      
    </>
  );
}

export default App;
