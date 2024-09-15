import React, {useEffect} from 'react';
import { FaPlus, FaCameraRetro, FaMicrophone, FaMagnifyingGlass } from "react-icons/fa6";
import "../reasonContent.css";

export default function EnhancedVisibilitySEO() {
    useEffect(() => {
        let animationFrameId; // Store the animation frame ID
        let startTime;
    
        function animateText(elementId, startValue, endValue, duration) {
          const element = document.getElementById(elementId);
    
          function exponentialGrowth(t) {
            return startValue + (endValue - startValue) * (1 - Math.exp(-t * 5));
          }
    
          function update(time) {
            if (!startTime) startTime = time;
            const elapsed = (time - startTime) / duration;
            if (elapsed < 1) {
              element.textContent = Math.min(Math.round(exponentialGrowth(elapsed)), endValue);
              animationFrameId = requestAnimationFrame(update);
            } else {
              // Ensure the final value is exactly endValue
              element.textContent = endValue;
              startTime = time; // Restart animation
              animationFrameId = requestAnimationFrame(update);
            }
          }
    
          animationFrameId = requestAnimationFrame(update);
        }
    
        // Start the animation when the component mounts
        animateText('animatedText', 0, 100, 3000);
    
        // Cleanup function to cancel animation frames on component unmount
        return () => {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
          }
        };
      }, []);

    return (
        <div style={{width: "auto", height: "auto"}}>
            <svg width="100%" height="100%" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                {/* Search Bar */}
                <rect x="20" y="20" width="260" height="30" rx="5" ry="5" fill="#fff" stroke="#ccc" strokeWidth="1" />
                <text x="40" y="40" fill="#aaa" fontSize="12">Search...</text>

                {/* Icons in Search Bar */}
                <foreignObject x="190" y="25" width="20" height="20">
                    <FaPlus style={{ color: '#aaa', transform: 'rotate(45deg)' }} />
                </foreignObject>
                <g className="seo-icon">
                    <foreignObject x="220" y="25" width="20" height="20">
                        <FaMicrophone style={{ color: 'var(--warm-neon-orange)' }} />
                    </foreignObject>
                </g>
                <g className="seo-icon">
                    <foreignObject x="240" y="25" width="20" height="20">
                        <FaCameraRetro style={{ color: 'var(--warm-neon-orange)' }} />
                    </foreignObject>
                </g>
                <g className="seo-icon">
                    <foreignObject x="260" y="25" width="20" height="20">
                        <FaMagnifyingGlass style={{ color: 'var(--warm-neon-orange)' }} />
                    </foreignObject>
                </g>

                <circle cx="150" cy="125" r="50" stroke="none" fill="var(--background-color)" />
                <circle cx="150" cy="125" r="50" 
                        stroke="var(--seo)" 
                        strokeWidth="2" 
                        fill="none" 
                        strokeDasharray="314"
                        strokeDashoffset="157"
                        strokeLinecap="round"
                        transform="rotate(-90 150 125)">
                    <animate
                        attributeName="stroke-dashoffset"
                        from="314"
                        to="0"
                        dur="3s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="r"
                        values="50;52;50"
                        keyTimes="0;0.5;1"
                        dur="3s"
                        repeatCount="indefinite"
                    />
                </circle>
                
                <text id="animatedText" x="150" y="135" fill="var(--seo)" fontSize="24" fontWeight="bold" textAnchor="middle">100</text>

                {/* SEO Text below the Circle */}
                <text x="150" y="195" fill="var(--color)" fontSize="14" fontWeight="bold" textAnchor="middle">SEO</text>
            </svg>
        </div>
    );
}
