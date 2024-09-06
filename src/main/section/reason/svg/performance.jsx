import React from 'react';
import Codifyweb from '../../../../assets/codifyweb';

export default function UserExperienceIllustration() {
  const radiusOuter = 46;
  const radiusInner = 44;
  const strokeWidth = 2;
  const circumference = 2 * Math.PI * radiusOuter;

  // Example values; adjust strokeDashoffset to control how much of the ring is visible
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference * 0.1; // Adjust for how much of the ring to be "off"

  return (
    <div style={{width:"auto", height:"auto"}}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 160"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        style={{ display: 'block', margin: '0 auto' }} // Center horizontally
        >

        {/* Left Side Icon - First Contentful Paint Box */}
        <g>
            <rect
                x="20"
                y="10"
                width="124"
                height="40"
                rx="12"
                fill="var(--background-color)"
                stroke="var(--border)"
                strokeWidth="0.5"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 5,-5; 0,0; -5,5; 0,0"
                    dur="4s"
                    repeatCount="indefinite"
                />
            </rect>
            <text
                x="24"
                y="25"
                fill="var(--color)"
                fontSize="5"
                fontWeight="normal"
                stroke="none"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 5,-5; 0,0; -5,5; 0,0"
                    dur="4s"
                    repeatCount="indefinite"
                />
                FIRST CONTENTFUL PAINT
            </text>
            <text
                x="82"
                y="44"
                fill="var(--seo)"
                fontSize="12"
                fontWeight="normal"
                textAnchor="middle"
                stroke="none"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 5,-5; 0,0; -5,5; 0,0"
                    dur="4s"
                    repeatCount="indefinite"
                />
                295 ms
            </text>
        </g>

        <g>
            <rect
                x="0"
                y="60"
                width="136"
                height="40"
                rx="12"
                fill="var(--background-color)"
                stroke="var(--border)"
                strokeWidth="0.5"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="2,0; 0,5; 2,0; 5,0; 0,0"
                    dur="4s"
                    repeatCount="indefinite"
                />
            </rect>
            <text
                x="4"
                y="75"
                fill="var(--color)"
                fontSize="5"
                fontWeight="normal"
                stroke="none"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="2,0; 0,5; 2,0; 5,0; 0,0"
                    dur="4s"
                    repeatCount="indefinite"
                />
                LARGEST CONTENTFUL PAINT
            </text>
            <text
                x="66"
                y="94"
                fill="var(--seo)"
                fontSize="12"
                fontWeight="normal"
                textAnchor="middle"
                stroke="none"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="2,0; 0,5; 2,0; 5,0; 0,0"
                    dur="4s"
                    repeatCount="indefinite"
                />
                295 ms
            </text>
        </g>

        <g>
            <rect
                x="24"
                y="110"
                width="110"
                height="40"
                rx="12"
                fill="var(--background-color)"
                stroke="var(--border)"
                strokeWidth="0.5"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 5,5; 0,0; -5,-5; 0,0"
                    dur="4s"
                    repeatCount="indefinite"
                />
            </rect>
            <text
                x="32"
                y="125"
                fill="var(--color)"
                fontSize="5"
                fontWeight="normal"
                stroke="none"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 5,5; 0,0; -5,-5; 0,0"
                    dur="4s"
                    repeatCount="indefinite"
                />
                TIME TO INTERACTIVE
            </text>
            <text
                x="82"
                y="144"
                fill="var(--seo)"
                fontSize="12"
                fontWeight="normal"
                textAnchor="middle"
                stroke="none"
            >
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 5,5; 0,0; -5,-5; 0,0"
                    dur="4s"
                    repeatCount="indefinite"
                />
                325 ms
            </text>
        </g>
        {/* Speedometer 1 (Lighthouse Performance) */}
        <g transform="translate(120, 0)">
            {/* Green Ring Fill */}
            <circle
            cx="75"
            cy="75"
            r={radiusOuter}
            fill="none" // No fill for the outer circle
            stroke="var(--warm-neon-orange"
            strokeWidth={strokeWidth}
            />
            {/* Red Dashed Circle */}
            <circle
            cx="75"
            cy="75"
            r={radiusOuter}
            fill="none"
            stroke="var(--seo)"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            />
            {/* Inner Circle to hide part of the ring */}
            <circle
            cx="75"
            cy="75"
            r={radiusInner}
            fill="var(--content-bg)" // Background color to hide inner circle
            stroke="none"
            />
            {/* Text */}
            <text x="75" y="85" fill="var(--seo)" fontSize="24" fontWeight="bold" textAnchor="middle" stroke="none">
            90+
            </text>
            <text x="75" y="140" fill="var(--color)" fontSize="12" fontWeight="bold" textAnchor="middle" stroke="none">
            Performance
            </text>
        </g>

        {/* Speedometer 2 (PWA Icon) */}
        <g transform="translate(230, 0)">
            {/* Green Ring Fill */}
            <circle
            cx="75"
            cy="75"
            r={radiusOuter}
            fill="var(--seo)"
            />
            {/* Outer Ring */}
            <circle
            cx="75"
            cy="75"
            r={radiusOuter}
            fill="none"
            stroke="var(--seo)"
            strokeWidth={strokeWidth}
            />
            <circle
            cx="75"
            cy="75"
            r={radiusInner}
            fill="var(--content-bg)" // Background color to hide inner circle
            stroke="none"
            />
            {/* Text */}
            <text x="75" y="85" fill="var(--seo)" fontSize="24" fontWeight="bold" textAnchor="middle" stroke="none">
            100
            </text>
            <text x="75" y="140" fill="var(--color)" fontSize="12" fontWeight="bold" textAnchor="middle" stroke="none">
            PWA
            </text>
        </g>

        {/* Simplified Tablet, Monitor, and Phone */}
        <g transform="translate(350, 20)">
            {/* Monitor */}
            <rect
            x="30"
            y="-20"
            width="100"
            height="60"
            rx="8"
            fill="var(--background-color)"
            stroke="var(--border)"
            strokeWidth="1"
            />
            <rect
            x="68"
            y="40"
            width="30"
            height="6"
            fill="var(--background-color)"
            stroke="var(--border)"
            strokeWidth="1"
            />
            {/* Monitor Plate */}
            <rect
            x="58"
            y="45" 
            width="50"
            height="4" 
            fill="var(--background-color)"
            stroke="var(--border)"
            strokeWidth="1"
            />
            <text
                x="82"
                y="0"
                fontSize="8"
                fontWeight="600"
                textAnchor="middle"
                fill="var(--color)"
                stroke="none"
            >
                CodifyWeb
            </text>
            <text
                x="82"
                y="10"
                fontSize="6"
                fontWeight="600"
                textAnchor="middle"
                fill="var(--color)"
                stroke="none"
            >
                Solutions
            </text>
            {/* Tablet */}
            <rect
            x="10"
            y="20"
            width="60"
            height="80"
            rx="6"
            fill="var(--background-color)"
            stroke="var(--border)"
            strokeWidth="1"
            />
            {/*Tablet Screen*/}
            <rect
            x="12"
            y="22"
            width="56"
            height="76"
            rx="6"
            fill="var(--background-color)"
            stroke="var(--border)"
            strokeWidth="0.4"
            />
            <text
                x="42"
                y="52"
                fontSize="8"
                fontWeight="600"
                textAnchor="middle"
                fill="var(--color)"
                stroke="none"
            >
                Codify
            </text>
            <text
                x="42"
                y="62"
                fontSize="6"
                fontWeight="600"
                textAnchor="middle"
                fill="var(--color)"
                stroke="none"
            >
                Web
            </text>
            <text
                x="42"
                y="70"
                fontSize="5"
                fontWeight="600"
                textAnchor="middle"
                fill="var(--color)"
                stroke="none"
            >
                Solutions
            </text>
            {/* Phone */}
            <rect
                x="105"  // Decreased by 5 units to move the phone left
                y="30"
                width="40"
                height="60"
                rx="6"
                fill="var(--content-bg)"
                stroke="var(--border)"
                strokeWidth="1"
            />
            {/* Screen */}
            <rect
                x="108"  // Adjusted to maintain the margin inside the phone body
                y="32"   // Same y-value
                width="34"
                height="56"
                rx="4"
                fill="var(--background-color)"
                stroke="var(--border)"
                strokeWidth="0.3"
            />
            {/* SVG Version of the Banner Content */}
            <text
                x="126"  // Decreased by 5 units to match the shift
                y="56"
                fontSize="6"
                fontWeight="600"
                textAnchor="middle"
                fill="var(--color)"
                stroke="none"
            >
                Codify
            </text>
            <text
                x="126"  // Decreased by 5 units to match the shift
                y="68"
                fontSize="6"
                fontWeight="600"
                textAnchor="middle"
                fill="var(--color)"
                stroke="none"
            >
                Web
            </text>
        </g>
        </svg>
    </div>
  );
}
