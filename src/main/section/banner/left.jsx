import React from "react";

export default function LeftBanner(){
    return(
        <div className="banner-left-block" style={{width:"auto", height:"auto"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 250" width="100%" height="50vh">
                <g>
                    <polygon points="72, 50, 102, 60, 62,160, 32,150" fill="var(--second-color)" />
                    <polygon points="74,130, 112,145, 112, 180, 32, 150" fill="var(--color)" />
                </g>
            </svg>
        </div>
    )
}