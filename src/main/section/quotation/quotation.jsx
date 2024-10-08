import React, { useState, lazy, Suspense } from "react";
import ScrollToSection from "../../function/scrollToSection";  // Ensure this function is correctly imported
import './quotation.css';
import { FaCalculator, FaAndroid, FaAppStoreIos, FaDesktop, FaArrowLeft} from "react-icons/fa6";
import useIntersectionObserver from "../../function/useIntersectionObserver";

export default function Quotation() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isWebsite, setIsWebsite] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [uncertainty, setUncertainty] = useState([]);


    // Data for Website Size
const websiteSizes = {
    Basic: {
        pages: "1 - 4 Pages",
        description: "Suitable for small and simple websites",
        draftDesignIncluded: true,
        cost: "RM 1499",
        price: 1499,
    },
    Standard: {
        pages: "5 - 10 Pages",
        description: "Suitable for standard size websites which include all the essential pages",
        draftDesignIncluded: true,
        cost: "RM 2499",
        price: 2499,
    },
    Custom: {
        pages: "11+ Pages",
        description: "Suitable for large range of comprehensive services & portfolios to showcase",
        draftDesignIncluded: true,
        cost: "RM 3499+",
        price: 3499
    }
};

// Data for Website Content
const websiteContents = {
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
        description: "25GB SSD Disk, 1TB Transfer, Singapore Data Center",
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
        cost: "RM 500 per Function",
        price: 500,
    },
    managing: {
        title: "Web Management",
        description: "Assist in content editing. Adding new pages, features, etc is NOT included.",
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
                <button className="contact-btn" onClick={() => { ScrollToSection('contact');}}>
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
        const previousStep = currentStep - 1;
        
        // Calculate the index for the current question
        const previousQuestionIndex = previousStep - (isWebsite ? 2 : 1);
        const previousQuestion = questions[previousQuestionIndex];
    
        // Create a copy of the current answers
        const updatedAnswers = { ...answers };
    
        // If the previous question was "Domain" or "Web Hosting", remove the associated answer
        if (previousQuestion?.question === "Domain" || previousQuestion?.question === "Web Hosting") {
            const previousAnswer = updatedAnswers[previousQuestion.question];
    
            if (previousAnswer) {
                let prevOptionDetails;
    
                if (previousQuestion.question === "Domain") {
                    prevOptionDetails = domains[previousAnswer];
                } else if (previousQuestion.question === "Web Hosting") {
                    prevOptionDetails = webHosting[previousAnswer];
                }
    
                // Adjust the total price and uncertainty state
                if (prevOptionDetails?.cost) {
                    const numericCost = parseFloat(prevOptionDetails.cost.replace(/[^0-9.-]+/g, "")) || 0;
                    setTotalPrice(prevPrice => prevPrice - numericCost);
                }
    
                if (prevOptionDetails?.subscription || (prevOptionDetails?.cost && prevOptionDetails.cost.toLowerCase().includes('vary'))) {
                    setUncertainty(prev => prev.filter(item => item.question !== previousQuestion?.question));
                }
    
                // Remove the answer from the answers state
                delete updatedAnswers[previousQuestion.question];
            }
        }
    
        // Update the state
        setAnswers(updatedAnswers);
        setCurrentStep(previousStep);
    };    

    const handleSelect = (answer, showFullOption = false, isMultiSelect = false) => {
        const updatedAnswers = { ...answers };
        const currentQuestionIndex = currentStep - (isWebsite ? 2 : 1);
        const currentQuestion = questions[currentQuestionIndex];
        let optionDetails;
    
        // Determine the option details based on the current question
        if (currentQuestion?.question === "Additional Function") {
            optionDetails = additionalFunctions[answer];
            if (optionDetails?.subscription) {
                if (optionDetails?.title !== "Complex Function") {
                    optionDetails = {
                        ...optionDetails,
                        title: optionDetails.title || "Complex Function",
                        description: optionDetails.description || "Complex function with special handling",
                        cost: optionDetails.cost || "Varies"
                    };
                }
            }
        } else if (currentQuestion?.question === "BackEnd (Dynamic)") {
            if (answer === "Yes") {
                optionDetails = backendOptions.backend;
                setUncertainty(prev => [
                    ...prev.filter(item => item.question !== currentQuestion?.question),
                    {
                        question: currentQuestion?.question,
                        title: optionDetails?.title || currentQuestion?.question,
                        description: optionDetails?.description,
                        price: optionDetails.cost
                    }
                ]);
            }} else if (currentQuestion?.question === "Basic SEO") {
            if (answer === "Yes") {
                optionDetails = basicSEO.seo;
            } else {
                optionDetails = null;
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
    
        // Handle multi-select for "Additional Function"
        if (isMultiSelect && currentQuestion?.question === "Additional Function") {
            const currentSelections = updatedAnswers[currentQuestion?.question] || [];
    
            if (currentSelections.includes(answer)) {
                // Deselect an option
                updatedAnswers[currentQuestion?.question] = currentSelections.filter(item => item !== answer);
                if (optionDetails?.cost) {
                    const numericCost = parseFloat(optionDetails.cost.replace(/[^0-9.-]+/g, "")) || 0;
                    setTotalPrice(prevPrice => prevPrice - numericCost);
                }
    
                // Remove from uncertainty if it was there
                setUncertainty(prev => prev.filter(item => item.title !== optionDetails.title));
            } else {
                // Select an option
                updatedAnswers[currentQuestion?.question] = [...currentSelections, answer];
                if (optionDetails?.cost) {
                    const numericCost = parseFloat(optionDetails.cost.replace(/[^0-9.-]+/g, "")) || 0;
                    setTotalPrice(prevPrice => prevPrice + numericCost);
                }
    
                // Add to uncertainty if it's a subscription or has variable cost
                if (optionDetails?.subscription || (optionDetails?.cost && optionDetails.cost.toLowerCase().includes('vary'))) {
                    setUncertainty(prev => [
                        ...prev.filter(item => item.question !== currentQuestion?.question),
                        {
                            question: currentQuestion?.question,
                            title: optionDetails?.title || currentQuestion?.question,
                            description: optionDetails?.description,
                            price: optionDetails.cost
                        }
                    ]);
                }
            }
        } else {
            // Handle single selections
            const prevAnswer = updatedAnswers[currentQuestion?.question];
            if (prevAnswer) {
                let prevOptionDetails;
                if (currentQuestion?.question === "Additional Function") {
                    prevOptionDetails = additionalFunctions[prevAnswer];
                    if (prevOptionDetails?.subscription) {
                        if (prevOptionDetails?.title !== "Complex Function") {
                            prevOptionDetails = {
                                ...prevOptionDetails,
                                title: prevOptionDetails.title || "Complex Function",
                                description: prevOptionDetails.description || "Complex function with special handling",
                                cost: prevOptionDetails.cost || "Varies"
                            };
                        }
                    }
                } else if (currentQuestion?.question === "BackEnd (Dynamic)") {
                    if (prevAnswer === "Yes") {
                        prevOptionDetails = backendOptions.backend;
                    }
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
    
                if (prevOptionDetails?.subscription || (prevOptionDetails?.cost && prevOptionDetails.cost.toLowerCase().includes('vary'))) {
                    setUncertainty(prev => prev.filter(item => item.question !== currentQuestion?.question));
                } else if (prevOptionDetails?.cost) {
                    const numericCost = parseFloat(prevOptionDetails.cost.replace(/[^0-9.-]+/g, "")) || 0;
                    setTotalPrice(prevPrice => prevPrice - numericCost);
                }
            }
    
            updatedAnswers[currentQuestion?.question] = answer;
    
            if (optionDetails?.cost) {
                const numericCost = parseFloat(optionDetails.cost.replace(/[^0-9.-]+/g, "")) || 0;
                setTotalPrice(prevPrice => prevPrice + numericCost);
            }
    
            if (optionDetails?.subscription || (optionDetails?.cost && optionDetails.cost.toLowerCase().includes('vary'))) {
                setUncertainty(prev => [
                    ...prev.filter(item => item.question !== currentQuestion?.question),
                    {
                        question: currentQuestion?.question,
                        title: optionDetails?.title || currentQuestion?.question,
                        description: optionDetails?.description,
                        price: optionDetails.cost
                    }
                ]);
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
                <h1><strong>{optionDetails.title}</strong></h1>
                <p>{optionDetails.description}</p>
                <p>{optionDetails.cost && `Price: ${optionDetails.cost}`}</p>
                <div className="yes-no-container">
                    <button className="yes-no-btn" onClick={() => handleSelect("Yes")}>Yes</button>
                    <button className="yes-no-btn" onClick={() => handleSelect("No")}>No</button>
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
                                <div className="option-header-info">
                                    <h3><strong>{optionDetails.title || optionKey}</strong></h3>
                                    <p style={{color:"var(--second-color)"}}>{optionDetails.description}</p>
                                </div>
                                <p>{optionDetails.cost && `Price: ${optionDetails.cost}`}</p>
                                <button 
                                    className={`multi-select-btn ${isSelected ? 'selected' : ''}`} 
                                    onClick={() => handleSelect(optionKey, false, true)}>
                                    {isSelected ? 'Cancel' : 'Select'}
                                </button>
                            </div>
                        );
                    })}
                </div>
                <div className="next-container">
                    <button 
                        className="next-btn" 
                        onClick={() => {setCurrentStep(currentStep + 1); ScrollToSection('quotation')}}>
                        Proceed
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
                <div key={index} className="platform-option">
                    <div className="platform-arrangement">
                        <p style={{fontWeight:"bold"}}>{option}</p>
                            <div className="platform-icon">
                                {option === "Website" ? <FaDesktop className="desktop-icon"/> : null}
                                {option === "App" ? (
                                    <>
                                        <FaAndroid className="android-icon" />
                                        <FaAppStoreIos className="appstore-icon"/>
                                    </>
                                ) : null}
                            </div>
                    </div>
                    <button className="select-btn" onClick={() => {handlePlatformSelection(option); ScrollToSection('quotation')}}>
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
                    <div className="option-header">
                        <div className="option-header-info">
                            <h1><strong>{optionDetails.title || optionKey}</strong></h1>
                            <p style={{color:"var(--second-color)"}}>{optionDetails.description}</p>
                        </div>
                        <p>{optionDetails.cost && `Price: ${optionDetails.cost}`}</p>
                    </div>
                    <button className="select-btn" onClick={() => {handleSelect(optionKey); ScrollToSection('quotation')}}>
                        Select
                    </button>
                </div>
            );
        });
    };

    const renderSummary = () => {
        return (
            <div className="ITconsult-price-quotation-summary" id="quotationSummary">
                <div className="quotation-summary-list">
                    <h1 style={{textAlign:"center"}}>Summary of your choice</h1>
                    {Object.entries(answers).map(([question, answer], index) => {
                        let optionDetails;
    
                        if (Array.isArray(answer)) {
                            return (
                                <div key={index}>
                                    <h4><strong>{question}:</strong></h4>
                                    {answer.map((opt, i) => {
                                        optionDetails = additionalFunctions[opt] || {};
                                        return (
                                            <div key={i}>
                                                <h4 style={{marginBottom: 0}}><strong>{optionDetails.title || opt}</strong></h4>
                                                <p style={{marginTop: 0, color:'var(--second-color)'}}>{optionDetails.description}</p>
                                                <p style={{margin: 0}}>{optionDetails.cost && `Price: ${optionDetails.cost}`}</p>
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
                                        <h4 style={{marginBottom: 0}}><strong>{optionDetails.title}</strong></h4>
                                        <h4 style={{marginTop: 0}}><strong>{question}:</strong></h4>
                                        <p style={{marginTop: 0, color:'var(--second-color)'}}>{optionDetails.description}</p>
                                        <p style={{margin: 0}}>{optionDetails.cost && `Price: ${optionDetails.cost}`}</p>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={index}>
                                        <h4><strong>{question}:</strong></h4>
                                        <p style={{margin: 0}}>Not Included</p>
                                    </div>
                                );
                            }
                        }
    
                        // Handle other options
                        optionDetails = websiteSizes[answer] || websiteContents[answer] || domains[answer] || webHosting[answer] || additionalFunctions[answer];
                        return (
                            <div key={index}>
                                <h4 style={{marginBottom: 0}}><strong>{question}:</strong></h4>
                                <h4 style={{marginTop: 0}}><strong>{optionDetails?.title || answer}</strong></h4>
                                <p style={{marginTop: 0, color:'var(--second-color)'}}>{optionDetails?.description}</p>
                                <p style={{margin: 0}}>{optionDetails?.cost && `Price: ${optionDetails.cost}`}</p>
                            </div>
                        );
                    })}
                </div>
            <div className="ITconsult-price-quotation-summary-cost" style={{paddingTop: "8px"}}>
                <div className="total-price">
                    <h4 style={{marginBottom: 0}}>Total Price: {`RM ${totalPrice.toFixed(2)}`}++</h4>
                    <p style={{margin:0, fontStyle:"italic", color:'var(--second-color)'}}>Estimation of cost</p>
                </div>
                {/*{uncertainty.length > 0 && (
                    <div className="uncertainty">
                        <p style={{textAlign:"center", fontStyle:"italic", color:'var(--second-color)'}}>Price may change without Notice</p>
                        {uncertainty.map((item, index) => (
                            <div key={index}>
                                <h4 style={{marginBottom:0}}><strong>{item.question}:</strong></h4>
                                <h4 style={{marginTop: 0, paddingTop: "8px"}}>{item.title}</h4>
                                <p style={{color:'var(--second-color)'}}>{item.description}</p>
                                <p>Price: {item.price}</p>
                            </div>
                        ))}
                    </div>
                )}*/}
                <h4>Get your Summary in PDF for FREE</h4>
                <button onClick={handleDownloadPDF} className="download-pdf-btn">
                    Download PDF
                </button>
                <button className="contact-btn" onClick={() => { ScrollToSection('contact');}}>
                    Contact Us
                </button>
                </div>
            </div>
        );
    };

    const handleDownloadPDF = async () => {
        try
        {
            const RenderBrochure = (await import('./summaryPDF')).default;
            const { pdf } = await import('@react-pdf/renderer');

            const summaryData = Object.entries(answers).map(([question, answer]) => {
                let optionDetails;
                if (Array.isArray(answer)) {
                    const details = answer.map((opt) => {
                        optionDetails = additionalFunctions[opt] || {};
                        return {
                            title: optionDetails.title || opt,
                            description: optionDetails.description,
                            cost: optionDetails.cost,
                        };
                    });
                    return { question, details };
                }
        
                if (question === "BackEnd (Dynamic)" || question === "Basic SEO") {
                    if (answer === "Yes") {
                        optionDetails = question === "BackEnd (Dynamic)" ? backendOptions.backend : basicSEO.seo;
                        return {
                            question,
                            details: [{
                                title: optionDetails.title,
                                description: optionDetails.description,
                                cost: optionDetails.cost,
                            }],
                        };
                    } else {
                        return {
                            question,
                            details: [{ title: "Not Included" }],
                        };
                    }
                }
        
                optionDetails = websiteSizes[answer] || websiteContents[answer] || domains[answer] || webHosting[answer] || additionalFunctions[answer];
                return {
                    question,
                    details: [{
                        title: optionDetails?.title || answer,
                        description: optionDetails?.description,
                        cost: optionDetails?.cost,
                    }],
                };
            });
        
            const pdfData = {
                summaryData,
                totalPrice: `RM ${totalPrice.toFixed(2)}`,
                uncertainty: uncertainty.map(item => ({
                    question: item.question,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                })),
            };
        
            const blob = await pdf(
                    <RenderBrochure pdfData={pdfData} />
            ).toBlob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'quotation-summary.pdf';
            link.click();
        }catch(error){
            console.error("Error generating PDF:", error);
            alert("There was an error generating the PDF. Please try again.");
        }
    };

    const isFinalStep = currentStep === (isWebsite ? websiteQuestions.length + 2 : 2);

    const {ref: codifyWebRef, inView: codifyWebInView} = useIntersectionObserver({threshold: 0.5}, 300)
    const {ref: codifyWebPriceRef, inView: codifyWebPriceInView} = useIntersectionObserver({threshold: 0.5}, 500)
    const {ref: codifyWebBtnRef, inView: codifyWebBtnInView} = useIntersectionObserver({threshold: 0.5}, 500)

    return (
        <div className="ITconsult-price-quotation" id="quotation">
            <h1 className={`slideIn-animate ${codifyWebInView ? 'animate' : 'paused'}`} ref={codifyWebRef} style={{ textAlign: "center", marginBottom:"0" }}>
                CodifyWeb Plan
            </h1>
    
            {currentStep === 0 ? (
                <div className="ITconsult-price-quotation-form">
                    <button className={`calc-btn ${codifyWebBtnInView ? 'animate' : 'paused'}`} ref={codifyWebBtnRef} onClick={() => setCurrentStep(1)}>Let's Find Out</button>
                    <p className={`slideDownUp-animate ${codifyWebPriceInView ? 'animate' : 'paused'}`} ref={codifyWebPriceRef} style={{color:"var(--second-color)"}}>This is just an <span style={{color:"var(--color"}}>Estimation</span> of <span style={{color:"var(--color"}}>Price</span>.</p>
                </div>
            ) : currentStep === 1 ? (
                <div className="ITconsult-price-quotation-question">
                    <h3>{initialQuestions?.[0]?.question}</h3>
                    <div className="options-container">
                        {renderOptions(initialQuestions?.[0]?.options)}
                    </div>
                    <div className="prev-btn-arrangement">
                        <button className="prev-btn" onClick={() => {ScrollToSection('quotation'),handlePrevious()}}>
                            <FaArrowLeft />
                        </button>
                        <p style={{fontSize:"1.75vmin", margin:"0"}}>Previous</p>
                    </div>
                </div>
            ) : currentStep - (isWebsite ? 2 : 1) >= 0 && !isFinalStep ? (
                <div className="ITconsult-price-quotation-question">
                    <h3>{questions?.[currentStep - (isWebsite ? 2 : 1)]?.question}</h3>
                    <div className="options-container">
                        {questions?.[currentStep - (isWebsite ? 2 : 1)]?.yesNo
                            ? renderYesNo()
                            : renderOptions(questions?.[currentStep - (isWebsite ? 2 : 1)]?.options)}
                    </div>
                    <div className="prev-btn-arrangement">
                        <button className="prev-btn" onClick={() => {ScrollToSection('quotation'),handlePrevious()}}>
                            <FaArrowLeft />
                        </button>
                        <p style={{fontSize:"1.75vmin", margin:"0"}}>Previous</p>
                    </div>
                </div>
            ) : null}
    
            {isFinalStep && isWebsite && (
                <div className="quotation-summary-arrangement">
                    <div className="quotation-summary-back">
                        <button 
                            className="quotation-summary-back-btn"
                            onClick={() => { ScrollToSection('quotation'); handleReset(); }}>
                            <FaCalculator />
                        </button>
                        <p className="recalculate-text">Back</p>
                    </div>
                    {renderSummary()}
                </div>
            )}
    
            {isFinalStep && !isWebsite && (
                <div className="quotation-summary-arrangement">
                    <div className="quotation-summary-back">
                        <button className="quotation-summary-back-btn" onClick={() => { ScrollToSection('quotation'); handleReset(); }}><FaCalculator /></button>
                        <p className="recalculate-text">Main Menu</p>
                    </div>
                    {appDescription?.description}
                </div>
            )}
        </div>
    );    
}
