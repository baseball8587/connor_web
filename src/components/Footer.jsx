import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div style={{ marginBottom: "0.5rem" }}>
        <Link to="/portfolio" style={{ margin: "0 0.5rem" }}>
          Portfolio
        </Link>
        <Link to="/shop" style={{ margin: "0 0.5rem" }}>
          Shop
        </Link>
        <Link to="/about" style={{ margin: "0 0.5rem" }}>
          About
        </Link>
        <Link to="/contact" style={{ margin: "0 0.5rem" }}>
          Contact
        </Link>
      </div>
      <div>
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} CWM Photography. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
