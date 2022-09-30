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
    <div>
      <div className="navIntroBG mb-3">
        <NavigationBar />
        <Intro />
      </div>
      <div className="mt-3">
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
    </div>
  );
};

export default LandingPage;
