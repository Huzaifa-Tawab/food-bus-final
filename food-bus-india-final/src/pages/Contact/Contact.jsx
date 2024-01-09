import React from "react";
import "./contact.css";
import mail from "./emailimg.png"
import phone from "./phoneimg.png"
function Contact() {
  return(
  <div className="contctback">
   <div className="contct-content-box">
    <h1>Got Suggestions ?  <br></br>We Here ya...</h1>
    <div className="cntct-text">
      <div className="contct-email">
        <img className="magphn-icon"  src={mail}></img>
        <h2>hello@fbi.com</h2>
      </div>
      <div className="phone-email">
        <img className="magphn-icon"  src={phone}></img>
        <h2>000000000000</h2>
      </div>
    </div>
   </div>
   <div clas></div>
  </div>

)
}

export default Contact;
