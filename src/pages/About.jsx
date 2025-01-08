import React from "react";

function About() {
  return (
    <section style={{ padding: "2rem" }}>
      <h1>About Me</h1>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ flex: 1 }}>
          <img
            src="https://via.placeholder.com/400"
            alt="Photographer"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div style={{ flex: 2 }}>
          <p>
            Hi! I'm Connor Meyer, a passionate photographer with a love for
            capturing special moments. My journey began ...
          </p>
          <p>
            I specialize in landscapes, weddings, and portrait photography. In
            addition to my professional work, I offer workshops and mentorships
            ...
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
