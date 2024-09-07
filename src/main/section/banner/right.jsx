import React from "react";

export default function RightBanner(){
    return(
        <div className="banner-right-block" style={{width:"auto", height:"auto"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 0 150 250" width="100%" height="50vh">
                <g>
                <polygon points="180, 200, 150, 190, 190, 90, 220, 100" fill="var(--second-color)" />
                <polygon points="178,120, 140,105, 140,70, 220,100" fill="var(--color)" />
                </g>
            </svg>
        </div>
    )
}