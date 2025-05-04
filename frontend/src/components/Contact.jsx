import React, { useState } from "react";
import axios from "axios";
import "../styles/Contact.css";
import Footer from "./Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Show success immediately
    toast.success(" Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });

    // 🔄 Send request in background
    try {
      await axios.post(
        "https://portfolio-server-ltdq.onrender.com/api/contact/sendmessage",
        formData
      );
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
      toast.error("❌ Failed to send. Try again!");
    }
  };

  return (
    <>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Get in touch! I'd love to hear from you.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit">
            <i className="fa-solid fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
};

export default Contact;
