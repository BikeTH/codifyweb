import React, { useState, useEffect } from "react";
import ScrollToSection from "./scrollToSection";
import { IoChevronUp } from "react-icons/io5";
import { LuSun, LuMoon } from "react-icons/lu";
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
            isDarkMode ? '#ffffff' : '#000000'
        );
        document.documentElement.style.setProperty(
            '--color',
            isDarkMode ? '#000000' : '#ffffff'
        );
        document.documentElement.style.setProperty(
            '--second-color',
            isDarkMode ? '#333333' : '#eeeeee'
        );
        document.documentElement.style.setProperty(
            '--nav-bg',
            isDarkMode ? 'black' : 'white'
        );
        document.documentElement.style.setProperty(
            '--nav-color',
            isDarkMode ? 'white' : 'black'
        );
    };

    return (
        <div>
            {isVisible && (
                <button className="navTop-button" onClick={() => ScrollToSection('home')}>
                    <IoChevronUp />
                </button>
            )}
            <button className="theme-toggle-button" onClick={toggleTheme}>
                {isDarkMode ? <LuMoon /> : <LuSun />}
            </button>
        </div>
    );
}
