import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "pe-7s-magic-wand bg-13c4a1",

    title: "Event Planning",
    shortText:
      "From the initial concept to the final execution, we offer comprehensive event planning services that ensure a smooth and successful event.",
    viewDetails: "/services/service-details/",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-users bg-ff612f",

    title: "Corporate Events",
    shortText:
      "Whether it's a small meeting or a large conference, we provide tailored solutions that meet your corporate needs and objectives.",
    viewDetails: "/services/service-details/",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-diamond bg-6610f2",

    // iconName: "pe-7s-light bg-ffb700",
    title: "Weddings",
    shortText:
      "Our wedding planning services cover everything from venue selection to floral arrangements, ensuring your special day is perfect.",
    viewDetails: "/services/service-details/",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-target bg-fc3549",
    title: "Social Events",
    shortText:
      "From birthdays to anniversaries, we create personalized and memorable celebrations for every occasion.",
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
  // {
  //   iconName: "pe-7s-film bg-00d280",
  //   title: "Event Organising",
  //   shortText:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  //   viewDetails: "/services/service-details/",
  //   aosDelay: "500",
  // },
  // {
  //   iconName: "pe-7s-users bg-ff612f",
  //   title: "Wedding Events",
  //   shortText:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  //   viewDetails: "/services/service-details/",
  //   aosDelay: "600",
  // },
];

const Services = () => {
  return (
    <>
      <div id="service" className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Crafting Exceptional Experiences for Every Occasion.</p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 
                  col-sm-6"
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one white-bg border text-center">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
