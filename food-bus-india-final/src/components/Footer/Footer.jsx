import React from "react";
import "./footer.css";
import Logo from "../../assets/logos/FBI-LOGO-H.webp";
import { Link } from "react-router-dom";
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
          <div className="Footer-Middle-Logo"></div>
          <div className="Footer-Middle-About">
            <img src={Logo} alt="Logo" />
            {/* <h3>About Us.</h3> */}
            <p>
              {/* Corporate clients and leisure travelers have been relying on
              Groundlink for dependable, safe, and professional chauffeured car
              service in major cities across the world. */}
            </p>
          </div>
          <div className="Footer-Middle-UseFull">
            <h3>Useful Links</h3>

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
          <div className="Footer-Middle-Help">
            <input type="text" placeholder="Email" />
            <input type="number" placeholder="Phone Number" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      {/* <div className="Footer-Bottom">
        <p>Copyright © 2023. All Rights Reserved.</p>
      </div> */}
    </>
  );
}

export default Footer;
