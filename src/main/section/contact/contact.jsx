import React, { useState } from "react";
import './contact.css';
import quotation from '../../../assets/ITConsult/quotation.jpeg';
import email from '../../../assets/ITConsult/email.jpeg';
import { FaLinkedin, FaArrowRight, FaArrowLeft, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";
import { SiMinutemailer } from "react-icons/si";

export default function Contact(){
    const [showForm, setShowForm] = useState(false);

    const handleContactClick = () => {
        setShowForm(true);
    };

    const handleBackClick = () => {
        setShowForm(false);
    };

    return(
        <>
        <div className={`ITconsult-contact ${showForm ? 'slide-out' : 'slide-in'}`} id="contact">
                {showForm ? (
                    <div className="contact-form-section">
                        <div className="contact-form-arrangement">
                            <div className="contact-details-back">
                                <h1 onClick={handleBackClick}><FaArrowLeft /></h1>
                                <p style={{textAlign:"center"}}>Back</p>
                            </div>
                            <div className="contact-fill-form-arrangement">
                                <div className="contact-form-header">
                                    <h1>Contact Us</h1>
                                    <p>Reach Out to Us by filling the Form</p>
                                </div>
                                <form className="contact-fill-form">
                                    <input type="text" id="name" name="name" placeholder="Name" required />
                                    <input type="email" id="email" name="email" placeholder="Email" required />
                                    <input type="subject" id="subject" name="subject" placeholder="Subject" required />
                                    <textarea id="message" name="message" placeholder="Write Us your Query"required></textarea>
                                    <button type="submit" className="sent-query"><SiMinutemailer /><span className="form-submit-button">Submit</span></button>
                                </form>
                            </div>
                            <img src={email} alt="email image"/>
                        </div>
                    </div>
                ) : (
                    <div className="contact-details">
                        <img src={quotation} alt="quotation image"/>
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
                                <a href="tel:+601121823390" target="_blank" rel="noreferrer noopener">
                                    <FaWhatsapp color="#25D366" />
                                    <span className="contact-text">WhatsApp</span>
                                </a>
                                <a href="mailto:700024165@student.curtin.edu.my" target="_blank" rel="noreferrer noopener">
                                    <TbMail color="636363" />
                                    <span className="contact-text">Email</span>
                                </a>
                            </ul>
                            <h3 style={{ textAlign: "center" }}>Scan QR to find Us</h3>
                            <div className="contact-qr-arrangement">
                                {/* QR code content */}
                            </div>
                        </div>
                        <div className="contact-form">
                            <h1 onClick={handleContactClick}><FaArrowRight /></h1>
                            <p style={{ textAlign:"center" }}>Write us a query</p>
                        </div>
                    </div>
                )}
            </div>
        </>
)}
