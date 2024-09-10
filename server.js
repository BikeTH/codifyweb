import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import cors from 'cors';
import 'dotenv/config';

// Initialize Express application
const app = express();
const port = process.env.PORT || 4440;

// Get the current directory of the module (ES module equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(cors({
    origin: "https://codifyweb.com"
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
    return email.trim().toLowerCase().replace(/[^a-z0-9@._-]/gi, '').substring(0, MAX_EMAIL_LENGTH);
}

function sanitizePhone(phone) {
    return phone.replace(/\D/g, '').substring(0, MAX_PHONE_LENGTH);
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Route to handle the contact form submission
app.post('/send', (req, res) => {
    let { name, email, phone, company, message } = req.body;

    name = sanitizeString(name, MAX_NAME_LENGTH);
    email = sanitizeEmail(email);
    phone = sanitizePhone(phone);
    company = sanitizeString(company, MAX_COMPANY_LENGTH);
    message = sanitizeString(message, MAX_MESSAGE_LENGTH);

    if (!isValidEmail(email)) {
        return res.status(400).send('Invalid email format');
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: 'webapp.tc@gmail.com',
        subject: `Query from ${name}, ${company}`,
        text: `Message from ${email}:\n\n${message}\n${phone}`,
        replyTo: email,
    };

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
