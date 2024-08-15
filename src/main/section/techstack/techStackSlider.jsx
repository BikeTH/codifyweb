import React from "react";
import './techStackSlider.css';
import { FaFigma, FaReact, FaNode, FaHtml5, FaCss3Alt, FaJava, FaDigitalOcean, FaLinux, FaDocker } from "react-icons/fa";
import { SiExpo, SiMysql } from "react-icons/si";

const tech = [
    { icon: <FaFigma />, id: 1 },
    { icon: <FaReact />, id: 2 },
    { icon: <FaNode />, id: 3 },
    { icon: <FaHtml5 />, id: 4 },
    { icon: <FaCss3Alt />, id: 5 },
    { icon: <FaJava />, id: 6 },
    { icon: <SiExpo />, id: 7 },
    { icon: <SiMysql />, id: 8 },
    { icon: <FaDigitalOcean />, id: 9 },
    { icon: <FaLinux />, id: 10 },
    { icon: <FaDocker />, id: 11 },
];

export default function TechStackSlider() {
    return (
        <div className="slider">
            <ul style={{ '--time': '22s', '--quantity': tech.length }}>
                {tech.map((item, index) => (
                    <li style={{ '--index': index + 1 }} key={item.id}>
                        {item.icon}
                    </li>
                ))}
            </ul>
        </div>
    );
}
