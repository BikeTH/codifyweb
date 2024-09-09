import React, { useState } from "react";
import './contact.css';
import quotation from '../../../assets/ITConsult/quotation.webp';
import { FaLinkedin, FaArrowRight, FaArrowLeft, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";
import { SiMinutemailer } from "react-icons/si";
import { MdCancel } from "react-icons/md";
import EmailStatus from "../../function/emailStatus";
import qrPage from "../../../assets/ITConsult/QR/qrPage.webp";
import qrWhatapps from "../../../assets/ITConsult/QR/qrWhatapps.webp";
import useIntersectionObserver from "../../function/useIntersectionObserver";

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
            setFormData({ name: '', email: '', company: '', message: '', phone: '' }); // Clear form after success
        } catch (error) {
            setStatus('error');
            setStatusMessage('Error occurred while sending email');
            setFormData({ name: '', email: '', company: '', message: '', phone: '' });
        } finally {
            setFadeOut(true);
            setTimeout(() => {
                setStatus(null);
                setStatusMessage('');
                setFadeOut(false);
            },5000); // Reset status and message after 5 seconds
        }
    };

    const {ref: quotationRef, inView: quotationInView} = useIntersectionObserver({threshold: 0.1}, 200)
    const {ref: quotationTitleRef, inView: quotationTitleInView} = useIntersectionObserver({threshold: 0.1}, 400)
    const {ref: quotationDescriptionRef, inView: quotationDescriptionInView} = useIntersectionObserver({threshold: 0.1}, 400)
    const {ref: quotationIconRef, inView: quotationIconInView} = useIntersectionObserver({threshold: 0.1}, 500)
    const {ref: quotationScanRef, inView: quotationScanInView} = useIntersectionObserver({threshold: 0.1}, 200)
    const {ref: quotationQRRef, inView: quotationQRInView} = useIntersectionObserver({threshold: 0.1}, 500)
    const {ref: quotationQRPhoneRef, inView: quotationQRPhoneInView} = useIntersectionObserver({threshold: 0.1}, 500)
    const {ref: quotationContactDetailRef, inView: quotationContactDetailInView} = useIntersectionObserver({threshold: 0.1}, 200)
    const {ref: quotationContactFormBtnRef, inView: quotationContactFormBtnInView} = useIntersectionObserver({threshold: 0.1}, 100)
    const {ref: quotationContactBackBtnRef, inView: quotationContactBackBtnInView} = useIntersectionObserver({threshold: 0.1}, 100)
    const {ref: quotationContactUsRef, inView: quotationContactUsInView} = useIntersectionObserver({threshold: 0.1}, 200)
    const {ref: quotationContactDescriptionRef, inView: quotationContactDescriptionInView} = useIntersectionObserver({threshold: 0.1}, 200)

    return (
        <>
            <div className={`ITconsult-contact ${showForm ? 'slide-out' : 'slide-in'}`} id="contact">
                {showForm ? (
                    <div className="contact-form-section">
                        <div className="contact-form-arrangement">
                            <div className={`contact-details-back ${quotationContactBackBtnInView ? 'animate' : 'paused'}`} ref={quotationContactBackBtnRef}>
                                <h1 onClick={handleBackClick}><FaArrowLeft /></h1>
                                <p style={{ textAlign: "center" }}>Back</p>
                            </div>
                            <div className="contact-fill-form-arrangement">
                                <div className="contact-form-header">
                                    <h1 className={`slideDownUp-animate ${quotationContactUsInView ? 'animate' : 'paused'}`} ref={quotationContactUsRef}>Contact Us</h1>
                                    <p className={`slideUpDown-animate ${quotationContactDescriptionInView ? 'animate' : 'paused'}`} ref={quotationContactDescriptionRef}>Reach Out to Us by filling the <span style={{color:"var(--color)", fontWeight:"600"}}>Form</span></p>
                                </div>
                                <form className="contact-fill-form" onSubmit={handleSubmit}>
                                    <label htmlFor="name" className="label-name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label htmlFor="company" className="label-company">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        placeholder="Company (Optional)"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />

                                    <label htmlFor="email" className="label-email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label htmlFor="phone" className="label-phone">Phone</label>
                                    <input
                                        type="phone"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        pattern="[0-9+]*" // Allow only numeric input
                                        inputMode="numeric" // Hint for mobile keyboards to show numeric keypad
                                        required
                                    />

                                    <label htmlFor="message" className="label-message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Write To Us What is In Your Mind"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    
                                    <button type="submit" className="sent-query">
                                        <SiMinutemailer />
                                        <span className="form-submit-button">Submit</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="contact-details">
                        <img className={`contact-img ${quotationInView ? 'animate' : 'paused'}`} ref={quotationRef} src={quotation} alt="quotation image" loading="lazy"/>
                        <div className={`ITconsult-contact-detail ${quotationContactDetailInView ? 'animate' : 'paused'}`} ref={quotationContactDetailRef}>
                            <h1 className={`slideUpDown-animate ${quotationTitleInView ? 'animate' : 'paused'}`} ref={quotationTitleRef}>Request For Quotation?</h1>
                            <p className={`slideDownUp-animate ${quotationDescriptionInView ? 'animate' : 'paused'}`} ref={quotationDescriptionRef}>You can directly <span style={{color:"var(--color)", fontWeight:"600"}}>Contact Us</span> for Consultation with <span style={{color:"var(--color)", fontWeight:"600"}}>No Charges</span> and We are Happy to <span style={{color:"var(--color)", fontWeight:"600"}}>Help</span>!</p>
                            <ul className={`slideDownUp-animate ${quotationIconInView ? 'animate' : 'paused'}`} ref={quotationIconRef}>
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
                            <h3 className={`slideUpDown-animate ${quotationScanInView ? 'animate' : 'paused'}`} ref={quotationScanRef} style={{ textAlign: "center", fontSize:"3vmin" }}>Scan QR to find Us</h3>
                            <div className={`contact-qr-arrangement ${quotationQRInView ? 'animate' : 'paused'}`} ref={quotationQRRef}>
                                <div className="qr-content" style={{textAlign:"center"}} onClick={() => handleQrClick(qrPage, 'Our Page')}>
                                    <img className="qr-page" src={qrPage} alt="qrpage" loading="lazy"/>
                                    <p style={{margin:"0"}}>Our Page</p>
                                </div>
                                <div className="qr-content" style={{textAlign:"center"}} onClick={() => handleQrClick(qrWhatapps, 'WhatsApp')}>
                                    <img className="qr-whatapps" src={qrWhatapps} alt="qrwhatapps" loading="lazy"/>
                                    <p style={{margin:"0"}}>WhatApps</p>
                                </div>
                            </div>
                            <p className={`qr-msg ${quotationQRPhoneInView ? 'animate' : 'paused'}`} ref={quotationQRPhoneRef}>Tap me</p>
                        </div>
                        <div className={`contact-form ${quotationContactFormBtnInView ? 'animate' : 'paused'}`} ref={quotationContactFormBtnRef}>
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