// Home.js
import React, { useEffect, useRef, useState } from "react";
import Parallax from "../../components/Parallax/Parallax";
import "./home.css";
import Hero from "../../assets/home/Hero.webm";
import ParallaxVideo1 from "../../assets/home/Hero.webm";
import ParallaxVideo2 from "../../assets/home/Hero.webm";
import ParallaxVideo3 from "../../assets/home/Hero.webm";

function Home() {
  const [currentVideo, setCurrentVideo] = useState(ParallaxVideo1);
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef1.current) {
              setCurrentVideo(ParallaxVideo1);
            } else if (entry.target === sectionRef2.current) {
              setCurrentVideo(ParallaxVideo2);
            } else if (entry.target === sectionRef3.current) {
              setCurrentVideo(ParallaxVideo3);
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef1.current) {
      observer.observe(sectionRef1.current);
    }
    if (sectionRef2.current) {
      observer.observe(sectionRef2.current);
    }
    if (sectionRef3.current) {
      observer.observe(sectionRef3.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="Home">
      <br />
      <br />
      <br />
      <br />
      <div ref={sectionRef1}>
        <Parallax videoSource={currentVideo} />
      </div>
      <div className="box"></div>
      <div ref={sectionRef2}>
        <Parallax videoSource={currentVideo} />
      </div>
      <div className="box"></div>
      <div ref={sectionRef3}>
        <Parallax videoSource={currentVideo} />
      </div>
      <div className="box"></div>
    </div>
  );
}

export default Home;
