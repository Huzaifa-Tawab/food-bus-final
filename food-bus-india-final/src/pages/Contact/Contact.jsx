import React from "react";
import "./contact.css";
import mail from "./emailimg.png";
import phone from "./phoneimg.png";
function Contact() {
  return (
    <div className="contctback">
      <div className="contct-content-box">
        {/* Contact */}
        <div className="flex-contact">
          <div className="Content-Card">
            <div className="Content-Img">
              <img src={mail} alt="" />
            </div>

            <div className="Content-Card-solo">
              <h1>Mail</h1>

              <span>Operations@foodbusofindia.com</span>
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
    </div>
  );
}

export default Contact;
