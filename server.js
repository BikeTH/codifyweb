// Import ES module syntax
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer'; // Import Nodemailer
import cors from 'cors';
import 'dotenv/config';

// Initialize Express application
const app = express();
const port = process.env.PORT || 4444;

// Get the current directory of the module (ES module equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "https://uat.wilfredcty.com" //"http://localhost:5173" for dev use
}));

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Define maximum lengths
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 100;
const MAX_PHONE_LENGTH = 20;
const MAX_COMPANY_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 500;

// Custom sanitization functions
function escapeHTML(str) {
    return str.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
}

function sanitizeString(str, maxLength) {
    return escapeHTML(str.substring(0, maxLength));
}

function sanitizeEmail(email) {
    // Basic validation and sanitization
    return email.trim().toLowerCase().replace(/[^a-z0-9@._-]/gi, '').substring(0, MAX_EMAIL_LENGTH);
}

function sanitizePhone(phone) {
    // Remove non-numeric characters and limit length
    return phone.replace(/\D/g, '').substring(0, MAX_PHONE_LENGTH);
}

// Validate email format
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Route to handle the contact form submission
app.post('/send', (req, res) => {
    let { name, email, phone, company, message } = req.body;

    // Apply sanitization and length limits
    name = sanitizeString(name, MAX_NAME_LENGTH);
    email = sanitizeEmail(email);
    phone = sanitizePhone(phone);
    company = sanitizeString(company, MAX_COMPANY_LENGTH);
    message = sanitizeString(message, MAX_MESSAGE_LENGTH);

    // Validate email format
    if (!isValidEmail(email)) {
        return res.status(400).send('Invalid email format');
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: 'webapp.tc@gmail.com',
        subject: `Query from ${name}, ${company}`,
        text: `Message from ${email}:\n\n${message}\n${phone}`,
        replyTo: email,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(`[${new Date().toLocaleString()}] Error sending email:`, error);
            return res.status(500).send('Error sending email');
        }
        console.log(`[${new Date().toLocaleString()}] Email sent:`, info.response);
        res.status(200).send('Email sent successfully');
    });
});

// Serve the React app on all routes
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'build', 'index.html')));

// Start listening on the specified port
app.listen(port, () => console.log(`Server listening on port ${port}`));
