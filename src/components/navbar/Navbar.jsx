/** @format */
import React, { useState } from "react";
import "./Navbar.css";
import { HiMiniBars3 } from "react-icons/hi2";
import Cvlogo from "../assets/Image/Cvlogo.png";
import Header from "./header";
import Menu from "./menu";

export default function Navbar() {
  const [openDrawMenu, setOpenDrawMenu] = useState(false);

  const handleToggle = () => {
    setOpenDrawMenu(!openDrawMenu);
  };

  return (
    <>
      <Menu openDrawMenu={openDrawMenu} handleToggle={handleToggle} />
      <header id='home' className='header container'>
        <nav className='header__wrapper'>
          <div className='navbar__grid'>
            <div className='navbar__upper'>
              <img className='header__logo logOne' src={Cvlogo} alt='Covape-19 Garage Logo' title='Covape-19 Grage' />
            </div>
            <Header />
            <button className='header__bars btnTwo' onClick={handleToggle}>
              <HiMiniBars3 />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
