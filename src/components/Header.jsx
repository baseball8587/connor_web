// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        backgroundColor: "#f8f8f8",
      }}
    >
      {/* Logo / Brand Name */}
      <div>
        <Link to="/" style={{ textDecoration: "none", fontSize: "1.5rem" }}>
          CWM Photography
        </Link>
      </div>

      {/* Navigation */}
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1rem",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* Cart Link with count */}
          <li>
            <Link to="/cart">Cart ({cartCount})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
