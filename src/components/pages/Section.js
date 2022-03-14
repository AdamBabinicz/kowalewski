import React, { useState } from "react";
import "../styles/Section.css";
import Matematyk from "../variables/Matematyk";
import Poliglota from "../variables/Poliglota";
import Kryptolog from "../variables/Kryptolog";
import { Link } from "react-router-dom";
import Modal1 from "../variables/Modal1";

const Section = () => {
  const [text, setText] = useState("first-con");
  const [isModalActive, setIsModalActive] = useState(false);
  const isActive = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <div className="section">
      <div>
        <div className="change-box">
          <button
            className="state-change-btn"
            onClick={() => setText("first-con")}
          >
            Matematyk
          </button>
          <button
            className="state-change-btn"
            onClick={() => setText("second-con")}
          >
            Poliglota
          </button>
          <button
            className="state-change-btn"
            onClick={() => setText("third-con")}
          >
            Kryptolog
          </button>
        </div>
        <div>
          {text === "first-con" && <Matematyk />}
          {text === "second-con" && <Poliglota />}
          {text === "third-con" && <Kryptolog />}
          <div className="button">
            <Link onClick={isActive} to="/" className="section-button">
              Zobacz
            </Link>
          </div>
          {isModalActive && <Modal1 isActive={isActive} />}
        </div>
      </div>
    </div>
  );
};

export default Section;
