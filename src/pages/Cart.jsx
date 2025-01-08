import React from "react";

function Cart({ cart }) {
  return (
    <section style={{ padding: "2rem" }}>
      <h1>My Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "150px", objectFit: "cover" }}
            />
          </div>
        ))
      )}
    </section>
  );
}

export default Cart;
