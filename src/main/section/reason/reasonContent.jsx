import React from "react";
import './reasonContent.css'
import { VscVerified, VscHeart, VscGear, VscDashboard } from "react-icons/vsc";

const reasonSupport = [
    {
        id: 1,
        icon: <VscVerified />,
        title: "Enhanced Credibility & Trust",
        description: "A professional website creates a trustworthy image, making visitors more likely to view your business as reliable and credible.",
    },
    {
        id: 2,
        icon: <VscHeart />,
        title: "Improved User Experience",
        description: "Professional websites offer smooth navigation and fast loading, keeping visitors engaged and reducing the chance they’ll leave without taking action.",
    },
    {
        id: 3,
        icon: <VscGear />,
        title: "Effective Conversion Optimization",
        description: "Well-designed websites guide visitors toward making purchases with clear calls-to-action and easy checkout processes.",
    },
    {
        id: 4,
        icon: <VscDashboard />,
        title: "Enhanced Visibility & SEO",
        description: "A professionally built site improves your search engine ranking, attracting more visitors and boosting your chances of making sales.",
    },
]

export default function ReasonContent(){
    return(
        <>
        <div id="ITConsult" className="ITconsult-content">
                <div className="ITconsult-reason-content">
                    <div className="ITconsult-reason-header">
                        <h1 style={{fontWeight:"600"}}>4 Main Reasons</h1>
                        <h2 style={{fontWeight:"300"}}>Professional website Boost Sales</h2>
                    </div>
                    <div className="ITconsult-reason-support">
                        {
                            reasonSupport.map(data => (
                                <div className="ITconsult-reason-support-arrangement" key={data.id}>
                                    <h2>{data.icon}</h2>
                                    <h1 style={{fontWeight:"800"}}>{data.title}</h1>
                                    <p style={{ fontWeight:"400"}}>{data.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}