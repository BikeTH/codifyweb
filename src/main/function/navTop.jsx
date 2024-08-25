import React, { useState, useEffect } from "react";
import ScrollToSection from "./scrollToSection";
import { IoChevronUp } from "react-icons/io5";
import './css/navTop.css'

export default function NavTop () {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const rect = homeSection.getBoundingClientRect();
                // Show the button when the user scrolls below the home section
                setIsVisible(rect.bottom < 0);
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div>
            {isVisible && (
                <button className="navTop-button" onClick={() => ScrollToSection('home')}>
                    <IoChevronUp />
                </button>
            )}
        </div>
    )
}