/** @format */

import React from "react";
import iconZalo from "../assets/Svg/Icon_of_Zalo.svg.webp";
import iconMessenger from "../assets/Svg/icon-messanger.webp";
import iconPhone from "../assets/Image/phone-icon-800x800.png";

import "./Contact.css"; // Import the CSS file for styling

const Contact = () => {
  const iconStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  const rippleStyle = {
    ...iconStyle,
    backgroundColor: "transparent",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "-1",
  };

  const iconImageStyle = {
    width: "50%",
    height: "50%",
    fill: "white",
    src: iconPhone,
  };

  return (
    <div className='contact-buttons'>
      <a href='https://zalo.me/0353846079' className='contact-button gentle-wave zalo'>
        <img src={iconZalo} alt='Zalo Icon' />
      </a>
      <a href='https://m.me/khactuan.nguyen.58910' className='contact-button gentle-wave messenger'>
        <img src={iconMessenger} alt='Messenger Icon' />
      </a>
      {/* <a href='tel:0353846079' className='contact-button gentle-wave phone'>
        <img src={iconPhone} alt='Phone Icon' />
      </a> */}
      <a href='tel:0353846079' style={{ position: "relative", width: "48px", height: "48px" }} className='btn'>
        <div style={rippleStyle} className='ripple'></div>
        <div style={iconStyle}>
          <img src={iconPhone} alt='Hotline' style={iconImageStyle} />
        </div>
      </a>
    </div>
  );
};

export default Contact;
