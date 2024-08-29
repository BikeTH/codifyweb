import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import Banner from './src/main/section/banner/banner'; // Adjust the path as needed
import fs from 'fs';
import nodemailer from 'nodemailer';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 4444;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "https://uat.wilfredcty.com"
}));

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// SSR route for the banner component
app.get('/ssr-banner', (req, res) => {
    // Render the Banner component to a string
    const bannerHTML = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <Banner />
        </StaticRouter>
    );

    // Read the base HTML file
    const indexFile = path.resolve(__dirname, 'build', 'index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading index.html:', err);
            return res.status(500).send('An error occurred');
        }

        // Inject the rendered component into the HTML
        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${bannerHTML}</div>`)
        );
    });
});

// Route to handle the contact form submission
app.post('/send', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

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
        subject: `Query from ${name}: ${subject}`,
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

app.listen(port, () => console.log(`Server listening on port ${port}`));
