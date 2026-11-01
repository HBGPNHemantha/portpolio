import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../App.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if CAPTCHA is verified
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      captchaValue: captchaValue // Send token to backend
    };

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        alert('Thank you! Your message has been sent successfully.');
        e.target.reset();
        setCaptchaValue(null); // Reset captcha
      } else {
        alert('Error: ' + (data.error || 'Something went wrong!'));
      }
    } catch (err) {
      console.error('Error sending message:', err);
      alert('Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">
          Get In <span className="highlight">Touch</span>
        </h2>
        <p className="contact-subtitle">
          I am actively seeking opportunities and research collaborations in AI/ML, Data Science, and Full-Stack Software Engineering. Feel free to reach out!
        </p>

        <div className="contact-wrapper">
          {/* Left Side: Contact Information (omitted for brevity, keep your info-cards here) */}

          {/* Right Side: Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="pasindunetumina2002@gmail.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="AI/ML Collaboration" required />
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

            {/* Google reCAPTCHA Component */}
            <div className="form-group" style={{ margin: "15px 0" }}>
              <ReCAPTCHA
                sitekey="6LdmDQsuAAAAABKcLX_YIHqUixm2Uz6C0qeGT_t9" 
                onChange={(value) => setCaptchaValue(value)}
              />
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;