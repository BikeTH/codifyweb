import React from 'react';
import { FaPlus, FaCameraRetro, FaMicrophone, FaMagnifyingGlass } from "react-icons/fa6";

export default function EnhancedVisibilitySEO() {
    return (
        <svg width="auto" height="auto" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            {/* Search Bar */}
            <rect x="20" y="20" width="260" height="30" rx="5" ry="5" fill="#fff" stroke="#ccc" strokeWidth="1" />
            <text x="40" y="40" fill="#aaa" fontSize="12">Search...</text>

            {/* Icons in Search Bar */}
            <foreignObject x="190" y="25" width="20" height="20">
                <FaPlus style={{ color: '#aaa', transform: 'rotate(45deg)' }} />
            </foreignObject>
            <foreignObject x="220" y="25" width="20" height="20">
                <FaMicrophone style={{ color: 'var(--warm-neon-blue)' }} />
            </foreignObject>
            <foreignObject x="240" y="25" width="20" height="20">
                <FaCameraRetro style={{ color: 'var(--warm-neon-blue)' }} />
            </foreignObject>
            <foreignObject x="260" y="25" width="20" height="20">
                <FaMagnifyingGlass style={{ color: 'var(--warm-neon-blue)' }} />
            </foreignObject>

            {/* Speedometer */}
            <circle cx="150" cy="125" r="50" fill="none" stroke="var(--seo)" strokeWidth="4" />
            <text x="150" y="135" fill="var(--seo)" fontSize="24" fontWeight="bold" textAnchor="middle">100</text>

            {/* SEO Text below the Circle */}
            <text x="150" y="195" fill="var(--color)" fontSize="14" fontWeight="bold" textAnchor="middle">SEO</text>
        </svg>
    );
}
