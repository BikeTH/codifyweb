import React, { useState, useEffect } from "react";
import './css/navBar.css';
import ScrollToSection from "./scrollToSection";
import { TbPackage, TbZoomMoney, TbHome, TbMessage, TbMailHeart } from "react-icons/tb";

export default function NavBar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll('div[id]');

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

    return (
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
    )
}
