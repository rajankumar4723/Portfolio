import React, { useState } from "react";
import axios from "axios";
import "../styles/Contact.css";
import Footer from "./Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(
        "https://portfolio-server-ltdq.onrender.com/api/contact/sendmessage",
        formData
      );
      toast.success("Message sent successfully!");
      setSubmitted(true); 
    } catch (error) {
      toast.error("❌ Failed to send. Try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        {!submitted ? (
          <>
            <h1 className="animate-pop">Get In Touch</h1>
            <p className="subtitle">I'd love to hear from you. Let's build something great!</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              <button type="submit" className={isSubmitting ? "loading-btn" : "submit-btn"}>
                {isSubmitting ? "Sending..." : "Send Message 🚀"}
              </button>
            </form>
          </>
        ) : (
          <div className="success-message animate-bounce-in">
            <div className="success-icon">🎉</div>
            <h2>Thank You, {formData.name}!</h2>
            <p>Your message has been received. I'll get back to you shortly.</p>
            <button onClick={() => setSubmitted(false)} className="back-btn">
              Send Another Message
            </button>
          </div>
        )}
      </div>
      <Footer />
      {/* ToastContainer will now follow the global theme automatically */}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Contact;