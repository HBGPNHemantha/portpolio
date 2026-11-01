const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch((err) => console.log('DB Connection Error:', err));

// Message Schema & Model (Added subject field)
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// API Route for Contact Form with reCAPTCHA Verification
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message, captchaValue } = req.body;

    // Validation
    if (!name || !email || !subject || !message || !captchaValue) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please fill all fields and complete the reCAPTCHA verification.' 
      });
    }

    // Verify reCAPTCHA token with Google
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || '6LdmDQsuAAAAAM-l4ff2G3xGVoFka6cp2zhyTxF8';
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`;

    const recaptchaResponse = await fetch(verifyUrl, { method: 'POST' });
    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      return res.status(400).json({ 
        success: false, 
        error: 'Robot verification failed. Please try again.' 
      });
    }

    // Save to Database if CAPTCHA is valid
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'A server error occurred.' });
  }
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;