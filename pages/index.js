import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomePages/StudioAgencyTwo/MainBanner";
import Services from "../components/HomePages/StudioAgencyTwo/Services";
import OurWorks from "../components/HomePages/StudioAgencyTwo/OurWorks";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import About from "../components/HomePages/StudioAgencyTwo/About";
import Feedback from "../components/Common/Feedback";
import LatestNewsSlider from "../components/Common/LatestNewsSlider";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";
import PortfolioDetailsContent2 from "../components/Portfolio/PortfolioDetailsContent2";

const Index = () => {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <Services />
      <PortfolioDetailsContent2 />

      <OurWorks />

      <FunFactsTwo />

      <About />

      <Feedback />

      {/* <LatestNewsSlider /> */}

      <CtaAreaTwo />

      <Partner />

      <Footer />
    </>
  );
};

export default Index;
