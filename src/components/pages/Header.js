import React, { useState } from "react";
import img from "../assets/6.png";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="header" id="start">
      <div className="header-logo">
        <img src={img} alt="..." />
      </div>
      <div className="hamburger-icon">
        <HiOutlineMenuAlt2 className="icon" onClick={showMenu} />
      </div>
      <nav>
        <ul className={open ? "list-items active" : "list-items"}>
          <div className="close-icon">
            <AiOutlineClose className="icon" onClick={showMenu} />
          </div>
          <li onClick={showMenu}>
            <a href="/#">Start</a>
          </li>
          <li onClick={showMenu}>
            <a href="#awans">Awans</a>
          </li>
          <li onClick={showMenu}>
            <a href="#galeria">Galeria</a>
          </li>
          {/* <li>
            <Link to="/pricing">Pricing</Link>
          </li> */}
          <li>
            <Link to="zyciorys">Życiorys</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
