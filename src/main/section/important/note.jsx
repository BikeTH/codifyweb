import React, {useEffect, useState} from "react";
import './note.css';

export default function Note() {
    const benefits = [
        'Unique',
        'Efficient',
        'Intuitive',
        'Reliable'
    ];

    const [currentBenefit, setCurrentBenefit] = useState(benefits[0]);
    const [showBenefit, setShowBenefit] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowBenefit(false);
            setTimeout(() => {
                setCurrentBenefit(prev => {
                    const currentIndex = benefits.indexOf(prev);
                    const nextIndex = (currentIndex + 1) % benefits.length;
                    return benefits[nextIndex];
                });
                setShowBenefit(true);
            }, 500); // Duration of fade-out
        }, 3000); // Interval for changing the word

        return () => clearInterval(interval);
    }, [benefits]);

    return(
        <div className="note">
            <div className="note-craft">
                <h1>Our Products Crafted with</h1>
                <div>
                    <p style={{color:"var(--second-color)"}}>// Pure Code</p>
                </div>
            </div>    
            <div className="note-why">
                <h2>Less</h2>
                <div>
                    <p style={{margin: 0, color:"var(--second-color)"}}>// Plugin</p>
                    <p style={{margin: 0, color:"var(--second-color)"}}>// Libraries</p>
                </div>
            </div>
            <div className="note-benefit">
                <h5 style={{color:"var(--second-color)"}}>Making it</h5>
                <p className={`benefit-text ${showBenefit ? 'fade-in' : 'fade-out'}`}>{currentBenefit}</p>
            </div>
        </div>
    )
}