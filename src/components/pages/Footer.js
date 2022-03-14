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
          <Link
            to="//www.facebook.com/groups/359555811579624"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </Link>

          {/* <Link to="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link> */}

          <Link
            to="//twitter.com/ipngovpl/status/1426855192507686917"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </Link>

          <Link
            to="//pl.wikipedia.org/wiki/Jan_Kowalewski"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogle />
          </Link>

          <Link
            to="//pl.pinterest.com/madziapomian/plakat-wojna-polsko-bolszewicka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
