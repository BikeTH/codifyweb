import React, { useState } from "react";
import './footer.css';
import ScrollToSection from "../../function/scrollToSection";
import { BiMapPin } from "react-icons/bi";
import { MdClose } from "react-icons/md";

export default function Footer(){
    const [showMsg, setShowMsg] = useState(false);

    const footer = [
        {
            id: 1,
            title: "About",
            content:
            <>
                <div className="Footer-About">
                    <p>We build functional websites and applications tailored to your business needs, whether for optimizing operations or increasing visitor engagement. Our solutions enhance efficiency and deliver practical, user-friendly tools.</p>
                </div>
            </>,
            color: "var(--warm-neon-red)",
        },
        {
            id: 2,
            title: "Quick Link",
            content: 
            <>
                <div className="Footer-Quick-Link-btn">
                    <button onClick={() => ScrollToSection('home')}>Home</button>
                    <button onClick={() => ScrollToSection('offer')}>Our Products</button>
                    <button onClick={() => ScrollToSection('quotation')}>Pricing Plan</button>
                    <button onClick={() => ScrollToSection('faq')}>FaQ</button>
                    <button onClick={() => ScrollToSection('team')}>Our Team</button>
                    <button onClick={() => ScrollToSection('contact')}>Contact Us</button>
                </div>
            </>,
            color: "var(--warm-neon-orange)",
        },
        {
            id: 3,
            title: "Legal",
            content:
            <>
                <div className="Footer-Quick-Link-btn">
                    <button onClick={() => setShowMsg(true)}>Privacy Policy</button>
                </div>
            </>,
            color: "var(--warm-neon-blue)",
        },
    ]

    return(
        <>
            <div className="ITconsult-footer" id="footer">
                <div className="our-location">
                    <div className="our-location-arrangement">
                        <h1><BiMapPin /></h1>
                        <div>
                            <h3>We are located at:</h3>
                            <p>Malaysia</p>
                        </div>
                    </div>
                    <div>
                        LOGO
                    </div>
                </div>
                <div style={{borderBottom:"0.2px solid white", padding:"8px", margin:"0 auto"}}/>
                <div>
                    <div className="ITconsult-footer-content">
                        {footer.map(data => (
                            <div className="ITconsult-footer-content-arrangement" key={data.id}>
                                <h1 style={{color:data.color}}>{data.title}</h1>
                                <div>{data.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{borderBottom:"0.2px solid white", padding:"8px", margin:"0 auto"}}/>
                <p>TC WebApp Solution &copy; 2024. All rights reserved.</p>
            </div>
            {showMsg && (
                <div className="pop-msg-overlay">
                    <div className="msg-content">
                        <button className="msg-close" onClick={() => setShowMsg(false)}><MdClose /></button>
                        <h2>Privacy Policy</h2>
                        <div className="msg-body">
                            <p>Last updated: August 2024</p>
                            <h3>Introduction</h3>
                            <p>TC WebApp Solution &#40;"we", "us", or "our"&#41; operates the wilfredcty.com/ITconsult website (the "Service"). This Privacy Policy explains how we collect, use, and disclose personal data when you use our Service and outlines your choices regarding that data.</p>
                            <h3>Definitions</h3>
                            <ul>
                                <li>Personal Data: Information about an individual who can be identified from that data or from that data combined with other information in our possession.</li>
                                <li>Usage Data: Data collected automatically from the use of the Service or from the Service infrastructure itself.</li>
                                <li>Cookies: Small data files placed on your device to facilitate website functionality or collect information.</li>
                            </ul>
                            <h3>Information Collection and Use</h3>
                            <p>We collect and process various types of information to provide and improve our Service:</p>
                            <ul>
                                <li>Personal Data: Includes information such as your email address, name, phone number, and address, which we collect to respond to your inquiries, provide services, or communicate with you. You can opt out of marketing communications by following the unsubscribe instructions in those communications or by contacting us directly.</li>
                                <li>Usage Data: Includes information such as IP addresses, browser types, pages visited, and other diagnostic data collected to analyze Service usage and improve our Service.</li>
                                <li>Cookies: We use cookies and similar technologies to track activity on our Service and retain certain information. You can adjust your browser settings to refuse cookies, but some features of the Service might not function properly without them.</li>
                            </ul>
                            <h3>Use of Data</h3>
                            <p>The data we collect is used to:</p>
                            <ul>
                                <li>Provide, maintain, and improve our Service</li>
                                <li>Notify you of changes to our Service</li>
                                <li>Respond to your inquiries and support requests</li>
                                <li>Monitor usage and analyze Service performance</li>
                                <li>Communicate updates, offers, or other information, you can opt out at any time</li>
                            </ul>
                            <h3>Data Retention</h3>
                            <p>We retain your Personal Data only for as long as necessary to fulfill the purposes described in this Privacy Policy or as required by law. Usage Data may be retained for analysis or operational purposes.</p>
                            <h3>Data Transfer</h3>
                            <p>Your information may be transferred to and maintained on servers located outside your jurisdiction. By using our Service, you consent to this transfer and acknowledge that different data protection laws may apply in other locations. We ensure that any international transfers comply with applicable legal requirements.</p>
                            <h3>Disclosure of Data</h3>
                            <p>We may disclose your Personal Data:</p>
                            <ul>
                                <li>To comply with legal obligations or respond to lawful requests by authorities</li>
                                <li>To protect our rights or property</li>
                                <li>To prevent or address technical issues or fraud</li>
                                <li>In connection with a business transfer &#40;e.g., merger or acquisition&#41;</li>
                            </ul>
                            <h3>Data Security</h3>
                            <p>We implement appropriate physical, electronic, and managerial procedures to safeguard your Personal Data. However, we cannot guarantee absolute security due to the inherent risks of internet transmission and storage.</p>
                            <h3>Do Not Track Signals</h3>
                            <p>Our Service does not respond to Do Not Track signals.</p>
                            <h3>Your Rights</h3>
                            <p>Depending on your jurisdiction, you may have certain rights regarding your Personal Data, including:</p>
                            <ul>
                                <li>Access: The right to access your Personal Data</li>
                                <li>Correction: The right to correct or update inaccurate Personal Data</li>
                                <li>Deletion: The right to request the deletion of your Personal Data</li>
                                <li>Data Portability: The right to request a copy of your Personal Data in a structured, commonly used format</li>
                                <li>Objection: The right to object to certain processing activities</li>
                            </ul>
                            <p>To exercise these rights, please contact us at wilfredchong43@gmail.com.</p>
                            <h3>Service Providers</h3>
                            <p>We might use third-party services to assist in providing our Service. These providers have access to your Personal Data only to perform their tasks and are obligated not to use it for other purposes.</p>
                            <h3>Third-Party Links</h3>
                            <p>Our Service may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to review their privacy policies before providing any personal data.</p>
                            <h3>Children’s Privacy</h3>
                            <p>Our Service is not intended for children under 13. We do not knowingly collect Personal Data from children. If we become aware that we have collected such data, we will take steps to delete it promptly.</p>
                            <h3>Changes to This Privacy Policy</h3>
                            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
                            <h3>Contact Us</h3>
                            <p>For questions or concerns about this Privacy Policy, please contact us at wilfredchong43@gmail.com.</p>
                        </div>
                    </div>
                </div>
            )}       
        </>
    );
}