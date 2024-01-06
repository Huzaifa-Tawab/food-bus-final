// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/NavBar";
import OurStory from "./pages/OurStory/OurStory";
import Franchise from "./pages/Franchise/Franchise";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import LoaderGif from "./assets/loader.gif";
function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
