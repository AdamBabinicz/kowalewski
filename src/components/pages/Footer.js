import { Link } from "react-router-dom";
import React from "react";
import "../styles/Footer.css";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="carts">
        <p>Rdom, 2022 - {new Date().getFullYear()}.</p>
        <div className="media">
          <Link to="/">
            <FaFacebook />
          </Link>

          <Link to="/">
            <FaInstagram />
          </Link>

          <Link to="/">
            <FaTwitter />
          </Link>

          <Link to="/">
            <FaGoogle />
          </Link>

          <Link to="/">
            <FaPinterest />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
