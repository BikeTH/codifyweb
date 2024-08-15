import React from "react";
import me from '../../../assets/ITConsult/teamMember/aiMe.png';
import './team.css';
import { TbMail } from "react-icons/tb";
import { FaArrowUpRightDots, FaLinkedin } from "react-icons/fa6";

const teams = [
    {
        id: 1,
        picture: me,
        details:(
            <>
                <div className="team-member-info-arrangement">
                    <h3>Wilfred</h3>
                    <p>B.sc. Major in Cyber Security</p>
                    <p>INTP - Curious and adventurous, always eager to explore new horizons!</p>
                    <p>IT</p>
                    <a className="member-portfolio" href="http://wilfredcty.com"  target="_blank" rel="noreferrer noopener">Portfolio <FaArrowUpRightDots /></a>
                    <div className="team-member-connect-arrangement">
                        <a href="https://www.linkedin.com/in/wilfred-tsen-yik-chong-2a37a724b" target="_blank" rel="noreferrer noopener"><FaLinkedin color="#0077B5" /></a>
                        <a href="mailto:700024165@student.curtin.edu.my" target="_blank" rel="noreferrer noopener"><TbMail color="636363" /></a>
                    </div>
                </div>
            </>
        )
    },
    {
        id: 2,
        picture: "",
        details:(
            <>
            
            </>
        )
    }
]

export default function Team(){
    return(
        <>
        <div className="ITconsult-teams" id="team">
            <h1 style={{textAlign:"center"}}>Meet Our Team</h1>
            <div className="ITconsult-teams-arrangement">
                {teams.map(data => (
                    <div className="ITconsult-teams-member-arrangement" key={data.id}>
                        <div className="member-detail-arrangement">
                            <img className="member-picture" src={data.picture} />
                            <div>
                                {data.details}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}