import React from "react";
import './whyUs.css';
import { FaCoins, FaBolt, FaPenNib, FaMapLocationDot, FaUsersGear, FaServer } from "react-icons/fa6";
import useIntersectionObserver from "../../function/useIntersectionObserver";

const chooseUs = [
    {
        id: 1,
        icon: <FaCoins />,
        title: "Affordable Packages",
        description: (
            <>
                High-quality development services at <span className="highlight">Budget-Friendly Prices</span>.
            </>
        ),
    },
    {
        id: 2,
        icon: <FaBolt />,
        title: "Efficient Process",
        description: (
            <>
                Fast, streamlined development to <span className="highlight">Speed up Project Delivery</span>.
            </>
        ),
    },
    {
        id: 3,
        icon: <FaPenNib />,
        title: "Custom Design",
        description: (
            <>
                Unique designs tailored to your brand's <span className="highlight">Identity</span>.
            </>
        ),
    },
    {
        id: 4,
        icon: <FaMapLocationDot />,
        title: "Targeted SEO",
        description: (
            <>
                Boost local traffic with <span className="highlight">Geo-Specific SEO strategies</span>.
            </>
        ),
    },
    {
        id: 5,
        icon: <FaUsersGear />,
        title: "Expert Support",
        description: (
            <>
                Quick resolution of issues with our <span className="highlight">Dedicated Support Team</span>.
            </>
        ),
    },
    {
        id: 6,
        icon: <FaServer />,
        title: "Reliable Servers",
        description: (
            <>
                Fast, secure performance VPS servers <span className="highlight">Scale your Needs</span>.
            </>
        ),
    },
];


export default function WhyUs(){
    const { ref: difTitleRef, inView: difTitleInView } = useIntersectionObserver({ threshold: 0.3 }, 300);
    return(
        <>
        <div className="ITconsult-why-us">
            <h1 className={`slideIn-animate ${difTitleInView ? 'animate' : 'paused'}`} ref={difTitleRef} style={{textAlign:"center"}}>What Sets Us Apart</h1>
            <div className="ITconsult-why-us-arrangement">
            {
                chooseUs.map(data => {
                    const { ref: differenceRef, inView: differenceInView } = useIntersectionObserver({ threshold: 0.5 }, 300);
                    const { ref: difDescriptionRef, inView: difDescriptionInView } = useIntersectionObserver({ threshold: 0.5 }, 500);
                    
                    return(
                    <div className="ITconsult-why-us-content" key={data.id}>
                        <h5 className={`slideRightIn-animate ${differenceInView ? 'animate' : 'paused'}`} ref={differenceRef} style={{marginTop:"0"}}>{data.icon}{data.title}</h5>
                        <p className={`slideDownUp-animate ${difDescriptionInView ? 'animate' : 'paused'}`} ref={difDescriptionRef}>{data.description}</p>
                    </div>
                    );
                })
            }
            </div>
        </div>
        </>
    )
}