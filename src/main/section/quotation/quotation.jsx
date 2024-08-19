import React, { useState } from "react";
import ScrollToSection from "../../function/scrollToSection";  // Ensure this function is correctly imported
import './quotation.css';

export default function Quotation() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [isWebsite, setIsWebsite] = useState(false);

    const websiteQuestions = [
        {
            question: "Website Size",
            options: [
                <div key="basic">
                    <h1>Basic</h1>
                    <h3>1 - 4 Pages</h3>
                    <p>Suitable for small and simple websites</p>
                    <p>Draft Design Included</p>
                    <p>RM 1499</p>
                </div>,
                <div key="standard">
                    <h2>Standard</h2>
                    <h3>5 - 10 Pages</h3>
                    <p>Standard size websites which include all the Essential Pages</p>
                    <p>Draft Design Included</p>
                    <p>RM 2499</p>
                </div>,
                <div key="custom">
                    <h2>Custom</h2>
                    <h3>11+ Pages</h3>
                    <p>Suitable for businesses with a Large Range of Comprehensive Services & Portfolios to showcase</p>
                    <p>Draft Design Included</p>
                    <p>RM 3499</p>
                </div>
            ]
        },
        {
            question: "Test",
            options: ["yes", "no"]
        }
    ];

    const appDescription = {
        description: (
            <div>
                <h2>App Development Services</h2>
                <p>We offer custom app development services tailored to your business needs. Whether you're looking for a basic app or a more complex solution, we can help bring your vision to life.</p>
                <button className="calc-btn" onClick={() => ScrollToSection('contact')}>
                    Contact Us
                </button>
            </div>
        )
    };

    const initialQuestions = [
        {
            question: "Platform",
            options: ["Website", "App"]
        }
    ];

    const handleSelect = (answer) => {
        if (currentStep === 1) {
            setIsWebsite(answer === "Website");
        }

        setAnswers([...answers, answer]);
        setCurrentStep(currentStep + 1);
    };

    const handleReset = () => {
        setCurrentStep(0);
        setAnswers([]);
        setIsWebsite(false);
    };

    const getQuestions = () => {
        if (currentStep === 1) return initialQuestions;
        if (isWebsite) return websiteQuestions;
        return [appDescription];
    };

    const questions = getQuestions();

    const renderOptions = (options) => {
        return options.map((option, index) => (
            <div key={index} className="option">
                <div>{option}</div>
                <button className="select-btn" onClick={() => handleSelect(option.props ? option.props.children[0].props.children : option)}>
                    Select
                </button>
            </div>
        ));
    };

    const renderSummary = () => {
        return (
            <div className="ITconsult-price-quotation-summary">
                <h3>Summary</h3>
                <p><strong>Platform:</strong> {answers[0]}</p>
                {isWebsite && answers[1] && (
                    <div>
                        <p><strong>Website Size:</strong> {answers[1]}</p>
                    </div>
                )}
                {!isWebsite && answers[1] && (
                    <div>
                        <p><strong>Test:</strong> {answers[1]}</p>
                    </div>
                )}
                <button className="calc-btn" onClick={() => ScrollToSection('contact')}>
                    Contact Us
                </button>
            </div>
        );
    };

    const isFinalStep = currentStep === (isWebsite ? websiteQuestions.length + 2 : 2);

    return (
        <div className="ITconsult-price-quotation" id="quotation">
            <h1 style={{ textAlign: "center" }}><span style={{ color: "var(--warm-neon-blue)" }}>Build</span> Website / Application Plan</h1>
            <h2 style={{ textAlign: "center", margin: "0px" }}>How Much to <span style={{ color: "var(--warm-neon-blue)" }}>Build</span> a Website / Application?</h2>
            <p style={{ textAlign: "center", margin: "0px", fontStyle: "italic" }}>Price may vary without notice</p>

            {currentStep === 0 ? (
                <div className="ITconsult-price-quotation-form">
                    <button className="calc-btn" onClick={() => setCurrentStep(1)}>Let's Find Out</button>
                    <p>This is just an Estimation of Price</p>
                </div>
            ) : currentStep === 1 ? (
                <div className="ITconsult-price-quotation-question">
                    <h3>{initialQuestions[0].question}</h3>
                    <div className="options-container">
                        {renderOptions(initialQuestions[0].options)}
                    </div>
                </div>
            ) : (currentStep - 2 >= 0 && !isFinalStep) && (
                <div className="ITconsult-price-quotation-question">
                    <h3>{questions[currentStep - 2]?.question}</h3>
                    <div className="options-container">
                        {questions[currentStep - 2]?.options ? renderOptions(questions[currentStep - 2].options) : null}
                    </div>
                </div>
            )}
            {isFinalStep && isWebsite && (
                <div>
                    {renderSummary()}
                    <button className="reset-btn" onClick={handleReset}>Reset</button>
                </div>
            )}
            {isFinalStep && !isWebsite && (
                <div>
                    {appDescription.description}
                    <button className="reset-btn" onClick={handleReset}>Reset</button>
                </div>
            )}
        </div>
    );
}
