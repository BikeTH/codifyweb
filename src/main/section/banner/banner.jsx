import React from "react";
import './banner.css'
import NavBar from "../../function/navBar";

export default function Banner() {
    return(
        <div className="Banner" id="home">
            <div className="Banner-Header">
                <div className="Banner-Header-arrangement">
                    <h1><span style={{color:"var(--warm-neon-blue)"}}>T</span><span style={{color:"var(--warm-neon-red)"}}>C</span></h1>
                    <p>
                        // Based in
                        <br></br>
                        Malaysia
                    </p>
                </div>
                <h1 style={{color:"var(--warm-neon-yellow)"}}>Solutions</h1>
                <h2>Website</h2>
                <div className="Banner-Header-arrangement">
                    <p>
                        // Android
                        <br></br>
                        // IoS
                    </p>
                    <h2>& Application</h2>
                </div>
            </div>
            <div className="Banner-description">
                <h2>We Build <span style={{color:"var(--warm-neon-pink)"}}>Stunning</span>, <span style={{color:"var(--warm-neon-green)"}}>Efficient</span> Websites & Apps that captivate <span style={{color:"var(--warm-neon-blue)"}}>users</span>.</h2>
            </div>
            <NavBar />
        </div>
    )
}