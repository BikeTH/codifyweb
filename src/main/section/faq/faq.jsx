import React, { useState } from "react";
import './faq.css';
import { AiOutlinePlus } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import useIntersectionObserver from "../../function/useIntersectionObserver";

const faqs = [
    {
        id: 1,
        questions: "What we do ?",
        answer: (
            <>
                <p>We provide you with a professional <span style={{color:"var(--color)", fontWeight:"600"}}>Web / App</span> development service for your Industry</p>
            </>
        )
    },
    {
        id: 2,
        questions: "What do we need before we start develop ?",
        answer: (
            <>
                <p>We will provide you a <span style={{color:"var(--color)", fontWeight:"600"}}>CHECKLIST</span> for Information and Content before the project starts.</p>
                <p>We will be <span style={{color:"var(--color)", fontWeight:"600"}}>Proactive</span> during this phase, and your Cooperation is <span style={{color:"var(--color)", fontWeight:"600"}}>Important</span></p>
            </>
        )
    },
    {
        id: 3,
        questions: "How long does it take for us to develop ?",
        answer: (
            <>
                <p>It takes approximately <span style={{color:"var(--color)", fontWeight:"600"}}>At Least 2 Weeks</span> from Starts to Finish, depending on Project Complexity</p>
            </>
        )
    },
    {
        id: 4,
        questions: "Technical Issue? We're on It !",
        answer: (
            <>
                <p>If your Application or Website Facing any <span style={{color:"var(--color)", fontWeight:"600"}}>Issues</span>, we will take Action in Fixing it Right Away!</p>
            </>
        )
    },
    {
        id: 5,
        questions: "How we develop our Project ?",
        answer: (
            <>
                <p style={{marginBottom:0}}>Most of our Project will be done in <span style={{color:"var(--color)", fontWeight:"600"}}>Programming</span>, <span style={{color:"var(--color)", fontWeight:"600"}}>Not</span> WordPress, Source Code will be given to you</p>
                <p style={{marginTop:0}}>Everything you see is created mainly by <span style={{color:"var(--color)", fontWeight:"600"}}>React</span> <FaReact style={{color: "var(--warm-neon-blue)"}}/></p>
            </>
        )
    }
]

export default function Faq(){
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const { ref: faqRef, inView: faqInView } = useIntersectionObserver({ threshold: 0.1 }, 300);
    const { ref: faqSupportRef, inView: faqSupportInView } = useIntersectionObserver({ threshold: 0.2 }, 300);
    return(
        <>
        <div className="ITconsult-faq" id="faq">
            <div className="ITconsult-faq-header" style={{textAlign:"center"}}>
                <h1 className={`slideIn-animate ${faqInView ? 'animate' : 'paused'} `} ref={faqRef} style={{margin:"0px"}}>FAQ</h1>
                <h3 className={`slideDownUp-animate ${faqSupportInView ? 'animate' : 'paused'}`} ref={faqSupportRef} style={{fontWeight:"lighter", margin:"0px", color:"var(--second-color)"}}>Ask Away! Your questions Matter to Us</h3>
            </div>
            <div className="ITconsult-faq-question">
                {faqs.map((faq,index) => {
                    const { ref: faqQuestionRef, inView: faqQuestionInView } = useIntersectionObserver({ threshold: 0.5 }, 300);
                    const { ref: faqButtonRef, inView: faqButtonInView } = useIntersectionObserver({ threshold: 0.5 }, 300);
                    const { ref: faqBorderRef, inView: faqBorderInView } = useIntersectionObserver({ threshold: 0.5 }, 300);
                    return(
                    <div 
                        className={`ITconsult-faq-question-arrangement ${faqBorderInView ? 'animate' : 'paused'}`} 
                        key={faq.id} 
                        onClick={() => handleToggle(index)} 
                        ref={faqBorderRef}  // Attach the ref here to track the border's visibility
                    >
                        <div className="faq-q-arrangement"onClick={() => handleToggle(index)}>
                            <h3 className={`slideRightIn-animate ${faqQuestionInView ? 'animate' : 'paused'}`} ref={faqQuestionRef}>{faq.questions}</h3>
                            <h5 className={`slideUpDown-animate ${faqButtonInView ? 'animate' : 'paused'}`} ref={faqButtonRef}><AiOutlinePlus className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`} /></h5>
                        </div>
                        <div className={`ITconsult-faq-answer ${activeIndex === index ? 'expanded' : ''}`}>
                            {faq.answer}
                        </div>
                    </div>
                    );
                })
                }
            </div>
        </div>
        </>
    )
}