import React, { useState } from "react";
import ScrollToSection from "../../function/scrollToSection";  // Ensure this function is correctly imported
import './quotation.css';

export default function Quotation() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isWebsite, setIsWebsite] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [uncertainty, setUncertainty] = useState([]);


    // Data for Website Size
const websiteSizes = {
    basic: {
        pages: "1 - 4 Pages",
        description: "Suitable for small and simple websites",
        draftDesignIncluded: true,
        cost: "RM 1499",
        price: 1499,
    },
    standard: {
        pages: "5 - 10 Pages",
        description: "Standard size websites which include all the Essential Pages",
        draftDesignIncluded: true,
        cost: "RM 2499",
        price: 2499,
    },
    custom: {
        pages: "11+ Pages",
        description: "Suitable for businesses with a Large Range of Comprehensive Services & Portfolios to showcase",
        draftDesignIncluded: true,
        cost: "RM 3499",
        price: 3499
    }
};

// Data for Website Content
const websiteContents = {
    usAI: {
        title: "From Us",
        description: "Your content will be generated by AI and we will make sure it is related to your industry",
        cost: "FREE",
        price: 0,
    },
    usDM: {
        title: "Marketing Team",
        description: "Copywriting and content will be made by Marketing Team which can be outsourced or from ourselves",
        cost: "Price may vary",
        price: "vary",
    },
    custInfo: {
        title: "From You",
        description: "We will provide you a form for you to fill up the content, and if you want to add more content, you can edit the form too",
        cost: "FREE",
        price: 0,
    }
};

// Data for Domain
const domains = {
    newDomain: {
        title: "New Domain",
        description: "Pick your Own Domain, example: techxyz.com",
        cost: "RM 100 per Year",
        subscription:"year",
        price: 100,
    },
    existingDomain: {
        title: "Existing Domain",
        description: "Reuse your domain by providing it to us",
        cost: "FREE",
        price: 0,
    }
};

// Data for Web Hosting
const webHosting = {
    basicServer: {
        title: "Basic",
        features: [
            "25GB SSD Disk",
            "1TB Transfer Traffic",
            "Singapore, Data Center"
        ],
        subscription:"month",
        cost: "RM 50 per Month",
        price: 50,
    },
    customServer: {
        title: "Custom",
        description: "Consult Us for the server spec",
        cost: "Price may Vary",
        price: "vary"
    }
};

// Data for BackEnd (Dynamic)
const backendOptions = {
    backend: {
        title: "DataBase",
        description: "Required data handling, example, e-commerce, POS system, etc. Talk to us for the price, based on project complexity",
        yesNo: true, // Add this flag
        price: "vary"
    }
};

// Data for Basic SEO
const basicSEO = {
    seo: {
        title: "SEO",
        description: "Make your website appear in Google Search Engine",
        cost: "RM 300",
        price: 300,
        yesNo: true // Add this flag
    }
};

// Data for Additional Functions
const additionalFunctions = {
    complexFunction: {
        title: "Complex Function",
        description: "Create functions that require complex calculations, code without libraries, multiple quizzes, etc.",
        subscription:"function",
        cost: "RM 500 per Function",
        price: 500,
    },
    managing: {
        title: "Web Management",
        description: "Assist in managing your server, content editing, technical issues, etc. Adding new pages, features, etc is NOT included.",
        subscription:"month",
        cost: "RM 200 per Month",
        price: 200,
    },
    languageSupport: {
        title: "Support Multiple Language",
        description: "Make it worldwide readable",
        cost: "RM 100",
        price: 100
    }
};

    // Array of questions specific to websites
