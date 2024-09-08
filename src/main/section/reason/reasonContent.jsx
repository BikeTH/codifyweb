import React, { lazy } from "react";
import './reasonContent.css'
import { VscVerified, VscHeart, VscGear, VscDashboard } from "react-icons/vsc";
import SalesBoostSVG from "./svg/chart";
import website from "./svg/website.webp"
import EnhancedVisibilitySEO from "./svg/seo";
import UserExperienceIllustration from "./svg/performance";
import useIntersectionObserver from "../../function/useIntersectionObserver";

const reasonSupport = [
    {
        id: 1,
        icon: <VscVerified />,
        title: "Enhanced Credibility & Trust",
        description: (
            <>
                A professional website builds <span className="highlight">Trust</span> and <span className="highlight">Reliability</span>.
            </>
        ),
        color: "var(--warm-neon-blue)",
        image: website,
    },
    {
        id: 2,
        icon: <VscDashboard />,
        title: "Enhanced Visibility & SEO",
        description: (
            <>
                Boost your site ranking and <span className="highlight">Attracts more Visitors</span>.
            </>
        ),
        color: "var(--warm-neon-purple)",
        image: <EnhancedVisibilitySEO />,
    },
    {
        id: 3,
        icon: <VscGear />,
        title: "Effective Conversion Optimization",
        description: (
            <>
                Well-designed and Informative sites lead to <span className="highlight">Sales Boost</span>.
            </>
        ),
        color: "var(--warm-neon-green)",
        image: <SalesBoostSVG />,
    },
    {
        id: 4,
        icon: <VscHeart />,
        title: "Improved User Experience",
        description: (
            <>
                Interactive and Fast loading keep <span className="highlight">Users Engaged</span>.
            </>
        ),
        color: "var(--warm-neon-red)",
        image: <UserExperienceIllustration />
    },
];

export default function ReasonContent() {
    const { ref: titleRef, inView: titleInView } = useIntersectionObserver({
        threshold: 0.1
    }, 100);

    return (
        <>
            <div id="ITConsult" className="ITconsult-content">
                <div className="ITconsult-reason-content">
                    <div className= {`ITconsult-reason-header ${titleInView ? 'animate' : 'paused'}`} ref={titleRef}>
                        <h1>Transform Your Business Today</h1>
                        <h3>Unlock the Power of a Digital Application to Propel Your Success</h3>
                    </div>
                    <div className="ITconsult-reason-support">
                        {
                            reasonSupport.map(data => {
                                const { ref: itemRef, inView: itemInView } = useIntersectionObserver({
                                    threshold: 0.1
                                }, 100);

                                const { ref: supportTitleRef, inView: supportTitleInView } = useIntersectionObserver({ threshold: 0.1 }, 300);

                                return(
                                <div className= {`ITconsult-reason-support-arrangement ${itemInView? 'animate' : 'paused'}`} ref={itemRef} key={data.id}>
                                    <h4
                                        className={`h4-reason ${supportTitleInView ? 'animate' : 'paused'}`}
                                        ref={supportTitleRef}
                                        style={{ marginTop: "0" }}
                                    >
                                        {data.icon} {data.title}
                                    </h4>
                                    <p>{data.description}</p>
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
                                    loading="lazy"
                                    alt={data.title}/>
                                    ) : (
                                        data.image // Render SVG component directly
                                    ))}
                                </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}