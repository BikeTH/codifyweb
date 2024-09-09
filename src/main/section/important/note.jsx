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

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js";
        script.async = true;
        document.body.appendChild(script);

        // Cleanup script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="note">
            <div className={`note-craft ${craftInView ? 'animate' : ''}`} ref={craftRef}>
                <h1>Our Products Crafted with</h1>
                <div>
                    <p style={{color:"var(--second-color)"}}>// Pure Code</p>
                </div>
            </div>    
            <div className={`note-why ${whyInView ? 'animate' : ''}`} ref={whyRef}>
                <h2>Less</h2>
                <div className={`note-why-support ${whyInView ? 'animate' : ''}`} ref={whyRef}>
                    <p style={{margin: 0, color:"var(--second-color)"}}>// Plugin</p>
                    <p style={{margin: 0, color:"var(--second-color)"}}>// Libraries</p>
                </div>
            </div>
            <div id="wcb" className={`carbonbadge ${carbonInView ? 'animate' : ''} `} ref={carbonRef}></div>
            <div className={`note-benefit ${benefitInView ? 'animate' : ''}`} ref={benefitRef}>
                <h5 style={{color:"var(--second-color)"}}>Making it</h5>
                <p className={`benefit-text ${showBenefit ? 'fade-in' : 'fade-out'}`}>{currentBenefit}</p>
            </div>
        </div>
    );
}
