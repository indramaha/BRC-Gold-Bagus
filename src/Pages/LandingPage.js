import React from "react";
import NavigationBar from "../Components/NavigationBar";
import "../style/LandingPage.css";
import Intro from "../Components/Intro";
import OurServices from "../Components/OurServices";
import WhyUs from "../Components/WhyUs"

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
    </div>
  );
};

export default LandingPage;
