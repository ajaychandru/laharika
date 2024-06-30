import React, { useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const OurWorks = ({ feed }) => {
  const [playingVideoId, setPlayingVideoId] = useState(null); // State to track currently playing video
  const videoRefs = useRef({}); // Create a ref to hold video elements

  const handlePlayVideo = (id) => {
    // Toggle pause/play of the video with the given ID
    if (videoRefs.current[id]) {
      if (id === playingVideoId) {
        // If the same video is clicked again, pause it
        videoRefs.current[id].pause();
        setPlayingVideoId(null);
      } else {
        // Pause any currently playing video
        if (playingVideoId && videoRefs.current[playingVideoId]) {
          videoRefs.current[playingVideoId].pause();
        }
        // Play the video with the given ID
        videoRefs.current[id].playsInline = true;
        videoRefs.current[id].muted = false;
        videoRefs.current[id].play();
        setPlayingVideoId(id);
      }
    }
  };

  return (
    <>
      <section id="works" className="case-studies-area ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Showcasing Our Expertise and Creativity</h2>
            <p>A Glimpse into Our Most Remarkable Event Transformations.</p>
          </div>

          <Swiper
            cssMode={true}
            spaceBetween={20}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="work-slides"
          >
            {feed?.data?.slice(0, 5).map((value) => {
              const { id, caption, media_url, media_type } = value;
              return (
                <SwiperSlide key={id}>
                  <div className="work-card" style={{ position: "relative" }}>
                    {media_type.includes("VIDEO") ? (
                      <video
                        height={479}
                        width={349}
                        // controls
                        controlsList="nodownload"
                        muted
                        ref={(el) => (videoRefs.current[id] = el)} // Assign ref to video element
                        onClick={() => handlePlayVideo(id)} // Toggle play/pause on video click
                        onPause={() => setPlayingVideoId(null)} // Reset playingVideoId on pause
                      >
                        <source src={media_url} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={media_url}
                        alt="image"
                        width={510}
                        height={750}
                      />
                    )}
                    {playingVideoId !== id && (
                      <div
                        className="our-work-box aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="500"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "40%",
                          cursor: "pointer",
                        }}
                        onClick={() => handlePlayVideo(id)} // Call handlePlayVideo with video ID
                      >
                        <div className="video-btn">
                          <i className="fa-solid fa-play"></i>
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default OurWorks;
