import React, { useState } from "react";

function Portfolio() {
  // Example portfolio categories or images
  const images = [
    { id: 1, url: "https://via.placeholder.com/400x300", category: "Landscape" },
    { id: 2, url: "https://via.placeholder.com/400x300", category: "Wedding" },
    { id: 3, url: "https://via.placeholder.com/400x300", category: "Portrait" },
    // ... add more
  ];

  // State to hold the currently selected filter. Default is "All" to show everything.
  const [filter, setFilter] = useState("All");

  // Compute the filtered images based on the selected category
  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <section style={{ padding: "2rem" }}>
      <h1>Portfolio</h1>
      <p>Explore my collection of photographs from various categories.</p>

      {/* Filter / Category Buttons */}
      <div style={{ margin: "1rem 0" }}>
        <button onClick={() => setFilter("All")} style={{ marginRight: "0.5rem" }}>
          All
        </button>
        <button
          onClick={() => setFilter("Landscape")}
          style={{ marginRight: "0.5rem" }}
        >
          Landscape
        </button>
        <button
          onClick={() => setFilter("Wedding")}
          style={{ marginRight: "0.5rem" }}
        >
          Wedding
        </button>
        <button
          onClick={() => setFilter("Portrait")}
          style={{ marginRight: "0.5rem" }}
        >
          Portrait
        </button>
      </div>

      {/* Image Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {filteredImages.map((img) => (
          <div
            key={img.id}
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "75%", // 4:3 aspect ratio
              backgroundImage: `url(${img.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Optional overlay or hover effect */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
