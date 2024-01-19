// Home.js
import React, { useEffect, useRef, useState } from "react";
import Parallax from "../../components/Parallax/Parallax";
import "./home.css";
import HeroMob from "../../assets/home/Hero-M.mp4";
import Scroll2Mob from "../../assets/home/Scroll-M2.mp4";
import ParallaxVideo1 from "../../assets/home/Herohero.mp4";
import ParallaxVideo2 from "../../assets/home/Scroll-D-2.mp4";
import ParallaxVideo3 from "../../assets/home/Herohero.mp4";
import OurStory from "../../components/OurStory/OurStory";
import Kitchen from "../../components/Kitchen/Kitchen";
import Map from "../../components/Map/Map";
import Testamonials from "../../components/Testamonials/Testamonials";
import VideoPlayer from "../../components/VideoPlayer/Videoplayer";
import SocialBar from "../../components/SocialBar/SocialBar";

function Home() {
  const [currentVideo, setCurrentVideo] = useState(ParallaxVideo1);
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef1.current) {
              if (window.innerWidth < 700) {
                setCurrentVideo(HeroMob);
              } else {
                setCurrentVideo(ParallaxVideo1);
              }
            } else if (entry.target === sectionRef2.current) {
              if (window.innerWidth < 700) {
                setCurrentVideo(Scroll2Mob);
              } else {
                setCurrentVideo(ParallaxVideo2);
              }
            }
          }
        });
      },
      {
        threshold: 0,
      }
    );

    if (sectionRef1.current) {
      observer.observe(sectionRef1.current);
    }
    if (sectionRef2.current) {
      observer.observe(sectionRef2.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  const markers = [
    {
      lat: 37.7749,
      lng: -122.4194,
      // iconUrl: "URL_TO_YOUR_CUSTOM_ICON", // Replace with the URL of your custom icon
    },
    // Add more markers as needed
  ];
  return (
    <div className="Home">
      <SocialBar />
      <div ref={sectionRef1}>
        <Parallax videoSource={currentVideo} />
      </div>
      <OurStory />
      <div ref={sectionRef2}>
        <Parallax videoSource={currentVideo} />
      </div>
      <Kitchen />

      <Map />
      <Testamonials />
      <VideoPlayer />
    </div>
  );
}

export default Home;
