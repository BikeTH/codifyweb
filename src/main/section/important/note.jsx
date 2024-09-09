import React, { useEffect, useState } from "react";
import useIntersectionObserver from "../../function/useIntersectionObserver";
import './note.css';

export default function Note() {
    const benefits = ['Unique', 'Efficient', 'Intuitive', 'Reliable'];
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
        }, 2000); // Interval for changing the word

        return () => clearInterval(interval);
    }, [benefits]);

    const { ref: craftRef, inView: craftInView } = useIntersectionObserver({ threshold: 0.1 }, 100);
    const { ref: whyRef, inView: whyInView } = useIntersectionObserver({ threshold: 0.1 }, 100);
    const { ref: benefitRef, inView: benefitInView } = useIntersectionObserver({ threshold: 0.1 }, 100);
    const { ref: carbonRef, inView: carbonInView} = useIntersectionObserver({threshold:0.1}, 100);

    return (
        <div className="note">
            <div className={`note-craft ${craftInView ? 'animate' : 'paused'}`} ref={craftRef}>
                <h1>Our Products Crafted with</h1>
                <div>
                    <p style={{color:"var(--second-color)"}}>// Pure Code</p>
                </div>
            </div>    
            <div className={`note-why ${whyInView ? 'animate' : 'paused'}`} ref={whyRef}>
                <h2>Less</h2>
                <div className={`note-why-support ${whyInView ? 'animate' : 'paused'}`} ref={whyRef}>
                    <p style={{margin: 0, color:"var(--second-color)"}}>// Plugin</p>
                    <p style={{margin: 0, color:"var(--second-color)"}}>// Libraries</p>
                </div>
            </div>
            <div className={`carbonBadge ${carbonInView ? 'animate' : 'paused'}`} ref={carbonRef}>
                <div className="carbonBadge-arrangement">
                    <div style={{border: "1px solid var(--border)", paddingLeft:"8px", paddingRight:"8px", borderTopLeftRadius:"20px", borderBottomLeftRadius:"20px"}}>
                        <p style={{fontSize:"1.75vmin"}}>0.04g of CO2/view</p>
                    </div>
                    <div style={{border: "1px solid var(--border)", paddingLeft:"8px", paddingRight:"8px", borderTopRightRadius:"20px", borderBottomRightRadius:"20px"}}>
                    <a 
                        href="https://www.websitecarbon.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }} // This removes the default underline for links
                    >
                        <p style={{fontSize:"1.75vmin", color:"var(--seo)"}}>Website Carbon</p>
                    </a>
                    </div>
                </div>
                <p style={{margin: 0, fontSize:"1.75vmin", color:"var(--second-color)"}}>Cleaner than 96% of pages tested</p>
            </div>
            <div className={`note-benefit ${benefitInView ? 'animate' : 'paused'}`} ref={benefitRef}>
                <h5 style={{color:"var(--second-color)"}}>Making it</h5>
                <p className={`benefit-text ${showBenefit ? 'fade-in' : 'fade-out'}`}>{currentBenefit}</p>
            </div>
        </div>
    );
}
