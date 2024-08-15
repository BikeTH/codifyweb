import React from "react";
import './techStackSlider.css'
import { FaFigma, FaReact, FaNode, FaHtml5, FaCss3Alt, FaJava, FaDigitalOcean, FaLinux, FaDocker } from "react-icons/fa";
import { SiExpo, SiMysql } from "react-icons/si";

const tech = [
    <FaFigma key="figma" />,
    <FaReact key="react" />,
    <FaNode key="node" />,
    <FaHtml5 key="html5" />,
    <FaCss3Alt key="css3" />,
    <FaJava key="java" />,
    <SiExpo key="expo" />,
    <SiMysql key="mysql" />,
    <FaDigitalOcean key="digitalocean" />,
    <FaLinux key="linux" />,
    <FaDocker key="docker" />,
]

export default function TechStackSlider(){
    return(
        <>
            <div className="ITconsult-tech-slider">
                {tech.map((icon, index) => (
                <div className="ITconsult-tech-item" style={{ animationDelay: `${-10 / tech.length * index}s` }} key={index}>
                    {icon}
                </div>
                ))}
            </div>
        </>
    )
}