import React from "react";
import './ITconsult.css';
import Banner from "./section/banner/banner";
import ReasonContent from "./section/reason/reasonContent";
import Offer from "./section/offer/offer";
import TechStackSlider from "./section/techstack/techStackSlider";
import WhyUs from "./section/whyUs/whyUs";
import Quotation from "./section/quotation/quotation";
import Faq from "./section/faq/faq";
import Team from "./section/team/team";
import Contact from "./section/contact/contact";
import Footer from "./section/footer/footer";
import NavTop from "./function/navTop";

export default function ITconsult(){
    return(
        <>
        <div className="ITconsult-main">
            <Banner/>
            <div className="content-main">
                <ReasonContent/>
                <Offer/>
            </div>
                <TechStackSlider />
                <NavTop />
            <div className="content-main">
                <WhyUs />
                <Quotation />
                <Faq />
                <Team />
                <Contact />
                <Footer />
            </div>
        </div>
        </>
    )
}
