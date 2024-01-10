import React, { useState } from "react";
import "./faq.css";
function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How do I install React?",
      answer:
        'You can install React using npm by running "npm install react react-dom".',
    },
    {
      question: "What are React hooks?",
      answer:
        "React hooks are functions that let you use state and other React features in functional components.",
    },
    {
      question: "Can I use React for mobile app development?",
      answer:
        "Yes, you can use React Native, a framework for building mobile apps using React and native components.",
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
