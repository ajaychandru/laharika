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

const Index = ({ feed }) => {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <Services />
      <PortfolioDetailsContent2 />

      <OurWorks feed={feed} />

      <FunFactsTwo />

      <About />

      <Feedback />

      {/* <LatestNewsSlider feed={feed} /> */}

      <CtaAreaTwo />

      {/* <Partner /> */}

      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const token = process.env.insta_token;
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=${token}`;
  const data = await fetch(url);
  const feed = await data?.json();

  return {
    props: {
      feed,
    },
  };
};

export default Index;
