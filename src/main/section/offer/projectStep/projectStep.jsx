import React, { useState, useRef } from "react";
import './projectStep.css';
import ScrollToSection from "../../../function/scrollToSection";
import { FaRegLightbulb, FaPencilAlt, FaCode, FaBug, FaRocket } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa6";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { IoLogoFigma, IoLogoReact, IoLogoNodejs, IoLogoCss3, IoLogoJavascript, IoLocationOutline } from "react-icons/io5";
import { SiMysql, SiPostgresql, SiExpo, SiZoom, SiGooglemeet } from "react-icons/si";

const steps = [
    {
        id: 1,
        title: "01 Planning",
        content: (
            <>
                Plan the project, gather requirements and set up a timeline.
            </>
        ),
        icon: <FaRegLightbulb />,
        details: (
            <div>
                <p>Discussion can be conducted through <span style={{ color: "var(--warm-neon-orange)" }}>Online</span> or <span style={{ color: "var(--warm-neon-orange)" }}>Onsite</span></p>
            </div>
        ),
        color: "var(--warm-neon-orange)",
    },
    {
        id: 2,
        title: "02 Design",
        content: (
            <>
                Create <span className="highlight">wireframes</span> and produce <span className="highlight">mockups</span> to <span className="highlight">visualize the project</span>.
            </>
        ),
        icon: <FaPencilAlt />,
        details: (
            <div>
                <p>Figma will be used in designing and mockup pages for you to review.</p>
            </div>
        ),
        color: "var(--warm-neon-orange)",
    },
    {
        id: 3,
        title: "03 Development",
        content: (
            <>
                Implement design to life via <span className="highlight">coding</span> and <span className="highlight">development</span>.
            </>
        ),
        icon: <FaCode />,
        details: (
            <>
                <p style={{ textAlign: "center" }}><span style={{ color: "var(--warm-neon-orange)" }}>Tech stack</span> will be applied</p>
                <div className="development-arrangement">
                    <div className="development-content-arrangement">
                        <h4 style={{ textAlign: "center" }}>Website</h4>
                        <h5 style={{ textAlign: "center" }}><IoLogoReact /><IoLogoNodejs /><IoLogoCss3 /><IoLogoJavascript /><SiMysql /><SiPostgresql /></h5>
                    </div>
                    <div className="development-content-arrangement">
                        <h4>Mobile App</h4>
                        <h5 style={{ textAlign: "center" }}><SiExpo /></h5>
                    </div>
                </div>
                <p>We always <span style={{ color: "var(--warm-neon-orange)" }}>leveling up</span>!</p>
            </>
        ),
        color: "var(--warm-neon-orange)",
    },
    {
        id: 4,
        title: "04 Testing",
        content: (
            <>
                Evaluate the project to <span className="highlight">guarantee</span> the project runs smoothly <span className="highlight">as expected</span>.
            </>
        ),
        icon: <FaBug />,
        details: (
            <>
                <div className="testing-arrangement">
                    <p>Functionality Testing</p>
                    <p>Usability Testing</p>
                    <p>Performance Testing</p>
                    <p>Security Testing</p>
                    <p>Compatibility Testing</p>
                    <p>Accessibility Testing</p>
                    <p>Integration Testing</p>
                    <p>Regression Testing</p>
                    <p>Load and Stress Testing</p>
                    <p>Data Testing</p>
                    <p>User Acceptance Testing (UAT)</p>
                    <p>Backup and Recovery Testing</p>
                </div>
            </>
        ),
        color: "var(--warm-neon-orange)",
    },
    {
        id: 5,
        title: "05 Deployment",
        content: (
            <>
                Launch the project in the <span className="highlight">live environment</span>.
            </>
        ),
        icon: <FaRocket />,
        details: (
            <>
                <div>
                    <p>Deploy into server and your order will be <span style={{ color: "var(--warm-neon-orange)" }}>Successfully Delivered</span>, public will be able to access your web or app</p>
                </div>
            </>
        ),
        color: "var(--warm-neon-orange)",
    }
];


export default function ProjectSteps() {
    const [currentStep, setCurrentStep] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const toggleDetails = () => {
        setShowDetails(prev => !prev);
    };

    const handleStepClick = (index) => {
        setCurrentStep(index);
        ScrollToSection('project');
    };

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            ScrollToSection('project');
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            ScrollToSection('project');
        }
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const deltaX = touchStartX.current - touchEndX.current;

        if (deltaX > 50) {
            handleNext();
        } else if (deltaX < -50) {
            handlePrev();
        }
    };

    return (
        <div 
            onTouchStart={handleTouchStart} 
            onTouchMove={handleTouchMove} 
            onTouchEnd={handleTouchEnd}
        >
            <div className="project-navigation" id="project">
                <ul>
                    {steps.map((step, index) => (
                        <li 
                            key={step.id}
                            className={currentStep === index ? 'active' : ''}
                            onClick={() => handleStepClick(index)}
                        >
                            {step.icon}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="project-steps">
                <h2 style={{ color: steps[currentStep].color }}>{steps[currentStep].title}</h2>
                <p style={{fontWeight:"lighter", color:"var(--second-color)"}}>{steps[currentStep].content}</p>
                <div className="show-details">
                    <button onClick={toggleDetails}>
                        {showDetails ? 'Show Less' : 'More Details'}
                    </button>
                </div>
                <div>
                    {showDetails && (
                        <div className="details">
                            {steps[currentStep].details}
                        </div>
                    )}
                </div>
                <div className="step-navigation">
                    {currentStep > 0 && (
                        <button onClick={handlePrev} className="step-nav-btnmsg step-prev-btn">
                            <MdArrowBackIos style={{ fontSize: "24px" }} />
                            <span className="step-nav-show-btmmsg">Prev</span>
                        </button>
                    )}
                    {currentStep < steps.length - 1 && (
                        <button onClick={handleNext} className="step-nav-btnmsg step-next-btn">
                            <MdArrowForwardIos style={{ fontSize: "24px" }} />
                            <span className="step-nav-show-btmmsg">Next</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}