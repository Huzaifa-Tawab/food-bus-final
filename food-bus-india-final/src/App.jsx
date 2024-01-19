// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import OurStory from "./pages/OurStory/OurStory";
import Franchise from "./pages/Franchise/Franchise";
import Menu from "./pages/Menu/Menu";
import Faq from "./pages/FAQ/Faq";
import Contact from "./pages/Contact/Contact";
import LoaderGif from "./assets/loader.gif";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";
function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const ScrollTracker = () => {
    useEffect(() => {
      // Function to handle scroll events
      const handleScroll = () => {
        // Get the scroll position
        const scrollPosition = window.scrollY;
        console.log("Scroll Position:", scrollPosition);
        const isScrollingDown = currentScrollPos > prevScrollPos;

        // Update the state based on the scroll direction
        setNavbarVisible(!isScrollingDown);

        // Update the previous scroll position
        setPrevScrollPos(currentScrollPos);
        // You can perform additional actions based on the scroll position
      };

      // Add the scroll event listener when the component mounts
      window.addEventListener("scroll", handleScroll);

      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts
  };

  const hideNavbar = () => {
    setNavbarVisible(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log("toggle");
  };

  useEffect(() => {
    // Show loader for 3 seconds on initial load
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
      setNavbarVisible(true);
    }, 3000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(loaderTimeout);
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <Router>
      <ScrollTracker />
      {showLoader ? (
        <div className="loader-container">
          <img src={LoaderGif} alt="Loader" />
        </div>
      ) : (
        <>
          {isNavbarVisible && (
            <Navbar
              onHide={hideNavbar}
              isSidebarOpen={isSidebarOpen}
              onToggleSidebar={toggleSidebar}
            />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/map" element={<Map />} /> */}
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
