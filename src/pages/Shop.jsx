// src/pages/Shop.jsx
import React from "react";

function Shop({ onAddToCart }) {
  // Placeholder products
  const products = [
    {
      id: 1,
      name: "Landscape Print",
      price: 49.99,
      image: "https://via.placeholder.com/400",
    },
    {
      id: 2,
      name: "Wedding Album",
      price: 99.99,
      image: "https://via.placeholder.com/400",
    },
    {
      id: 3,
      name: "Portrait Session",
      price: 199.99,
      image: "https://via.placeholder.com/400",
    },
  ];

  return (
    <section style={{ padding: "2rem" }}>
      <h1>Shop</h1>
      <p>Purchase fine art prints, albums, or book a session.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", objectFit: "cover" }}
            />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button
              onClick={() => onAddToCart(product)}
              style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shop;
