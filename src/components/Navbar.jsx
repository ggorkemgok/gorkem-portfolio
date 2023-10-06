import React from "react";
import "../../src/components/navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import ContactImg from "../assets/contact.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Clients</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={ContactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
