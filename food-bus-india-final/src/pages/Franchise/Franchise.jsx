// Franchise.js

import React, { useState } from "react";
import "./franchise.css";

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
      console.log("Form submitted:", formData);
      // Reset form after submission
      setFormData({
        name: "",
        phone: "",
        state: "",
        email: "",
        city: "",
        investment: "",
        option: "",
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
      <div className="Franchise-Form">
        <h1> Be Your Own Boss</h1>
        <p>
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
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
      </div>
    </div>
  );
}

export default Franchise;
