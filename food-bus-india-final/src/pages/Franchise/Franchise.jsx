// Franchise.js

import React, { useState } from "react";
import "./franchise.css";
import franch from "../../assets/kitchen/franchhero.jpg";
import mail from "../../assets/franchise/mail.png";
import phone from "../../assets/franchise/phone.png";
import emailjs from "@emailjs/browser";

function Franchise() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    email: "",
    city: "",
    investment: "",
    option: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear previous errors when input changes
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit the form data (You can replace this with your actual submit logic)
      // console.log("Form submitted:", formData);
      emailjs
        .send(
          "service_n9pe088",
          "template_uhx920m",
          {
            from_name: "Franchie Form FoodBus India",
            to_name: "Sukraj",
            name: formData.name,
            phone: formData.phone,
            state: formData.state,
            email: formData.email,
            city: formData.city,
            investment: formData.investment,
            option: formData.option,
            reply_to: formData.email,
          },
          "pKDssUYIlChCrG_Aa"
        )

        .then(() => {
          alert("your Mail Has Been Sent");
          setFormData({
            name: "",
            phone: "",
            state: "",
            email: "",
            city: "",
            investment: "",
            option: "",
          });
        });
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
    }

    if (!data.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(data.phone)) {
      errors.phone = "Phone number must contain only digits";
    }

    if (!data.state.trim()) {
      errors.state = "State is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.city.trim()) {
      errors.city = "City is required";
    }

    if (!data.investment.trim()) {
      errors.investment = "Total Investment Budget is required";
    } else if (!/^\d+$/.test(data.investment)) {
      errors.investment = "Total Investment Budget must contain only digits";
    }

    if (!data.option.trim()) {
      errors.option = "Please select an option";
    }

    return errors;
  };

  return (
    <div className="Franchise">
      <h1> Be Your Own Boss</h1>
      <div className="Frannchise-hero">
        <img className="fran" src={franch}></img>
      </div>
      <div className="Franchise-cards">
        <div class="card">
          <div class="content">
            <div class="front ">
              <h1>Standardization & predictability</h1>

              <p>
                Food Bus of India's unique model ensures standardization in both
                operating expenses (OPEX) & capital expenses (CAPEX)
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <div class="fronts bluee">
              <h1>Accuracy in projection</h1>

              <p>
                Our projections have an exceptional 90% accuracy rate for future
                predictions and return on investment (ROl).
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <div class="front">
              <h1>Exclusive Territories Franchisees</h1>

              <p>
                We secure exclusive rights to operate in specific territories,
                reducing direct competition and enhancing profitability.
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <div class="fronts bluee">
              <h1>No active direct competitors</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="Franchise-Form">
        {/* <p>
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p> */}
        <form onSubmit={handleSubmit}>
          <div className="franchise-field-group">
            <div className="franchise-field">
              <label>Name</label>
              <input
                type="text"
                placeholder="Name text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <span className="error"> {errors.name && errors.name} </span>
            </div>

            <div className="franchise-field">
              <label>Phone No.</label>
              <input
                type="text"
                placeholder="Phone No. number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>
          <div className="franchise-field-group">
            <div className="franchise-field">
              <label>State</label>
              <input
                type="text"
                placeholder="State text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>

            <div className="franchise-field">
              <label>Email</label>
              <input
                type="text"
                placeholder="Email text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          <div className="franchise-field-group">
            <div className="franchise-field">
              <label>City</label>
              <input
                type="text"
                placeholder="City text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="franchise-field">
              <label>Total Investment Budget</label>
              <input
                type="number"
                placeholder="Total Investment Budget number"
                name="investment"
                value={formData.investment}
                onChange={handleChange}
              />
              {errors.investment && (
                <span className="error">{errors.investment}</span>
              )}
            </div>
          </div>

          <div className="franchise-field-select">
            <label>Which Option Describes You the Best?</label>
            <select
              name="option"
              value={formData.option}
              onChange={handleChange}
            >
              <option value="">Select option</option>
              <option value="option1">
                I want to open Food Bus India Franchise for myself
              </option>
              <option value="option2">
                I'm looking to offer a location for a Food Bus
              </option>
              <option value="option3">
                I am a property owner/agent looking to open Food Bus in my own
                shop
              </option>
              <option value="option4">
                Just curious to find out more/others
              </option>
            </select>
            {errors.option && <span className="error">{errors.option}</span>}
          </div>

          <div className="franchise-field-submit">
            <button type="submit">Submit</button>
          </div>
        </form>
        {/* Contact */}
        <div className="flex-contact">
          <div className="Content-Card">
            <div className="Content-Img">
              <img src={mail} alt="" />
            </div>

            <div className="Content-Card-solo">
              <h1>Mail</h1>

              <span>franchise@foodbusofindia.com</span>
            </div>
          </div>
          <div className="Content-Card">
            <div className="Content-Img">
              <img src={phone} alt="" />
            </div>

            <div className="Content-Card-solo">
              <h1>Phone</h1>

              <span>+91 9899897972</span>
            </div>
          </div>
        </div>
      </div>
      {/* Youtube Videos */}
      <div className="about-start">
        <h1>
          Wanna Know More About
          <br />
          Food Bus Of India???
        </h1>
      </div>
      <div className="youtubevideos">
        <iframe
          width="342"
          height="212"
          src="https://www.youtube.com/embed/uKROkBX2Ohc"
          title="Khana Kaisa hai FOOD BUS of INDIA Ka ? | Harpreet SDC"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          width="342"
          height="212"
          src="https://www.youtube.com/embed/Mz0XZlmajFo"
          title="Food Bus Of India | Vishwavidyalaya Metro Station | India&#39;s First Restaurant in Bus| Amazing Food"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          width="342"
          height="212"
          src="https://www.youtube.com/embed/HBZaEOKkC18"
          title="India&#39;s First Food Bus Hotel 🔥🌟 ( Pehli Bar in India)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="youtubevid">
        <iframe
          className="vid"
          width="342"
          height="212"
          src="https://www.youtube.com/embed/H3ShgL1Gyaw"
          title="Delhi Has A Moving Restaurant In A Double Decker Bus | Curly Tales"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          className="vid"
          width="342"
          height="212"
          src="https://www.youtube.com/embed/8OJmZeqa80k"
          title="Japan To Mexico: Food Bus In India Has It All For G20"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          className="vid"
          width="342"
          height="212"
          src="https://www.youtube.com/embed/gGPn92wLmmA"
          title="Food Bus of INDIA | Delhi University | Double Decker Bus | Food | Explore | Restaurant in a Bus |"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Franchise;
