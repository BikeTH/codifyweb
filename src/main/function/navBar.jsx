import React, { useState, useEffect } from "react";
import './css/navBar.css';
import ScrollToSection from "./scrollToSection";
import { TbPackage, TbZoomMoney, TbHome, TbMessage, TbMailHeart } from "react-icons/tb";
import codifyweb from "../../assets/codifyweb.svg"

export default function NavBar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        const sections = document.querySelectorAll('div[id]');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: isMobile ? 0.5 : 0.9, rootMargin: '0px' });

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

        const handleTouchStart = (e) => {
            const navbarItems = document.querySelectorAll('.ITconsult-nav-bar li');
            navbarItems.forEach(item => {
                if (item !== e.target) {
                    item.classList.remove('hover'); // Remove hover state on touchstart
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('touchstart', handleTouchStart); // Add touchstart listener

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart); // Clean up listener
        };
    }, []);

    const handleClick = (sectionId) => {
        ScrollToSection(sectionId);
        setActiveSection(sectionId); // Directly set the active section on click
    };

    return (
        <div className={`ITconsult-nav-bar ${isNavbarFixed ? 'fixed' : ''}`}>
            <ul>
                <li
                    className={activeSection === 'offer' ? 'active' : ''}
                    onClick={() => handleClick('offer')}
                >
                    <TbPackage /><span>Our Services</span>
                </li>
                <li
                    className={['quotation', 'quotationSummary'].includes(activeSection) ? 'active' : ''}
                    onClick={() => handleClick('quotation')}
                >
                    <TbZoomMoney /><span>Pricing</span>
                </li>
                <li
                    className={`home-item ${activeSection === 'home' ? 'active' : ''}`}
                    onClick={() => handleClick('home')}
                >
                    <img src={codifyweb} alt="logo"/><span>CodifyWeb</span>
                </li>
                <li
                    className={activeSection === 'faq' ? 'active' : ''}
                    onClick={() => handleClick('faq')}
                >
                    <TbMessage /><span>FAQ</span>
                </li>
                <li
                    className={activeSection === 'contact' ? 'active' : ''}
                    onClick={() => handleClick('contact')}
                >
                    <TbMailHeart /><span>Contact Us</span>
                </li>
            </ul>
        </div>
    );
}
