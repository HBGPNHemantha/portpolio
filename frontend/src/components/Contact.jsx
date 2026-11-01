import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../App.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const captchaRef = useRef(null);
  const formRef = useRef(null);

  // Local development and Netlify API URL
  const CONTACT_API_URL = import.meta.env.DEV
    ? "http://localhost:5000/api/contact"
    : "/api/contact";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      captchaValue: captchaValue,
    };

    setLoading(true);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert("Thank you! Your message has been sent successfully.");

        formRef.current?.reset();
        captchaRef.current?.reset();
        setCaptchaValue(null);
      } else {
        alert("Error: " + (data.error || "Something went wrong!"));
      }
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Section Heading */}
        <h2 className="section-title">
          Get In <span className="highlight">Touch</span>
        </h2>

        <p className="contact-subtitle">
          I am actively seeking opportunities and research collaborations
          in AI/ML, Data Science, and Full-Stack Software Engineering.
          Feel free to reach out!
        </p>

        <div className="contact-wrapper">

          {/* LEFT SIDE - CONTACT INFORMATION */}
          <div className="contact-info">

            {/* Email */}
            <div className="info-card">
              <div className="info-icon">📧</div>

              <div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:pasindunetumina2002@gmail.com">
                    pasindunetumina2002@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="info-card">
              <div className="info-icon">📍</div>

              <div>
                <h3>Location</h3>
                <p>Kurunegala, Sri Lanka</p>
              </div>
            </div>

            {/* Career Focus */}
            <div className="info-card">
              <div className="info-icon">💻</div>

              <div>
                <h3>Career Focus</h3>
                <p>AI/ML, Data Science & Full-Stack Development</p>
              </div>
            </div>

            {/* Availability */}
            <div className="info-card">
              <div className="info-icon">🚀</div>

              <div>
                <h3>Opportunities</h3>
                <p>Open to Projects & Collaborations</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links-card">
              <h3>Connect With Me</h3>

              <div className="social-buttons">

                <a
                  href="https://github.com/HBGPNHemantha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/pasindu-netumina-2095b1448/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  LinkedIn
                </a>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            ref={formRef}
          >

            <div className="form-group">
              <label htmlFor="name">Your Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="pasindunetumina2002@gmail.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="AI/ML Collaboration"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Hi Pasindu, I would like to discuss..."
                required
              ></textarea>
            </div>

            {/* Google reCAPTCHA */}
            <div className="form-group captcha-group">
              <label>Robot Verification</label>

              <div className="recaptcha-wrapper">
                <ReCAPTCHA
                  ref={captchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={(value) => setCaptchaValue(value)}
                  onExpired={() => setCaptchaValue(null)}
                  onErrored={() => setCaptchaValue(null)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;