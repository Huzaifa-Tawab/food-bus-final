// Parallax.js
import React, { useEffect, useRef, useState } from "react";

const Parallax = ({ videoSource }) => {
  const videoRef = useRef(null);
  const [isVideoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const handleVideoReady = () => {
      setVideoReady(true); // Set the ready state when the video is ready to play
    };

    // Listen for the 'loadeddata' event to determine when the video is ready
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", handleVideoReady);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadeddata", handleVideoReady);
      }
    };
  }, [videoSource]);

  const videoHeight = 100; // Adjust the height of the video section

  const parallaxContainerStyle = {
    height: `${videoHeight}vh`,
    position: "relative",
    overflow: "hidden",
  };

  const videoStyle = {
    width: "100vw",
    height: "calc(100% - 10vh)",
    objectFit: "cover",
    position: "fixed",
    top: "10vh",
    left: 0,
    zIndex: -1,
    opacity: isVideoReady ? 1 : 0, // Show the video when it's ready
    transition: "opacity 0.5s ease-in-out", // Apply a smooth opacity transition
  };

  const contentStyle = {
    paddingTop: `${videoHeight}vh`, // Ensure content starts below the video
  };

  return (
    <div className="parallax-container" style={parallaxContainerStyle}>
      <video
        ref={videoRef}
        className="parallax-video"
        src={videoSource}
        autoPlay
        loop
        muted
        style={videoStyle}
      ></video>
    </div>
  );
};

export default Parallax;
