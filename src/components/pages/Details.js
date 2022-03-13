import React from "react";
import { Link } from "react-router-dom";
import "../styles/Details.css";

const Details = () => {
  return (
    <div className="details" id="awans">
      <div className="details-text">
        <h1 className="details-header">
          Człowiek, który zatrzymał <span>Rosję</span>
        </h1>
        <p>chorąży – 1 stycznia 1916 r.</p>
        <p>podporucznik – 1917 r.</p>
        <p>porucznik – 15 lipca 1918 r.</p>
        <p>kapitan – 1 czerwca 1919 r.</p>
        <p>
          major – 31 marca 1924 r. ze starszeństwem z 1 lipca 1923 r. i 71
          lokatą w korpusie oficerów piechoty
        </p>
        <p>
          podpułkownik – ze starszeństwem z 1 stycznia 1931 r. w korpusie
          oficerów piechoty
        </p>
        <p>pułkownik – nadany prawdopodobnie na emigracji</p>
        <p>generał brygady – nadany pośmiertnie 22 września 2020 r.</p>
        <div className="done-btn">
          <Link to="/">Czytaj</Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
