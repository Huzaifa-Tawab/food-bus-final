import React from "react";
import "./footer.css";
import Logo from "../../assets/logos/FBI-LOGO-H.webp";
function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="Footer-Top">
          <div className="Footer-Top-Text">
            <h1>
              <span>St</span>ill You Need Our Support ?
            </h1>
            <p>
              Don’t wait make a smart & logical quote here. It's pretty easy.
            </p>
          </div>
          <button>Contact Us</button>
        </div>
        <div className="Footer-Middle">
          <div className="Footer-Middle-Logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="Footer-Middle-About">
            <h3>About Us.</h3>
            <p>
              Corporate clients and leisure travelers have been relying on
              Groundlink for dependable, safe, and professional chauffeured car
              service in major cities across the world.
            </p>
          </div>
          <div className="Footer-Middle-UseFull">
            <h3>Useful Links</h3>
            <p>
              About <br /> News <br />
              Partners <br />
              Team <br />
              Menu <br />
              Contact
            </p>
          </div>
          <div className="Footer-Middle-Help">
            <h3>Help?</h3>
            <p>
              Faq
              <br />
              Term & Condition
              <br />
              Reporting
              <br />
              Documentation
              <br />
              Support Policy
              <br />
              Privacy
            </p>
          </div>
        </div>
      </div>
      <div className="Footer-Bottom">
        <p>Copyright © 2023. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer;
