import React from "react";
import './quotation.css';

export default function Quotation(){
    return(
        <>
        <div className="ITconsult-price-quotation" id="quotation">
            <div className="ITconsult-price-quotation-header">
                <h1 style={{textAlign:"center"}}><span style={{color:"var(--warm-neon-blue)"}}>Build</span> Website / Application Plan</h1>
                <h2 style={{textAlign:"center", margin:"0px"}}>How Much to <span style={{color:"var(--warm-neon-blue)"}}>Build</span> a Website / Application?</h2>
                <p style={{textAlign:"center", margin:"0px", fontStyle:"italic"}}>Price may vary without notice</p>
            </div>
            <div className="ITconsult-price-quotation-form">
                <h1 style={{textAlign:"center", fontSize:"48px"}}>Progressing....</h1>
            </div>
        </div>
        </>
    )
}