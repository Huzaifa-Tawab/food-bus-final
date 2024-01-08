import React, { useState, useRef } from "react";
import "./videoplayer.css";
// import Reel from "../../assets/home/fbicom.mp4";
import secvideo from "../../assets/home/ins1.mp4";
import newbuss from "../../assets/home/newbuss.mp4";
import newgir from "../../assets/home/girlvid.mp4";
import insta from "../../assets/home/insta3.mp4";
import inst from "../../assets/home/insta2.mp4";

const VideoPlayer = () => {
  const videos = [secvideo, inst, insta, newbuss, newgir];
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRefs = useRef(
    Array.from({ length: videos.length }, () => React.createRef())
  );

  const handleVideoClick = (index) => {
    if (currentVideo === index) {
      // If the clicked video is already playing, pause it
      videoRefs.current[index].current.pause();
      setCurrentVideo(null);
    } else {
      // Otherwise, play the clicked video and pause the current one
      if (currentVideo !== null) {
        videoRefs.current[currentVideo].current.pause();
      }
      videoRefs.current[index].current.play();
      setCurrentVideo(index);
    }
  };

  return (
    <div className="video-player-container">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`video-wrapper ${currentVideo === index ? "playing" : ""}`}
          onClick={() => handleVideoClick(index)}
        >
          <video ref={videoRefs.current[index]} controls>
            <source src={video} type="video/webm" />
            
          </video>
          
        </div>
      ))}
    </div>
  );
};

export default VideoPlayer;
