import React, { useState, useEffect, useRef } from 'react';
import { FaPlus, FaCameraRetro, FaMicrophone, FaMagnifyingGlass } from "react-icons/fa6";
import "../reasonContent.css"; // Ensure this CSS file includes necessary styles

export default function EnhancedVisibilitySEO() {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.8) {
                    setIsVisible(true);
                }
            },
            {
                threshold: [0.8]
            }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            animateText('animatedText', 0, 100, 3000);
        }
    }, [isVisible]);

    function animateText(elementId, startValue, endValue, duration) {
        const element = document.getElementById(elementId);
        let startTime;

        function exponentialGrowth(t) {
            return startValue + (endValue - startValue) * (1 - Math.exp(-t * 5));
        }

        function update(time) {
            if (!startTime) startTime = time;
            const elapsed = (time - startTime) / duration;
            if (elapsed < 1) {
                element.textContent = Math.min(Math.round(exponentialGrowth(elapsed)), endValue);
                requestAnimationFrame(update);
            } else {
                element.textContent = endValue;
            }
        }

        requestAnimationFrame(update);
    }

    return (
        <div ref={componentRef} style={{ width: "auto", height: "auto" }}>
            <svg width="100%" height="100%" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                {/* Search Bar */}
                <rect x="20" y="20" width="260" height="30" rx="5" ry="5" fill="#fff" stroke="#ccc" strokeWidth="1" />
                <text x="40" y="40" fill="#aaa" fontSize="12">Search...</text>

                {/* Icons in Search Bar */}
                <foreignObject x="190" y="25" width="20" height="20">
                    <FaPlus style={{ color: '#aaa', transform: 'rotate(45deg)' }} />
                </foreignObject>
                <foreignObject x="220" y="25" width="20" height="20">
                    <FaMicrophone style={{ color: 'var(--warm-neon-orange)' }} />
                </foreignObject>
                <foreignObject x="240" y="25" width="20" height="20">
                    <FaCameraRetro style={{ color: 'var(--warm-neon-orange)' }} />
                </foreignObject>
                <foreignObject x="260" y="25" width="20" height="20">
                    <FaMagnifyingGlass style={{ color: 'var(--warm-neon-orange)' }} />
                </foreignObject>

                {/* Animated Circle */}
                <circle cx="150" cy="125" r="50" stroke="none" fill="var(--background-color)" />
                <circle
                    cx="150" cy="125" r="50"
                    stroke="var(--seo)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="314"
                    className={isVisible ? 'circle-animation' : 'circle-hidden'}
                    strokeLinecap="round"
                    transform="rotate(-90 150 125)"
                />
                <text
                    id="animatedText"
                    x="150"
                    y="135"
                    fill="var(--seo)"
                    fontSize="24"
                    fontWeight="bold"
                    textAnchor="middle"
                    className={isVisible ? 'text-animation' : 'text-hidden'}
                >
                    100
                </text>

                {/* SEO Text below the Circle */}
                <text
                    x="150"
                    y="195"
                    fill="var(--color)"
                    fontSize="14"
                    fontWeight="bold"
                    textAnchor="middle"
                    className={isVisible ? 'text-animation' : 'text-hidden'}
                >
                    SEO
                </text>
            </svg>
        </div>
    );
}