const websiteQuestions = [
    {
        question: "Website Size",
        options: Object.keys(websiteSizes) // ["basic", "standard", "custom"]
    },
    {
        question: "Website Content",
        options: Object.keys(websiteContents) // ["usAI", "usDM", "custInfo"]
    },
    {
        question: "Domain",
        options: Object.keys(domains) // ["newDomain", "existingDomain"]
    },
    {
        question: "Web Hosting",
        options: Object.keys(webHosting) // ["basicServer", "customServer"]
    },
    {
        question: "BackEnd (Dynamic)",
        options: Object.keys(backendOptions) // ["backend"]
    },
    {
        question: "Basic SEO",
        options: Object.keys(basicSEO) // ["seo"]
    },
    {
        question: "Additional Function",
        options: Object.keys(additionalFunctions) // ["complexFunction", "managing", "languageSupport"]
    }
];

    const appDescription = {
        description: (
            <div>
                <h2>App Development Services</h2>
                <p>We offer custom app development services tailored to your business needs...</p>
                <button className="calc-btn" onClick={() => { ScrollToSection('contact'); handleReset(); }}>
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

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSelect = (answer, showFullOption = false, isMultiSelect = false) => {
        const updatedAnswers = { ...answers };
        const currentQuestionIndex = currentStep - (isWebsite ? 2 : 1);
        const currentQuestion = questions[currentQuestionIndex];
        let optionDetails;
    
        // Determine the option details based on the current question
        if (currentQuestion?.question === "Additional Function") {
            optionDetails = additionalFunctions[answer];
        } else if (currentQuestion?.question === "BackEnd (Dynamic)") {
            optionDetails = backendOptions.backend;
        } else if (currentQuestion?.question === "Basic SEO") {
            if (answer === "Yes") {
                optionDetails = basicSEO.seo;
            } else {
                optionDetails = null; // No action needed for "No" selection
            }
        } else if (currentQuestion?.question === "Website Size") {
            optionDetails = websiteSizes[answer];
        } else if (currentQuestion?.question === "Website Content") {
            optionDetails = websiteContents[answer];
        } else if (currentQuestion?.question === "Domain") {
            optionDetails = domains[answer];
        } else if (currentQuestion?.question === "Web Hosting") {
            optionDetails = webHosting[answer];
        }
    
        // Remove the previous selection from uncertainty and total price if it exists
        const prevAnswer = updatedAnswers[currentQuestion?.question];
        if (prevAnswer) {
            let prevOptionDetails;
            if (currentQuestion?.question === "Additional Function") {
                prevOptionDetails = additionalFunctions[prevAnswer];
            } else if (currentQuestion?.question === "BackEnd (Dynamic)") {
                prevOptionDetails = backendOptions.backend;
            } else if (currentQuestion?.question === "Basic SEO" && prevAnswer === "Yes") {
                prevOptionDetails = basicSEO.seo;
            } else if (currentQuestion?.question === "Website Size") {
                prevOptionDetails = websiteSizes[prevAnswer];
            } else if (currentQuestion?.question === "Website Content") {
                prevOptionDetails = websiteContents[prevAnswer];
            } else if (currentQuestion?.question === "Domain") {
                prevOptionDetails = domains[prevAnswer];
            } else if (currentQuestion?.question === "Web Hosting") {
                prevOptionDetails = webHosting[prevAnswer];
            }
    
            if (prevOptionDetails?.cost) {
                const numericCost = parseFloat(prevOptionDetails.cost.replace(/[^0-9.-]+/g, "")) || 0;
                setTotalPrice(prevPrice => prevPrice - numericCost);
            }
        }
    
        // Now add the new selection if it's not "No"
        if (optionDetails && optionDetails?.cost) {
            const numericCost = parseFloat(optionDetails.cost.replace(/[^0-9.-]+/g, "")) || 0;
            setTotalPrice(prevPrice => prevPrice + numericCost);
        }
    
        // Update the answers object based on the selection
        if (showFullOption) {
            updatedAnswers[currentQuestion?.question] = currentQuestion?.options[0];
        } else {
            if (currentQuestion?.yesNo) {
                if (answer === "No") {
                    updatedAnswers[currentQuestion?.question] = "No";
                    setCurrentStep(currentStep + 1); // Move to next step if No is selected
                    setAnswers(updatedAnswers);
                    return;
                } else if (answer === "Yes") {
                    updatedAnswers[currentQuestion?.question] = "Yes";
                }
            } else {
                if (isMultiSelect) {
                    if (!updatedAnswers[currentQuestion?.question]) {
                        updatedAnswers[currentQuestion?.question] = [];
                    }
                    if (updatedAnswers[currentQuestion?.question].includes(answer)) {
                        updatedAnswers[currentQuestion?.question] = updatedAnswers[currentQuestion?.question].filter(item => item !== answer);
                    } else {
                        updatedAnswers[currentQuestion?.question].push(answer);
                    }
                } else {
                    updatedAnswers[currentQuestion?.question] = answer;
                }
            }
        }
    
        // Set the platform type on the first step
        if (currentStep === 1) {
            setIsWebsite(answer === "Website");
        }
    
        setAnswers(updatedAnswers);
    
        if (!isMultiSelect) {
            setCurrentStep(currentStep + 1);
        }
    };    

    const handlePlatformSelection = (platform) => {
        handleSelect(platform);
        setCurrentStep(2); // Move to the next step after platform selection
    };

    const renderYesNo = () => {
        const currentQuestionIndex = currentStep - (isWebsite ? 2 : 1);
        const currentQuestion = questions[currentQuestionIndex];
    
        // Map to retrieve the option details based on the current question
        const getOptionDetails = () => {
            if (currentQuestion.question === "BackEnd (Dynamic)") {
                return backendOptions.backend;
            }
            if (currentQuestion.question === "Basic SEO") {
                return basicSEO.seo;
            }
            return null;
        };
    
        const optionDetails = getOptionDetails();
    
        if (!optionDetails) {
            return null; // If no option details, return nothing
        }
    
        return (
            <div>
                <div>
                    <strong>{optionDetails.title}</strong>
                </div>
                <div>{optionDetails.description}</div>
                <div>{optionDetails.cost && `Price: ${optionDetails.cost}`}</div>
                <div className="yes-no-container">
                    <button 
                        className="yes-no-btn" 
                        onClick={() => handleSelect("Yes")}
                    >
                        Yes
                    </button>
                    <button 
                        className="yes-no-btn" 
                        onClick={() => handleSelect("No")}
                    >
                        No
                    </button>
                </div>
            </div>
        );
    };

    const handleReset = () => {
        setCurrentStep(0);
        setAnswers({});
        setIsWebsite(false);
        setTotalPrice(0);
        setUncertainty([]);
    };
    

    const getQuestions = () => {
        if (currentStep === 1) return initialQuestions;
        if (isWebsite) return websiteQuestions;
        return [appDescription];
    };

    const questions = getQuestions();

    const renderAdditionalFunctions = () => {
        const currentQuestionIndex = currentStep - (isWebsite ? 2 : 1);
        const currentQuestion = questions[currentQuestionIndex];
        
        return (
            <div>
                <div className="options-container">
                    {currentQuestion?.options.map((optionKey, index) => {
                        const optionDetails = additionalFunctions[optionKey];
                        const isSelected = answers["Additional Function"] && answers["Additional Function"].includes(optionKey);
                        
                        return (
                            <div key={index} className="option">
                                <div><strong>{optionDetails.title || optionKey}</strong></div>
                                <div>{optionDetails.description}</div>
                                <div>{optionDetails.cost && `Price: ${optionDetails.cost}`}</div>
                                <button 
                                    className={`select-btn ${isSelected ? 'selected' : ''}`} 
                                    onClick={() => handleSelect(optionKey, false, true)}>
                                    {isSelected ? 'Deselect' : 'Select'}
                                </button>
                            </div>
                        );
                    })}
                </div>
                <div className="next-container">
                    <button 
                        className="next-btn" 
                        onClick={() => setCurrentStep(currentStep + 1)}>
                        Next
                    </button>
                </div>
            </div>
        );
    };

    const renderOptions = (options) => {
        const currentQuestionIndex = currentStep - (isWebsite ? 2 : 1);
        const currentQuestion = questions[currentQuestionIndex];
    
        if (!currentQuestion || currentQuestion.question === "Platform") {
            return options.map((option, index) => (
                <div key={index} className="option">
                    <div>{option}</div>
                    <button className="select-btn" onClick={() => handlePlatformSelection(option)}>
                        Select
                    </button>
                </div>
            ));
        }
    
        if (currentQuestion.question === "BackEnd (Dynamic)" || currentQuestion.question === "Basic SEO") {
            return renderYesNo();
        }
    
        // Handle other options for different questions
        if (currentQuestion.question === "Additional Function") {
            return renderAdditionalFunctions();
        }
    
        return options.map((optionKey, index) => {
            let optionDetails;
    
            switch (currentQuestion?.question) {
                case "Website Size":
                    optionDetails = websiteSizes[optionKey];
                    break;
                case "Website Content":
                    optionDetails = websiteContents[optionKey];
                    break;
                case "Domain":
                    optionDetails = domains[optionKey];
                    break;
                case "Web Hosting":
                    optionDetails = webHosting[optionKey];
                    break;
                case "BackEnd (Dynamic)":
                    optionDetails = backendOptions[optionKey];
                    break;
                case "Basic SEO":
                    optionDetails = basicSEO[optionKey];
                    break;
                case "Additional Function":
                    optionDetails = additionalFunctions[optionKey];
                    break;
                default:
                    console.error("Unrecognized question:", currentQuestion?.question);
                    return null;
            }
    
            if (!optionDetails) {
                console.error("Option details not found for:", optionKey);
                return null;
            }
    
            return (
                <div key={index} className="option">
                    <div><strong>{optionDetails.title || optionKey}</strong></div>
                    <div>{optionDetails.description}</div>
                    <div>{optionDetails.cost && `Price: ${optionDetails.cost}`}</div>
                    <button className="select-btn" onClick={() => handleSelect(optionKey)}>
                        Select
                    </button>
                </div>
            );
        });
    };    

    const renderSummary = () => {
        return (
            <div className="ITconsult-price-quotation-summary">
                <h3>Summary of your choice</h3>
                <div className="quotation-summary-list">
                    {Object.entries(answers).map(([question, answer], index) => {
                        let optionDetails;
    
                        if (Array.isArray(answer)) {
                            return (
                                <div key={index}>
                                    <p><strong>{question}:</strong></p>
                                    {answer.map((opt, i) => {
                                        optionDetails = additionalFunctions[opt] || {};
                                        return (
                                            <div key={i}>
                                                <strong>{optionDetails.title || opt}</strong>
                                                <div>{optionDetails.description}</div>
                                                <div>{optionDetails.cost && `Price: ${optionDetails.cost}`}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                                
                            );
                        }
    
                        // Handle Yes/No answers
                        if (question === "BackEnd (Dynamic)" || question === "Basic SEO") {
                            if (answer === "Yes") {
                                optionDetails = question === "BackEnd (Dynamic)" ? backendOptions.backend : basicSEO.seo;
                                return (
                                    <div key={index}>
                                        <p><strong>{question}:</strong></p>
                                        <div><strong>{optionDetails.title}</strong></div>
                                        <div>{optionDetails.description}</div>
                                        <div>{optionDetails.cost && `Price: ${optionDetails.cost}`}</div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={index}>
                                        <p><strong>{question}:</strong></p>
                                        <div>Not Included</div>
                                    </div>
                                );
                            }
                        }
    
                        // Handle other options
                        optionDetails = websiteSizes[answer] || websiteContents[answer] || domains[answer] || webHosting[answer] || additionalFunctions[answer];
                        return (
                            <div key={index}>
                                <p><strong>{question}:</strong></p>
                                <div><strong>{optionDetails?.title || answer}</strong></div>
                                <div>{optionDetails?.description}</div>
                                <div>{optionDetails?.cost && `Price: ${optionDetails.cost}`}</div>
                            </div>
                        );
                    })}
                </div>
                <div className="total-price">
                <h4>Total Price: {`RM ${totalPrice.toFixed(2)}`}</h4>
            </div>
            {uncertainty.length > 0 && (
                <div className="uncertainty">
                    <h4>Uncertainty:</h4>
                    {uncertainty.map((item, index) => (
                        <div key={index}>
                            <p><strong>{item.question}:</strong> {item.title}</p>
                            <p>{item.description}</p>
                            <p>Price: {item.price}</p>
                        </div>
                    ))}
                </div>
            )}
                <button className="calc-btn" onClick={() => { ScrollToSection('contact'); handleReset(); }}>
                    Contact Us
                </button>
            </div>
        );
    };

    const isFinalStep = currentStep === (isWebsite ? websiteQuestions.length + 2 : 2);

    return (
        <div className="ITconsult-price-quotation" id="quotation">
            <h1 style={{ textAlign: "center" }}>
                <span style={{ color: "var(--warm-neon-blue)" }}>Build</span> Website / Application Plan
            </h1>
            <h2 style={{ textAlign: "center", margin: "0px" }}>
                How Much to <span style={{ color: "var(--warm-neon-blue)" }}>Build</span> a Website / Application?
            </h2>
            <p style={{ textAlign: "center", margin: "0px", fontStyle: "italic" }}>
                Price may vary without notice
            </p>
    
            {currentStep === 0 ? (
                <div className="ITconsult-price-quotation-form">
                    <button className="calc-btn" onClick={() => setCurrentStep(1)}>Let's Find Out</button>
                    <p>This is just an Estimation of Price</p>
                </div>
            ) : currentStep === 1 ? (
                <div className="ITconsult-price-quotation-question">
                    <h3>{initialQuestions?.[0]?.question}</h3>
                    <div className="options-container">
                        {renderOptions(initialQuestions?.[0]?.options)}
                    </div>
                    <button className="prev-btn" onClick={() => handlePrevious()}>
                        Previous
                    </button>
                </div>
            ) : currentStep - (isWebsite ? 2 : 1) >= 0 && !isFinalStep ? (
                <div className="ITconsult-price-quotation-question">
                    <h3>{questions?.[currentStep - (isWebsite ? 2 : 1)]?.question}</h3>
                    <div className="options-container">
                        {questions?.[currentStep - (isWebsite ? 2 : 1)]?.yesNo
                            ? renderYesNo()
                            : renderOptions(questions?.[currentStep - (isWebsite ? 2 : 1)]?.options)}
                    </div>
                    <button className="prev-btn" onClick={() => handlePrevious()}>
                        Previous
                    </button>
                </div>
            ) : null}
    
            {isFinalStep && isWebsite && (
                <div className="quotation-summary-arrangement">
                    <button onClick={() => { ScrollToSection('quotation'); handleReset(); }}>Back</button>
                    {renderSummary()}
                </div>
            )}
    
            {isFinalStep && !isWebsite && (
                <div className="quotation-summary-arrangement">
                    <button onClick={() => { ScrollToSection('quotation'); handleReset(); }}>Back</button>
                    {appDescription?.description}
                </div>
            )}
        </div>
    );    
}
