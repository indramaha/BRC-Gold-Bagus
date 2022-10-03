import React from "react";
import NavigationBar from "../Components/NavigationBar";
import "../style/LandingPage.css";
import Intro from "../Components/Intro";
import OurServices from "../Components/OurServices";
import WhyUs from "../Components/WhyUs"
import Testimonial from "../Components/Testimonial";
import SewaMobil from "../Components/SewaMobil"
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer"

const LandingPage = () => {
  return (
    <>
      <div className="navIntroBG mb-3" id="landing-page">
        <NavigationBar />
        <Intro />
      </div>
      <div>
        <OurServices />
      </div>
      <div>
        <WhyUs />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <SewaMobil />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
