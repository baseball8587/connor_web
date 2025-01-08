// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

function App() {
  // 1) Create a cart state in App.js
  const [cart, setCart] = useState([]);

  // 2) Define a function to add items to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      {/* Pass the cart length to the Header to display the count */}
      <Header cartCount={cart.length} />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* Pass handleAddToCart down to Shop so it can call this function */}
          <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Pass the cart array to the Cart page so it can display items */}
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
