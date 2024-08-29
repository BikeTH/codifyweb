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
}))

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Route to handle the contact form submission
app.post('/send', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

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
        subject: `Query from ${name}: ${subject}`,
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
