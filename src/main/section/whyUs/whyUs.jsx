import React from "react";
import './whyUs.css';
import { FaCoins, FaBolt, FaPenNib, FaMapLocationDot, FaUsersGear, FaServer } from "react-icons/fa6";

const chooseUs = [
    {
        id: 1,
        icon: <FaCoins />,
        title: "Affordable packages",
        description: "Get top-notch development services at competitive prices. Our packages are designed to fit various budgets without compromising on quality.",
    },
    {
        id: 2,
        icon: <FaBolt />,
        title: "Efficient development process",
        description: "Experience a streamlined development process that saves you time and accelerates your project’s delivery. We ensure efficiency at every step.",
    },
    {
        id: 3,
        icon: <FaPenNib />,
        title: "Custom Design",
        description: "Receive a tailor-made design that reflects your brand’s unique identity. We create custom solutions that set you apart from the competition.",
    },
    {
        id: 4,
        icon: <FaMapLocationDot />,
        title: "SEO target specific geographic area",
        description: "Boost your online presence with SEO strategies that target your desired geographic area, driving more local traffic to your site.",
    },
    {
        id: 5,
        icon: <FaUsersGear />,
        title: "Troubleshooting Support Team",
        description: "Benefit from our dedicated support team, ready to resolve any issues promptly and keep your website or app running smoothly.",
    },
    {
        id: 6,
        icon: <FaServer />,
        title: "Own I.T Server",
        description: "Enjoy reliable performance with our own dedicated I.T. servers, ensuring your website and applications are always fast and secure.",
    },
]

export default function WhyUs(){
    return(
        <>
        <div className="ITconsult-why-us">
            <h1>Why Choose Us?</h1>
            <div className="ITconsult-why-us-arrangement">
            {
                chooseUs.map(data => (
                    <div className="ITconsult-why-us-content" key={data.id}>
                        <h2>{data.icon}</h2>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}