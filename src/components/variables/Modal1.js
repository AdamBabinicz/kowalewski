import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GrCaretNext } from "react-icons/gr";
import "../styles/Modal.css";
import img from "../assets/2.png";

const Modal1 = ({ isActive }) => {
  return (
    <div className="modal1">
      <div className="close-modal">
        <AiOutlineClose className="icon" onClick={isActive} />
      </div>
      <div className="title">
        <h3 className="text">Jan Kowalewski</h3>
        <p>(1892 - 1965)</p>
        <p>Podpułkownik dyplomowany piechoty Wojska Polskiego</p>
      </div>
      <div className="inputs">
        <img src={img} alt="..." />
        {/* <input type="text" placeholder="Szukaj" />
        <button>
          <GrCaretNext />
          Szukaj
        </button> */}
      </div>
    </div>
  );
};

export default Modal1;
