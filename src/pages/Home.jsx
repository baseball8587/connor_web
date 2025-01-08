import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      {/* Hero Section */}
      <div
        style={{
          height: "50vh",
          background: "url('https://via.placeholder.com/1200x600') center/cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: "0.5rem 0" }}>
          Capturing Moments That Last Forever
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
          Explore my portfolio or shop fine art prints.
        </p>
        <Link
          to="/portfolio"
          style={{
            backgroundColor: "#fff",
            color: "#000",
            padding: "0.75rem 1.5rem",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          View Portfolio
        </Link>
      </div>

      {/* Featured Portfolio Highlights */}
      <div style={{ padding: "2rem" }}>
        <h2>Featured Works</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {/* Replace with real images or a map of your featured items */}
          <div style={{ backgroundColor: "#ccc", height: "200px" }}>Photo 1</div>
          <div style={{ backgroundColor: "#ccc", height: "200px" }}>Photo 2</div>
          <div style={{ backgroundColor: "#ccc", height: "200px" }}>Photo 3</div>
        </div>
      </div>

      {/* Optional: Testimonials or Newsletter Sign-Up */}
      <div style={{ padding: "2rem", background: "#fafafa" }}>
        <h2>Join My Newsletter</h2>
        <p>Get exclusive discounts and be the first to know about new collections.</p>
        <form>
          <input
            type="email"
            placeholder="Your Email"
            style={{ padding: "0.5rem", marginRight: "0.5rem" }}
          />
          <button
            type="submit"
            style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Home;
