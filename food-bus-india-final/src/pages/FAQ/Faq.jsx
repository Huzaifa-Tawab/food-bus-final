import React, { useState } from "react";
import "./faq.css";
import faqhead from "../../assets/faqhead.png";
function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "Is this a real bus",
      answer:
        "No, It's a stationary double decker bus themed restaurant and does not move.",
    },
    {
      question: "Is this a food-truck",
      answer:
        "No. Its not. Its a stationary bus-themed fully operational 42 cover restaurant.",
    },
    {
      question: "Do you offer delivery or takeout options",
      answer:
        "Yes, we provide delivery and takeout services for your convenience. You can place orders through our delivery partners as well.",
    },
    {
      question: "How many locations are we currently present in",
      answer:
        "We are currently based out of 4 locations across Delhi including, Lajpat Nagar, North Campus, Rajender Nagar, & South Extension.",
    },
    {
      question: "Do you offer vegetarian/vegan/gluten-free options ",
      answer:
        "Yes, we have a selection of vegetarian, vegan, and gluten-free options available. Please check our menu or ask our staff for details.",
    },
  ];

  return (
    <div className="Faq-main">
      {/* <img src={faqhead}></img> */}
      <h3 className="Faq-main-heading">FAQs:</h3>
      <div className="Faq-content">
        {faqs.map((faq, index) => (
          <div className="Faq-single" key={index}>
            <button onClick={() => toggleAccordion(index)}>
              {faq.question}
              <div className={openIndex === index ? "minus" : "plus"}>
                {/* {openIndex === index ? "-" : "+"} */}
              </div>
              {/* {openIndex  === index ? "-" : "+"} */}
            </button>
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
