import React, { useState } from "react";
import me from '../../../assets/ITConsult/teamMember/me.webp';
import tan from '../../../assets/ITConsult/teamMember/tan.webp';
import './team.css';
import { TbMail } from "react-icons/tb";
import { FaArrowUpRightDots, FaLinkedin } from "react-icons/fa6";

const teams = [
    {
        id: 1,
        picture: me,
        details: (
            <>
                <h3>Wilfred</h3>
                <p>B.Sc. Major in Cyber Security</p>
                <p style={{color:"var(--second-color)"}}><span style={{color:"var(--color)", fontWeight:"600"}}>INTP</span> - Curious and adventurous, always eager to explore new horizons!</p>
                <p>Web Developer</p>
                <a className="member-portfolio" href="https://wilfredcty.com" target="_blank" rel="noreferrer noopener">Portfolio <FaArrowUpRightDots /></a>
                <div className="team-member-connect-arrangement">
                    <a href="https://www.linkedin.com/in/wilfred-tsen-yik-chong-2a37a724b" target="_blank" rel="noreferrer noopener"><FaLinkedin color="#0077B5" /></a>
                    <a href="mailto:700024165@student.curtin.edu.my" target="_blank" rel="noreferrer noopener"><TbMail color="636363" /></a>
                </div>
            </>
        )
    },
    {
        id: 2,
        picture: tan,
        details: (
            <>
                <h3>Anthony</h3>
                <p>Full Stack Developer</p>
                <a className="member-portfolio" href="https://quicktrack.xyz" target="_blank" rel="noreferrer noopener">Portfolio <FaArrowUpRightDots /></a>
            </>
        )
    }
];

export default function Team() {
    const [activeId, setActiveId] = useState(null);

    const handleImageClick = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <div className="ITconsult-teams" id="team">
            <h1 style={{ textAlign: "center" }}>Meet Our Team</h1>
            <p className="word-breath" style={{ textAlign: "center", marginTop: 0 }}>Tap us to Learn More</p>
            <div className="ITconsult-teams-arrangement">
                {teams.map(data => (
                    <div className={`ITconsult-teams-member-arrangement ${activeId === data.id ? 'active' : ''}`} key={data.id}>
                        <div className={`member-detail-arrangement ${activeId === data.id ? 'active' : ''}`}>
                            <img className="member-picture" src={data.picture} onClick={() => handleImageClick(data.id)} loading="lazy"/>
                            <div className={`team-member-info-arrangement ${activeId === data.id ? 'show' : ''}`}>
                                {data.details}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
