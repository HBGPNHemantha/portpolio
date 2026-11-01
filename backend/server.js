
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(express.json());

// CORS configuration
const allowedOrigins = [
  'http://localhost:5173',
  process.env.FRONTEND_URL,
  process.env.URL
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running!' });
});

// Message Schema
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Contact API
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message, captchaValue } = req.body;

    if (!name || !email || !subject || !message || !captchaValue) {
      return res.status(400).json({
        success: false,
        error: 'Please fill all fields and complete reCAPTCHA.'
      });
    }

    // Verify reCAPTCHA
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      return res.status(500).json({
        success: false,
        error: 'reCAPTCHA configuration missing.'
      });
    }

    const verifyResponse = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: captchaValue
        })
      }
    );

    const captchaResult = await verifyResponse.json();

    if (!captchaResult.success) {
      return res.status(400).json({
        success: false,
        error: 'Robot verification failed.'
      });
    }

    
const newMessage = new Message({
  name,
  email,
  subject,
  message
});

// Save message to MongoDB
await newMessage.save();

let emailSent = false;

try {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;
  const receiver =
    process.env.CONTACT_RECEIVER_EMAIL || gmailUser;

  if (!gmailUser || !gmailPassword || !receiver) {
    throw new Error('Gmail environment variables are missing!');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPassword.replace(/\s/g, '')
    }
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${gmailUser}>`,
    to: receiver,
    replyTo: email,
    subject: `New Portfolio Message: ${subject}`,
    text: `
    New message from your Portfolio Website.

    Name: ${name}
    Email: ${email}
    Subject: ${subject}

    Message:
    ${message}
        `
    });

    emailSent = true;
    console.log('Gmail notification sent successfully!');

    } catch (emailError) {
    console.error('Gmail notification failed:', emailError);
    }

    res.status(201).json({
    success: true,
    message: 'Message received successfully!',
    emailSent
    });


  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'A server error occurred.'
    });
  }
});


// MongoDB Connection
let connectionPromise = null;

async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is missing!');
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(process.env.MONGO_URI)
      .then(() => {
        console.log('MongoDB Connected Successfully!');
      })
      .catch((error) => {
        connectionPromise = null;
        throw error;
      });
  }

  await connectionPromise;
}

// Local Development Server
if (require.main === module) {
  const PORT = process.env.PORT || 5000;

  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.error('Server startup error:', error);
      process.exit(1);
    });
}

// Export for Netlify Functions
module.exports = { app, connectDB };
