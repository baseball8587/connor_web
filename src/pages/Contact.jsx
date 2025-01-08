import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Message sent! Thank you for contacting me.");
    // Reset form if needed
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section style={{ padding: "2rem" }}>
      <h1>Contact Me</h1>
      <p>Have a question or want to book a session? Reach out!</p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1rem",
          maxWidth: "500px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem" }}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          style={{ padding: "0.5rem" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          style={{ padding: "0.5rem" }}
        />
        <button
          type="submit"
          style={{ padding: "0.75rem", cursor: "pointer", backgroundColor: "#ccc" }}
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
