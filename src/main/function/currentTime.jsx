import React, { useState, useEffect } from 'react';

export default function CurrentTime() {
    // Initialize state with the current time
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Function to update the current time
        const updateTime = () => {
        setTime(new Date());
        };

        // Update time every second
        const intervalId = setInterval(updateTime, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs once on mount

        const formatDate = (date) => {
            return date.toLocaleDateString('en-GB', { // en-GB format for day/month/year
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
      };

        const formatTimeInGMT = (date) => {
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        const seconds = date.getUTCSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

        const getGMTOffset = () => {
        const offset = -time.getTimezoneOffset() / 60; // Offset in hours
        const sign = offset >= 0 ? '+' : '-';
        return `GMT ${sign}${Math.abs(offset).toString().padStart(2, '0')}:00`;
      };
    
    return (
    <div>
        <p>{formatDate(time)} {formatTimeInGMT(time)} {getGMTOffset()}</p>
    </div>
    )
};
