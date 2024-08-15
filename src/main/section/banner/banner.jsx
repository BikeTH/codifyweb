import React, { useEffect, useState } from 'react';
import './banner.css';
import bannerImage from '../../../assets/ITConsult/banner.jpeg';
import ScrollToSection from '../../function/scrollToSection';
import CurrentTime from '../../function/currentTime';
import { TbPackage, TbZoomMoney, TbHome, TbMessage, TbMailHeart } from "react-icons/tb";

export default function Banner() {
    const [activeSection, setActiveSection] = useState('home');
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 });

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
        <div className="ITconsult-banner" id="home">
            <div className="ITconsult-banner-header">
                <CurrentTime />
            </div>
            <div className="ITconsult-banner-content">
                <div className="ITconsult-intro-content">
                    <h1>Website / Application Development Malaysia</h1>
                    <h2>We Build Stunning, Efficient Websites & Apps that captivate users.</h2>
                    <p>A stunning looking website is the First Step</p>
                    <button className="buttonIT" onClick={() => ScrollToSection('ITConsult')}>Explore Now</button>
                </div>
                <img src={bannerImage} alt="Banner" />
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
    );
}
