import React from "react";
import Image from "next/image";

import aboutImg from "../../../public/images/our-team.jpeg";

const About = () => {
  return (
    <>
      <section id="about" className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div
                className="about-image"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Image
                  src={aboutImg}
                  alt="About Us"
                  className="rounded-10"
                  width={500}
                  height={750}
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>About Us</h2>
                  <p>
                    At Laharika creations, we believe in transforming your
                    vision into reality. With a passion for perfection and an
                    eye for detail, we specialize in creating events that leave
                    lasting impressions.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                    Founded in [Year], Laharika is a premier event management
                    company known for its creativity, innovation, and commitment
                    to excellence. Our team of experienced professionals is
                    dedicated to crafting events that are as unique as our
                    clients.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Success</h4>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Successfully planned and executed over [X] events.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Renowned for our attention to detail and personalized
                      service.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Trusted by top corporations and individuals alike.
                    </li>
                  </ul>
                </div>

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <p>
                    Our mission is to exceed our clients' expectations by
                    delivering extraordinary events that reflect their unique
                    vision and style. We aim to create memorable experiences
                    through meticulous planning, innovative solutions, and
                    flawless execution.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Understanding Client Expectations</h4>
                  <p>
                    We always strive to understand our clients' expectations and
                    ensure every detail reflects their vision and exceeds their
                    expectations. Your satisfaction is our highest priority, and
                    we are committed to delivering excellence in every event we
                    manage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
