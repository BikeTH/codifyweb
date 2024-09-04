import React, { useState } from "react";
import './offer.css';
import { CgWebsite, CgSmartphone } from "react-icons/cg";
import { GoPackageDependents } from "react-icons/go";
import { LuPackageOpen } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import ProjectSteps from "./projectStep/projectStep";
import ScrollToSection from "../../function/scrollToSection";

const offer = [
    {
        id: 1,
        icon: <CgSmartphone style={{color:"var(--warm-neon-blue)"}}/>,
        title: "Mobile Application",
    },
    {
        id: 2,
        icon: <CgWebsite style={{color:"var(--warm-neon-blue)"}}/>,
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

    return (
        <div className={`ITconsult-offer ${isPackage ? 'shifted' : ''}`} id="offer">
            <div className="offers-arrangement">
                <h1 style={{fontWeight:"600"}}>Our Services</h1>
                <div className="ITconsult-offers-arrangement">
                    {offer.map(data => (
                        <div className="ITconsult-offer-content" key={data.id}>
                            <h1>{data.icon}</h1>
                            <h3 style={{ color:"var(--second-color)", fontWeight:"lighter", margin: "0", transform: "translateY(-60%)" }}>{data.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`project-arrangement ${isPackage ? 'shifted-project' : ''}`}>
                <div className="project-header">
                    <h4>~ How we Delivered Project ~</h4>
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
                        <div>
                            <LuPackageOpen size={44} style={{color:"var(--warm-neon-yellow)"}}/>
                            <p className="click-me-text">Click me</p>
                        </div>
                        ) : (
                        <div>
                            <GoPackageDependents size={44} style={{color:"var(--warm-neon-yellow)"}}/>
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
