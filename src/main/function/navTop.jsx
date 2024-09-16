import React, { useState, useEffect } from "react";
import ScrollToSection from "./scrollToSection";
import { IoChevronUp, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import './css/navTop.css';

export default function NavTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const rect = homeSection.getBoundingClientRect();
                setIsVisible(rect.bottom < 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        
        document.documentElement.style.setProperty(
            '--background-color',
            isDarkMode ? '#F5F5F5' : '#080808'
        );
        document.documentElement.style.setProperty(
            '--color',
            isDarkMode ? '#080808' : '#F5F5F5'
        );
        document.documentElement.style.setProperty(
            '--second-color',
            isDarkMode ? '#333333' : '#cdcdcd'
        );
        document.documentElement.style.setProperty(
            '--nav-bg',
            isDarkMode ? '#080808' : '#F5F5F5'
        );
        document.documentElement.style.setProperty(
            '--nav-color',
            isDarkMode ? '#F5F5F5' : '#080808'
        );
        document.documentElement.style.setProperty(
            '--content-bg',
            isDarkMode ? '#F5F5F5' : '#1a1a1a'
        );
        document.documentElement.style.setProperty(
            '--content-color',
            isDarkMode ? '#F5F5F5' : '#1a1a1a'
        );
        document.documentElement.style.setProperty(
            '--seo',
            isDarkMode ? 'var(--neon-green)' : 'var(--warm-neon-green)'
        );
    };

    return (
        <div className="navTop-main">
            {isVisible && (
                <button className="navTop-button" onClick={() => ScrollToSection('home')} aria-label="Scroll to top">
                    <IoChevronUp />
                </button>
            )}
            <button className="theme-toggle-button" onClick={toggleTheme} aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
                {isDarkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
            </button>
        </div>
    );
}
