import React, { useState, useEffect } from "react";
import './banner.css'
import ScrollToSection from '../../function/scrollToSection';
import { TbPackage, TbZoomMoney, TbHome, TbMessage, TbMailHeart } from "react-icons/tb";

export default function Banner() {
    const [activeSection, setActiveSection] = useState('home');
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll('div[id]'); // Selects all divs with an id attribute
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.7 });
    
        sections.forEach(section => observer.observe(section));
    
        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);
    
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.ITconsult-nav-bar');
            const navbarOffsetTop = navbar.offsetTop;
            if (window.scrollY > navbarOffsetTop) {
                setIsNavbarFixed(true);
            } else {
                setIsNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className="Banner" id="home">
            <div className="Banner-Header">
                <div className="Banner-Header-arrangement">
                    <h1>TC</h1>
                    <p>
                        // Based in
                        <br></br>
                        Malaysia
                    </p>
                </div>
                <h1>Solutions</h1>
                <h1>Website</h1>
                <div className="Banner-Header-arrangement">
                    <p>
                        // Android
                        <br></br>
                        // IoS
                    </p>
                    <h1>& Application</h1>
                </div>
            </div>
            <div className="Banner-description">
                <h2>We Build Stunning, Efficient Websites & Apps that captivate users.</h2>
            </div>
            <div className={`ITconsult-nav-bar ${isNavbarFixed ? 'fixed' : ''}`}>
                <ul>
                    <li 
                        className={activeSection === 'offer' ? 'active' : ''} 
                        onClick={() => ScrollToSection('offer')}
                    >
                        <TbPackage /><span>Our Product</span>
                    </li>
                    <li 
                        className={activeSection === 'quotation' ? 'active' : ''} 
                        onClick={() => ScrollToSection('quotation')}
                    >
                        <TbZoomMoney /><span>Cost</span>
                    </li>
                    <li 
                        className={activeSection === 'home' ? 'active' : ''} 
                        onClick={() => ScrollToSection('home')}
                    >
                        <TbHome /><span>Home</span>
                    </li>
                    <li 
                        className={activeSection === 'faq' ? 'active' : ''} 
                        onClick={() => ScrollToSection('faq')}
                    >
                        <TbMessage /><span>FaQ</span>
                    </li>
                    <li 
                        className={activeSection === 'contact' ? 'active' : ''} 
                        onClick={() => ScrollToSection('contact')}
                    >
                        <TbMailHeart /><span>Contact Us</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}