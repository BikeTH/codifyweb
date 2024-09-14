import React, { useState } from "react";
import './offer.css';
import { CgWebsite, CgSmartphone } from "react-icons/cg";
import { GoPackageDependents } from "react-icons/go";
import { LuPackageOpen } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import ProjectSteps from "./projectStep/projectStep";
import ScrollToSection from "../../function/scrollToSection";
import useIntersectionObserver from "../../function/useIntersectionObserver";

const offer = [
    {
        id: 1,
        icon: <CgSmartphone style={{color:"var(--warm-neon-orange)"}}/>,
        title: "Mobile Application",
    },
    {
        id: 2,
        icon: <CgWebsite style={{color:"var(--warm-neon-orange)"}}/>,
        title: "Website",
    }
];

export default function Offer() {
    const [isPackage, setIsPackage] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleClick = () => {
        handlePackageClick();
        ScrollToSection('offer');
    }

    const handlePackageClick = () => {
        setIsPackage(!isPackage);
        setIsHovering(false);
    };

    const { ref: serviceRef, inView: serviceInView } = useIntersectionObserver({ threshold: 0.1 }, 300);
    const { ref: deliverRef, inView: deliverInView } = useIntersectionObserver({ threshold: 0.1 }, 300);
    const { ref: packageRef, inView: packageInView } = useIntersectionObserver({ threshold: 0.1 }, 400);
    const { ref: packageOpenRef, inView: packageOpenInView } = useIntersectionObserver({ threshold: 0.1 }, 100);

    return (

        <div className={`ITconsult-offer ${isPackage ? 'shifted' : ''}`} id="offer">
            <div className="offers-arrangement">
                <h1 className={`slideIn-animate ${serviceInView ? 'animate' : 'paused'}`} ref={serviceRef} style={{fontWeight:"600"}}>Our Services</h1>
                <div className="ITconsult-offers-arrangement">
                    {
                        offer.map(data => {
                            const { ref: iconRef, inView: iconInView } = useIntersectionObserver({ threshold: 0.1 }, 300);
                            const { ref: iconDetailRef, inView: iconDetailInView } = useIntersectionObserver({ threshold: 0.1 }, 500);
                            return(
                            <div className="ITconsult-offer-content" key={data.id}>
                                <h1 className={`slideUpDown-animate ${iconInView ? 'animate' : 'paused'}`} ref={iconRef}>{data.icon}</h1>
                                <h3 className={`slideDownUp-animate ${iconDetailInView ? 'animate' : 'paused'}`} ref={iconDetailRef} style={{ color:"var(--second-color)", fontWeight:"lighter", margin: "0", transform: "translateY(-60%)" }}>{data.title}</h3>
                            </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className={`project-arrangement ${isPackage ? 'shifted-project' : ''}`}>
                <div className="project-header">
                    <h4 className={`slideIn-animate ${deliverInView ? 'animate' : 'paused'}`} ref={deliverRef}>How we Delivered Project</h4>
                    {isPackage && (
                        <div
                            className="workflow-btn-cancel"
                            onClick={handlePackageClick}
                        >
                            <MdClose />
                        </div>
                    )}
                </div>
                <div
                    className="workflow-btn"
                    onClick={handleClick}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {isPackage ? null : (
                    isHovering ? (
                        <div className={`slideDownUp-animate ${packageOpenInView ? 'animate' : 'paused'}`} ref={packageOpenRef}>
                            <LuPackageOpen size={44} style={{color:"var(--warm-neon-orange)"}}/>
                            <p className="click-me-text">Click me</p>
                        </div>
                        ) : (
                        <div className={`slideUpDown-animate ${packageInView ? 'animate' : 'paused'}`} ref={packageRef}>
                            <GoPackageDependents size={44} style={{color:"var(--warm-neon-orange)"}}/>
                            <p className="click-me-text">Click me</p>
                        </div>
                        )
                    )}
                </div>
                {isPackage && (
                    <div className="project-content">
                        <ProjectSteps />
                    </div>
                )}
            </div>
        </div>
    );
}
