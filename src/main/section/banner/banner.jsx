import React from "react";
import './banner.css'
import NavBar from "../../function/navBar";
import LeftBanner from "./left";
import RightBanner from "./right";

export default function Banner() {

    return(
        <div className="Banner" id="home">
             <div className="Banner-Background">
                {/* Your SVG or background animation goes here */}
                <svg width="100%" height="100%" viewBox="0 0 1000 400"></svg>
            </div>
            <div className="Banner-Design">
                <div className="LeftBanner hidden-on-mobile">
                    <LeftBanner />
                </div>
                <div className="Banner-Header">
                    <div className="Banner-Header-arrangement">
                        <h1>CodifyWeb</h1>
                        <p style={{color:"var(--second-color)"}}>
                            // Based in
                            <br></br>
                            Malaysia
                        </p>
                    </div>
                    <h1>Solutions</h1>
                    <h2>Website</h2>
                    <div className="Banner-Header-arrangement">
                        <p style={{color:"var(--second-color)"}}>
                            // Android
                            <br></br>
                            // IoS
                        </p>
                        <h2>& Application</h2>
                    </div>
                </div>
                <div className="RightBanner hidden-on-mobile">
                    <RightBanner />
                </div>
            </div>
            <div className="Banner-description">
                <h2>Your One Stop Digital Solutions</h2>
            </div>
            <NavBar />
        </div>
    )
}