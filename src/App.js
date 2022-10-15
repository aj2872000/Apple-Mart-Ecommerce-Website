import React from "react";
import {Route,Routes } from "react-router-dom";
// import { Navigate } from 'react-router-dom';
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ProductDetail from "./components/ProductDetail";

import './App.css';
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Product/>}/>
        <Route exact path="/products/:id" element={<ProductDetail/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/checkout" element={<Checkout/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
    // <div>
    // <Header/>
    // <Routes>
    //   <Route path="/" element={<Home/>}/>
    //   <Route path="/products" element={<Product/>}/>
    //   <Route path="/about" element={<About/>}/>
    //   <Route path="/contact" element={<Contact/>}/>
    //   {/* <Navigate path="/"/> */}
    //  </Routes> 
    
    // </div>
  );
}

export default App;
