import React from "react";
import "./footer.css";
import Logo from "../../assets/logos/FBI-LOGO-H.webp";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Footer() {
  const [Email, setEmail] = useState("");
  const [EmailError, setEmailError] = useState();
  const [Phone, setPhone] = useState("");
  const [PhoneError, setPhoneError] = useState();

  function handleSubmit(e) {
    setEmailError("");
    setPhoneError("");
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (validRegex.test(Email)) {
      if (re.test(Phone)) {
        sendEmail();
      } else {
        setPhoneError("Phone Number Not Correct");
      }
    } else {
      setEmailError("Email Not Correct");
    }
  }
  function sendEmail() {
    emailjs
      .send(
        "service_sskezmy",
        "template_22jo658",
        {
          from_name: "Footer Newsletter",
          to_name: "Sukraj",
          message: `Email is ${Email} and Phone Number is ${Phone}`,
          reply_to: Email,
        },
        "pKDssUYIlChCrG_Aa"
      )
      .then(() => {
        alert("Email Submited");
        setEmail("");
        setPhone("");
      });
  }
  return (
    <>
      <div className="Footer">
        {/* <div className="Footer-Top">
          <div className="Footer-Top-Text">
            <h1>
              <span>St</span>ill You Need Our Support ?
            </h1>
            <p>
              Don’t wait make a smart & logical quote here. It's pretty easy.
            </p>
          </div>
          <button>Contact Us</button>
        </div> */}
        <div className="Footer-Middle">
          <div className="Footer-Middle-About">
            <img src={Logo} alt="Logo" />
            <div className="Footer-Middle-About-social">
              <div className="socialbox">
                <a
                  href="https://www.instagram.com/foodbusofindia/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="socialbox">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
          <div className="Footer-Middle-UseFull">
            <h3>Useful Links</h3>
            <div className="links-list">
              <Link to={"/"}>
                <p className="points">Home</p>
              </Link>

              <Link to={"/ourstory"}>
                <p className="points">Our Story </p>
              </Link>

              <Link to={"/franchise"}>
                <p className="points">Franchise</p>
              </Link>
              <Link to={"/menu"}>
                <p className="points">Menu</p>
              </Link>
              <Link to={"/faq"}>
                <p className="points">Faq </p>
              </Link>
              <Link to={"/contact"}>
                <p className="points">Contact</p>
              </Link>
            </div>
          </div>
          <div className="Footer-Middle-Help">
            <h3>
              Connect With Us To Know Stay <br />
              Update!!!
            </h3>
            <div className="inputgroup">
              <input
                type="email"
                placeholder="Email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <p>{EmailError}</p>
            </div>
            <div className="inputgroup">
              <input
                type="number"
                placeholder="Phone"
                value={Phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <p>{PhoneError}</p>
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
      <div className="Footer-Bottom">
        <p>
          Outlets : Gate no. 2, Rajendra Place Metro, Delhi 110008 , Gate No 5,
          Lajpat Nagar Metro Station, Block C, Lajpat Nagar III, Lajpat Nagar,
          New Delhi, Delhi 110024 ,Food Bus of India Vishwavidyalaya Metro
          Station Gate No 04,Delhi, New Delhi, Delhi 110007 , Gate no 4, metro
          station, South Extension, 2, Delhi, New Delhi, Delhi 110049
        </p>
      </div>
    </>
  );
}

export default Footer;
