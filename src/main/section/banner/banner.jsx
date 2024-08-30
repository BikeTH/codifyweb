import React from "react";
import './banner.css'
import NavBar from "../../function/navBar";

export default function Banner() {
    return(
        <div className="Banner" id="home">
            <div className="Banner-Header">
                <div className="Banner-Header-arrangement">
                    <h1>CodifyWeb</h1>
                    <p>
                        // Based in
                        <br></br>
                        Malaysia
                    </p>
                </div>
                <h1>Solutions</h1>
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
                <h2>Bringing you Modern, Snappy Websites Quickly and Efficiently.</h2>
            </div>
            <NavBar />
        </div>
    )
}