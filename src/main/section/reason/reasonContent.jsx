import React from "react";
import './reasonContent.css'
import { VscVerified, VscHeart, VscGear, VscDashboard } from "react-icons/vsc";

const reasonSupport = [
    {
        id: 1,
        icon: <VscVerified />,
        title: "Enhanced Credibility & Trust",
        description: "A professional website builds Trust and Reliability.",
        color: "var(--warm-neon-blue)",
    },
    {
        id: 2,
        icon: <VscHeart />,
        title: "Improved User Experience",
        description: "Interactive and Fast loading keep Users Engaged",
        color: "var(--warm-neon-red)",
    },
    {
        id: 3,
        icon: <VscGear />,
        title: "Effective Conversion Optimization",
        description: "Well-designed and Informative sites lead to Sales Boost",
        color: "var(--warm-neon-green)",
    },
    {
        id: 4,
        icon: <VscDashboard />,
        title: "Enhanced Visibility & SEO",
        description: "Boost your site ranking and Attracts more Visitors",
        color: "var(--warm-neon-purple)",
    },
]

export default function ReasonContent(){
    return(
        <>
        <div id="ITConsult" className="ITconsult-content">
                <div className="ITconsult-reason-content">
                    <div className="ITconsult-reason-header">
                        <h1 style={{fontWeight:"600"}}>Transform Your Business Today</h1>
                        <h3 style={{fontWeight:"300"}}>Unlock the Power of a Digital Application to Propel Your Success</h3>
                    </div>
                    <div className="ITconsult-reason-support">
                        {
                            reasonSupport.map(data => (
                                <div className="ITconsult-reason-support-arrangement" key={data.id}>
                                    <h2 style={{color: data.color}}>{data.icon}</h2>
                                    <h3 style={{fontWeight:"800", color: data.color, marginTop:"0"}}>{data.title}</h3>
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