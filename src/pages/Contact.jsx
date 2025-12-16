import React, { useState } from "react";
import { GOOGLE_SCRIPT_URL } from "../config";
import "../styles/pages/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(formData),
      });

      setStatus("Message Sent! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send. Please try again.");
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-shell">
        <div className="contact-panel">
          {/* LEFT SIDE */}
          <div className="contact-left">
            <div className="contact-left-top">
              <p className="contact-kicker">Stamatics • IIT Kanpur</p>
              <h1 className="contact-title">Get in Touch</h1>
              <p className="contact-subtitle">
                Want to collaborate, invite us for a talk, or just say hello?
                Send a message and we’ll get back to you.
              </p>
            </div>

            <div className="contact-left-footer">
              <div className="contact-email-row">
                <span className="contact-email-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="m6 8 6 5 6-5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="contact-email-text">stamatics@iitk.ac.in</span>
              </div>

              <div className="contact-social-row">
                <a
                  className="social-dot"
                  href="https://www.instagram.com/stamatics_iitk/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M17.5 6.6h.01"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>

                <a
                  className="social-dot"
                  href="https://www.youtube.com/@stamaticsiitkanpur5236"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31.2 31.2 0 0 0 2 12s.1 3.2.4 4.8a3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1c.3-1.6.4-4.8.4-4.8s-.1-3.2-.4-4.8Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M10.5 9.5 15.5 12l-5 2.5V9.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  className="social-dot"
                  href="https://www.linkedin.com/company/stamatics-iit-kanpur/?originalSubdomain=in"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4.5 9.5V20M4.5 6.5h.01M8.5 20v-6.1c0-1.8 1.2-3.2 3-3.2s3 1.4 3 3.2V20"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="contact-field">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="contact-field">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  placeholder="How can we help?"
                />
              </div>

              <div className="contact-actions">
                <button type="submit" className="contact-submit">
                  Send
                </button>

                {status && (
                  <p
                    className={`contact-status ${
                      status.includes("Failed") ? "is-error" : "is-success"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
