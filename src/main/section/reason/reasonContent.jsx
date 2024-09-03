import React from "react";
import './reasonContent.css'
import { VscVerified, VscHeart, VscGear, VscDashboard } from "react-icons/vsc";
import SalesBoostSVG from "./svg/chart";
import website from "./svg/website.webp"
import EnhancedVisibilitySEO from "./svg/seo";
import UserExperienceIllustration from "./svg/performance";

const reasonSupport = [
    {
        id: 1,
        icon: <VscVerified />,
        title: "Enhanced Credibility & Trust",
        description: "A professional website builds Trust and Reliability.",
        color: "var(--warm-neon-blue)",
        image: website,
    },
    {
        id: 2,
        icon: <VscDashboard />,
        title: "Enhanced Visibility & SEO",
        description: "Boost your site ranking and Attracts more Visitors",
        color: "var(--warm-neon-purple)",
        image: <EnhancedVisibilitySEO />,
    },
    {
        id: 3,
        icon: <VscGear />,
        title: "Effective Conversion Optimization",
        description: "Well-designed and Informative sites lead to Sales Boost",
        color: "var(--warm-neon-green)",
        image: <SalesBoostSVG />,
    },
    {
        id: 4,
        icon: <VscHeart />,
        title: "Improved User Experience",
        description: "Interactive and Fast loading keep Users Engaged",
        color: "var(--warm-neon-red)",
        image: <UserExperienceIllustration />
    },
]

export default function ReasonContent() {
    return (
        <>
            <div id="ITConsult" className="ITconsult-content">
                <div className="ITconsult-reason-content">
                    <div className="ITconsult-reason-header">
                        <h1 style={{ fontWeight: "600" }}>Transform Your Business Today</h1>
                        <h3 style={{ fontWeight: "300" }}>Unlock the Power of a Digital Application to Propel Your Success</h3>
                    </div>
                    <div className="ITconsult-reason-support">
                        {
                            reasonSupport.map(data => (
                                <div className="ITconsult-reason-support-arrangement" key={data.id}>
                                    <h5 style={{ fontWeight: "800", marginTop: "0" }}>{data.icon} {data.title}</h5>
                                    <p style={{ fontWeight: "400" }}>{data.description}</p>
                                    {data.image && (typeof data.image === 'string' ? (
                                    <img 
                                        src={data.image} 
                                        style={{
                                            display: 'block',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            width: '100%',
                                            height: 'auto',
                                        }}  // Adjust size as needed
                                    />
                                    ) : (
                                        data.image // Render SVG component directly
                                    ))}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}