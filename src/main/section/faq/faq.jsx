import React, { useState } from "react";
import './faq.css';
import { AiOutlinePlus } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

const faqs = [
    {
        id: 1,
        questions: "What we do ?",
        answer: (
            <>
                <p>We provide you with a professional Web / App development service for your industry</p>
            </>
        )
    },
    {
        id: 2,
        questions: "What do we need before we start develop ?",
        answer: (
            <>
                <p>We will provide you a CHECKLIST for information and content before the project starts.</p>
                <p>We will be proactive during this phase, and your cooperation is important</p>
            </>
        )
    },
    {
        id: 3,
        questions: "How long does it take for us to develop ?",
        answer: (
            <>
                <p>It takes approximately at least 2 weeks from starts to finish, depending on project complexity</p>
            </>
        )
    },
    {
        id: 4,
        questions: "Technical Issue? We're on It !",
        answer: (
            <>
                <p>If your application or website facing any issues, we will take action in fixing it right away!</p>
            </>
        )
    },
    {
        id: 5,
        questions: "How we develop our Project ?",
        answer: (
            <>
                <p style={{marginBottom:0}}>Most of our Project will be done in Programming, Not WordPress, Source Code will be given to you</p>
                <p style={{marginTop:0}}>Everything you see is created mainly by React <FaReact style={{color: "var(--warm-neon-blue)"}}/></p>
            </>
        )
    }
]

export default function Faq(){
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return(
        <>
        <div className="ITconsult-faq" id="faq">
            <div className="ITconsult-faq-header" style={{textAlign:"center"}}>
                <h1 style={{margin:"0px"}}>FAQ</h1>
                <h3 style={{margin:"0px"}}>Ask Away! Your questions Matter to Us</h3>
            </div>
            <div className="ITconsult-faq-question">
                {faqs.map((faq,index) => (
                    <div className="ITconsult-faq-question-arrangement" key={faq.id} onClick={() => handleToggle(index)}>
                        <h3 onClick={() => handleToggle(index)}>{faq.questions} 
                        <AiOutlinePlus className={`icon ${activeIndex === index ? 'rotate' : ''}`} /></h3>
                        <div className={`ITconsult-faq-answer ${activeIndex === index ? 'expanded' : ''}`}>
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}