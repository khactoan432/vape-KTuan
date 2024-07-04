/** @format */
import React, { useState } from "react";
import "./Navbar.css";
import { HiMiniBars3 } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(<HiMiniBars3 />);
  const handleClick = () => {
    const mobileLinks = [document.querySelectorAll(".mobile__link")];
    const body = document.querySelector("body");

    if (mobileLinks) {
      setToggleIcon(<HiMiniBars3 />);
      setToggleMenu(false);
      body.style.overflowY = "auto";
    } else {
      alert("Error");
    }
  };

  const location = useLocation();

  return (
    <>
      <div className='navbar__lower'>
        <ul className='header__menu'>
          <li>
            <Link className='header__link' to='/' onClick={handleClick}>
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link
              className={`header__link ${location?.pathname === "/juice" ? "active" : ""}`}
              to='/juice'
              onClick={handleClick}
            >
              {" "}
              E-Juice{" "}
            </Link>
          </li>
          <li>
            <Link
              className={`header__link ${location?.pathname === "/mods-kids" ? "active" : ""}`}
              to='/mods-kids'
              onClick={handleClick}
            >
              {" "}
              Mods & Kids{" "}
            </Link>
          </li>
          <li>
            <Link
              className={`header__link ${location?.pathname === "/pods" ? "active" : ""}`}
              to='/pods'
              onClick={handleClick}
            >
              {" "}
              Pod System{" "}
            </Link>
          </li>
          <li>
            <Link
              className={`header__link ${location?.pathname === "/atomizer" ? "active" : ""}`}
              to='/atomizer'
              onClick={handleClick}
            >
              {" "}
              Atomizer{" "}
            </Link>
          </li>
          <li>
            <Link
              className={`header__link ${location?.pathname === "/accessories" ? "active" : ""}`}
              to='/accessories'
              onClick={handleClick}
            >
              {" "}
              Accessories{" "}
            </Link>
          </li>
          <li>
            <a className='header__link' href='#contact' onClick={handleClick}>
              {" "}
              Contact{" "}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
