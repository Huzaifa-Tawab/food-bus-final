import React, { useState } from "react";
import "./faq.css";
function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "Is this a real bus?",
      answer: "No, It's a stationary double decker bus themed restaurant and does not move.",
    },
    {
      question: "Is this a food-truck?",
      answer:
        'No. Its not. Its a stationary bus-themed fully operational 42 cover restaurant.',
    },
    {
      question: "How many locations are we currently present in?",
      answer:
        "We are currently based out of 4 locations across Delhi including, Lajpat Nagar, North Campus, Rajender Nagar, & South Extension.",
    },
    {
      question: "Do you offer vegetarian/vegan/gluten-free options? ",
      answer:
        "Yes, we have a selection of vegetarian, vegan, and gluten-free options available. Please check our menu or ask our staff for details.",
    },
    {
      question: "Do you offer delivery or takeout options? ",
      answer:
        "Yes, we provide delivery and takeout services for your convenience. You can place orders through our delivery partners as well.",
    },
  ];

  return (
    <div className="Faq-main">
      <h3 className="Faq-main-heading">FAQs:</h3>
      <div className="Faq-content">
        {faqs.map((faq, index) => (
          <div className="Faq-single" key={index}>
            <button onClick={() => toggleAccordion(index)}>
              {faq.question}
            </button>
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
