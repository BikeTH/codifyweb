import React, { useState } from "react";

export default function SalesBoostSVG() {
    // Function to generate random noise
    const getRandomNoise = (range) => Math.random() * range - range / 2;

    // Define data points with upward trend and occasional dips
    const dataPoints = [];
    const numPoints = 11;
    const baseY = 50; // Adjusted base Y position for lower starting points
    const amplitude = 20; // Amplitude of the waves
    const frequency = 0.05; // Frequency of the waves
    const svgHeight = 200; // Height of the SVG viewBox

    // Generate initial points with manual adjustment for lower curve
    for (let i = 0; i <= numPoints; i++) {
        const x = (i / numPoints) * 500;
        let rawY;
        
        if (i <= 2) {
            // Make initial points lower
            rawY = baseY + (i * 5) + amplitude * Math.sin(frequency * x) + getRandomNoise(10);
        } else {
            // Continue with the general trend
            rawY = baseY + (i * 10) + amplitude * Math.sin(frequency * x) + getRandomNoise(10);
        }
        
        const clampedY = Math.max(Math.min(rawY, svgHeight - 10), 10); // Clamp between 10 and svgHeight - 10
        dataPoints.push({ x, y: svgHeight - clampedY }); // Invert y to fit within viewBox
    }

    // Generate path data for smooth curve
    const pathData = dataPoints.map((point, index) =>
        index === 0 ? `M${point.x} ${point.y}` : `L${point.x} ${point.y}`
    ).join(' ');

    // State for showing tooltip
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, value: 0 });

    // Show tooltip on hover
    const handleMouseOver = (event, value) => {
        setTooltip({
            visible: true,
            x: event.clientX,
            y: event.clientY,
            value,
        });
    };

    // Hide tooltip on mouse out
    const handleMouseOut = () => {
        setTooltip({ visible: false });
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <svg width="auto" height="auto" viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg">
                {/* Gradient Definition */}
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#66C8FF', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: 'var(--warm-neon-blue)', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                {/* X-axis grid lines and additional line */}
                <g stroke="var(--color)" strokeWidth="0.1">
                    <line x1="0" y1="50" x2="500" y2="50" />
                    <line x1="0" y1="100" x2="500" y2="100" />
                    <line x1="0" y1="150" x2="500" y2="150" />
                    <line x1="0" y1="200" x2="500" y2="200" />
                </g>

                {/* Data curve with gradient stroke */}
                <path d={pathData} fill="none" stroke="url(#gradient)" strokeWidth="1" />

                {/* Data points */}
                {dataPoints.map((point, index) => (
                    <circle
                        key={index}
                        cx={point.x}
                        cy={point.y}
                        r="1.5"
                        fill="var(--warm-neon-blue)"
                        onMouseOver={(event) => handleMouseOver(event, point.y)}
                        onMouseOut={handleMouseOut}
                    />
                ))}

                {/* Text labels for grid lines */}
                <text x="5" y="55" fill="var(--color)" fontSize="8" textAnchor="start">4000</text>
                <text x="5" y="105" fill="var(--color)" fontSize="8" textAnchor="start">3000</text>
                <text x="5" y="155" fill="var(--color)" fontSize="8" textAnchor="start">2000</text>
                <text x="5" y="205" fill="var(--color)" fontSize="8" textAnchor="start">1000</text>
            </svg>
        </div>
    );
}
