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
    return(
        <>
        <div className="ITconsult-faq" id="faq">
            <div className="ITconsult-faq-header" style={{textAlign:"center"}}>
                <h1 style={{margin:"0px"}}>FAQ</h1>
                <h3 style={{fontWeight:"lighter", margin:"0px", color:"var(--second-color)"}}>Ask Away! Your questions Matter to Us</h3>
            </div>
            <div className="ITconsult-faq-question">
                {faqs.map((faq,index) => (
                    <div className="ITconsult-faq-question-arrangement" key={faq.id} onClick={() => handleToggle(index)}>
                        <div className="faq-q-arrangement"onClick={() => handleToggle(index)}>
                        <h3>{faq.questions}</h3>
                        <AiOutlinePlus className={`icon ${activeIndex === index ? 'rotate' : ''}`} />
                        </div>
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