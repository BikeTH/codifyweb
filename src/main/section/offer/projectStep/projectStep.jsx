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
                We start by <span className="highlight">planning the project</span>, gathering <span className="highlight">requirements</span>, and setting up <span className="highlight">timelines</span>.
            </>
        ),
        icon: <FaRegLightbulb />,
        details: (
            <div>
                <p>Our discussion can be done through <SiZoom /> <SiGooglemeet /> <span style={{ color: "var(--warm-neon-green)" }}>Online</span> or <IoLocationOutline /> <span style={{ color: "var(--warm-neon-orange)" }}>Onsite</span></p>
            </div>
        ),
        color: "var(--warm-neon-blue)",
    },
    {
        id: 2,
        title: "02 Design",
        content: (
            <>
                Our design team creates <span className="highlight">wireframes</span> and <span className="highlight">mockups</span> to <span className="highlight">visualize the project</span>.
            </>
        ),
        icon: <FaPencilAlt />,
        details: (
            <div>
                <p>We will be using <IoLogoFigma /> <span style={{ color: "var(--warm-neon-green)" }}>Figma</span> in designing and mockup pages for you to review.</p>
            </div>
        ),
        color: "var(--warm-neon-purple)",
    },
    {
        id: 3,
        title: "03 Development",
        content: (
            <>
                We bring the design to life through <span className="highlight">coding</span> and <span className="highlight">development</span>.
            </>
        ),
        icon: <FaCode />,
        details: (
            <>
                <p style={{ textAlign: "center" }}><span style={{ color: "var(--warm-neon-orange)" }}>Tech stack</span> will use</p>
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
                <p>We always <span style={{ color: "var(--warm-neon-green)" }}>leveling up</span>!</p>
            </>
        ),
        color: "var(--warm-neon-green)",
    },
    {
        id: 4,
        title: "04 Testing",
        content: (
            <>
                We <span className="highlight">rigorously test</span> the project to ensure everything <span className="highlight">works as expected</span>.
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
                Finally, we <span className="highlight">deploy the project</span> to the <span className="highlight">live environment</span>.
            </>
        ),
        icon: <FaRocket />,
        details: (
            <>
                <div>
                    <p><span style={{ color: "var(--warm-neon-blue)" }}>Deploying</span> into <FaDigitalOcean /> <span style={{ color: "var(--warm-neon-red)" }}>Server</span> and your Order will be <span style={{ color: "var(--warm-neon-green)" }}>Successfully Delivered</span>, public will be able to access your web or app</p>
                </div>
            </>
        ),
        color: "var(--warm-neon-yellow)",
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