import React, { useState } from "react";
import './contact.css';
import quotation from '../../../assets/ITConsult/quotation.webp';
import email from '../../../assets/ITConsult/email.webp';
import { FaLinkedin, FaArrowRight, FaArrowLeft, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";
import { SiMinutemailer } from "react-icons/si";
import { MdCancel } from "react-icons/md";
import EmailStatus from "../../function/emailStatus";
import qrPage from "../../../assets/ITConsult/QR/qrPage.webp";
import qrWhatapps from "../../../assets/ITConsult/QR/qrWhatapps.webp";

export default function Contact() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(null); // New state for status
    const [statusMessage, setStatusMessage] = useState(''); // New state for status message
    const [fadeOut, setFadeOut] = useState(false); // New state to handle fade-out
    const [enlargedQR, setEnlargedQR] = useState(null); // State for enlarged QR
    const [qrDescription, setQrDescription] = useState(''); // State for QR description

    const handleQrClick = (qrSrc, description) => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            setEnlargedQR(qrSrc);
            setQrDescription(description);
        }
    };

    const handleCloseQr = () => {
        setEnlargedQR(null);
        setQrDescription('');
    };

    const handleContactClick = () => {
        setShowForm(true);
    };

    const handleBackClick = () => {
        setShowForm(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://uat.wilfredcty.com/send', { //http://localhost:4444/send
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setStatusMessage('Email sent successfully!');
            } else {
                setStatus('error');
                setStatusMessage('Failed to send email');
            }
            setFormData({ name: '', email: '', subject: '', message: '', phone: '' }); // Clear form after success
        } catch (error) {
            setStatus('error');
            setStatusMessage('Error occurred while sending email');
            setFormData({ name: '', email: '', subject: '', message: '', phone: '' });
        } finally {
            setFadeOut(true);
            setTimeout(() => {
                setStatus(null);
                setStatusMessage('');
                setFadeOut(false);
            },5000); // Reset status and message after 5 seconds
        }
    };

    return (
        <>
            <div className={`ITconsult-contact ${showForm ? 'slide-out' : 'slide-in'}`} id="contact">
                {showForm ? (
                    <div className="contact-form-section">
                        <div className="contact-form-arrangement">
                            <div className="contact-details-back">
                                <h1 onClick={handleBackClick}><FaArrowLeft /></h1>
                                <p style={{ textAlign: "center" }}>Back</p>
                            </div>
                            <div className="contact-fill-form-arrangement">
                                <div className="contact-form-header">
                                    <h1>Contact Us</h1>
                                    <p>Reach Out to Us by filling the Form</p>
                                </div>
                                <form className="contact-fill-form" onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="phone"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Write Us your Query"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    <button type="submit" className="sent-query">
                                        <SiMinutemailer />
                                        <span className="form-submit-button">Submit</span>
                                    </button>
                                </form>
                            </div>
                            <img className="contact-img" src={email} alt="email image" loading="lazy"/>
                        </div>
                    </div>
                ) : (
                    <div className="contact-details">
                        <img className="contact-img" src={quotation} alt="quotation image" loading="lazy"/>
                        <div className="ITconsult-contact-detail">
                            <h1>Request For Quotation?</h1>
                            <p>You can directly Contact Us for consultation with no Charges and We are Happy to Help!</p>
                            <ul>
                                <a href="https://www.linkedin.com/in/wilfred-tsen-yik-chong-2a37a724b" target="_blank" rel="noreferrer noopener">
                                    <FaLinkedin color="#0077B5" />
                                    <span className="contact-text">LinkedIn</span>
                                </a>
                                <a href="https://www.instagram.com/wilc_43?igsh=MWtteTUyOXVxbjlvdg==" target="_blank" rel="noreferrer noopener">
                                    <FaInstagram color="#bc2a8d" />
                                    <span className="contact-text">Instagram</span>
                                </a>
                                <a href="https://wa.me/+601121823390" target="_blank" rel="noreferrer noopener">
                                    <FaWhatsapp color="#25D366" />
                                    <span className="contact-text">WhatsApp</span>
                                </a>
                                <a href="mailto:webapp.tc@gmail.com" target="_blank" rel="noreferrer noopener">
                                    <TbMail color="636363" />
                                    <span className="contact-text">Email</span>
                                </a>
                            </ul>
                            <h3 style={{ textAlign: "center", fontSize:"3vmin" }}>Scan QR to find Us</h3>
                            <div className="contact-qr-arrangement">
                                <div className="qr-content" style={{textAlign:"center"}} onClick={() => handleQrClick(qrPage, 'Our Page')}>
                                    <img className="qr-page" src={qrPage} alt="qrpage" loading="lazy"/>
                                    <p style={{margin:"0"}}>Our Page</p>
                                </div>
                                <div className="qr-content" style={{textAlign:"center"}}>
                                    <img className="qr-whatapps" src={qrWhatapps} alt="qrwhatapps" onClick={() => handleQrClick(qrWhatapps, 'WhatsApp')} />
                                    <p style={{margin:"0"}}>WhatApps</p>
                                </div>
                            </div>
                            <p className="qr-msg">Tap me</p>
                        </div>
                        <div className="contact-form">
                            <h1 onClick={handleContactClick}><FaArrowRight /></h1>
                            <p style={{ textAlign: "center" }}>Write us a query</p>
                        </div>
                    </div>
                )}
                {enlargedQR && (
                <div className="qr-enlarged-overlay">
                    <div className="qr-enlarged-content">
                        <img src={enlargedQR} alt="Enlarged QR" />
                        <p>{qrDescription}</p>
                        <button className="close-btn" onClick={handleCloseQr}><MdCancel /></button>
                    </div>
                </div>
                )}
            </div>
            <EmailStatus status={status} message={statusMessage} fadeOut={fadeOut} />
        </>
    );
}