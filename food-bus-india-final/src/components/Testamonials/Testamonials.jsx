import React, { useState, useEffect } from "react";
import "./testamonials.css"; // Import your CSS file for styling

const testimonialData = [
  "./testamonials/T1.png", // Replace with actual screenshot URL
  "./testamonials/T2.png", // Replace with actual screenshot URL
  "./testamonials/T3.jpeg", // Replace with actual screenshot URL
];

const Testamonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Automatically change the testimonial every 5 seconds
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-container">
      <h1>What Our Customer say</h1>
      <div className="testimonial-fade">
        {testimonialData.map((image, index) => (
          <div
            key={index}
            className={`testimonial ${
              index === currentTestimonial ? "active" : ""
            }`}
          >
            <img src={image} alt={`Testimonial ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testamonials;
