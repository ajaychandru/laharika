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
  try {
    const token = process.env.insta_token;
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=${token}`;
    const response = await fetch(url);

    // Check if the response is OK
    if (!response.ok) {
      console.error(`Failed to fetch data: ${response.statusText}`);
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const feed = await response.json();

    // Check if the response is valid JSON
    if (!feed || typeof feed !== "object") {
      console.error("Invalid JSON response:", feed);
      throw new Error("Invalid JSON response");
    }

    return {
      props: {
        feed,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        feed: null, // Return null feed if there's an error
      },
    };
  }
};

export default Index;
