import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "animate.css";
import "../styles/all.min.css";
import "../styles/pe-icon-7-stroke.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Software Startup Home Style
import "../styles/software-home-page.css";
// App Showcase Home Style
import "../styles/app-home-page.css";
// Digital Marketing Home Page Style
import "../styles/digital-marketing-home-page.css";
// Personal Portfolio Home Style
import "../styles/personal-portfolio-home-page.css";
// Business Consulting Home Page Style
import "../styles/business-consulting-home-page.css";
// SaaS Startup Home Page Style
import "../styles/saas-startup-home-page.css";
// Freelancer Portfolio Home Page Style
import "../styles/freelancer-portfolio-home-page.css";
// Cyber Security Agency Home Page Style
import "../styles/cyber-security-agency-home-page.css";

// Global Style
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Layouts/GoTop";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Laharika Creations | Event management company Bangalore</title>
        <meta
          name="description"
          content="Laharika Creations is a leading event management company based in Bangalore, specializing in creating memorable events tailored to your needs."
        />
        <meta
          name="keywords"
          content="event management, Bangalore events, event planners, corporate events, wedding planners"
        />
        <meta name="author" content="Your Name or Company Name" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/66812572eaf3bd8d4d167b47/1i1k7ki10';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
`,
          }}
        />
      </Head>

      <Component {...pageProps} />

      <GoTop />
    </>
  );
}

export default MyApp;
