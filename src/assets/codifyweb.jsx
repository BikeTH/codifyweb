import React, {useState} from 'react';
import "./aniLogo.css";

export default function Codifyweb() {
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    window.location.href = "https://uat.wilfredcty.com"; // Redirects to the new page in the same tab
  };

  return (
    <div
      className={`logo-main ${isHovered ? 'logo-hidden' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">

      {/* Oval shadow */}
      <defs>
          <filter id="blur-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="6"/> 
            <feOffset dx="0" dy="6" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5"/>
            </feComponentTransfer>
            <feMerge> 
              <feMergeNode/> 
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <g className="logo-left">
          <polygon points="72, 50, 102, 60, 62,160, 32,150" fill="var(--second-color)" />
          <polygon points="74,130, 112,145, 112, 180, 32, 150" fill="var(--color)" />
        </g>

        <g className='logo-content'>
          <polygon points="124, 50, 124, 50, 124, 112, 94, 125" fill="var(--warm-neon-orange)" />
          <polygon points="152, 150, 162, 126, 124, 111, 94, 125" fill="orange" />
          <polygon points="132, 200, 132, 200, 158, 135, 124, 138" fill="var(--warm-neon-orange)"/>
        </g>

        <g className="logo-right">
          <polygon points="180, 200, 150, 190, 190, 90, 220, 100" fill="var(--second-color)" />

          <polygon points="178,120, 140,105, 140,70, 220,100" fill="var(--color)" />
        </g>
        
        <ellipse cx="115" cy="204" rx="52" ry="8" fill="var(--color)" opacity="0.3" filter="url(#blur-shadow)" />

          <text className="logo-text" fill="var(--color)" x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
              CodifyWeb
          </text>
      </svg>
    </div>
  );
}
