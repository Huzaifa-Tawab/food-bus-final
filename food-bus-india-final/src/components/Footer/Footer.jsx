import React from "react";
import "./footer.css";
import Logo from "../../assets/logos/FBI-LOGO-H.webp";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
function Footer() {
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
            <input type="email" value={"Email"} />
            <input type="number" value={"1234567890"} />
            <button>Submit</button>
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
