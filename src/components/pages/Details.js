import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Details.css";
import Modal from "../Portal/Modal";

const Details = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

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
          <Link onClick={() => Toggle()} to="/">
            Czytaj
          </Link>
          <Modal
            show={modal}
            close={Toggle}
            title="Jan Kowalewski powołany do wojska"
          >
            <p>
              Po rewolucji lutowej 1917 roku w Rosji, Jan Kowalewski,
              współtworzył Związek Wojskowych Polaków w armii rosyjskiej, a
              następnie wstąpił do organizowanego na Ukrainie II Korpusu
              Polskiego, gdzie otrzymał przydział do oddziału wywiadowczego
              sztabu korpusu. Po bitwie pod Kaniowem, działał w konspiracyjnej
              Polskiej Organizacji Wojskowej, podległej Komendzie Naczelnej Nr
              III na Ukrainie. Następnie przedarł się z Ukrainy na Kubań, gdzie
              wstąpił do formującej się 4 Dywizji Strzeleckiej i wraz z nią w
              czerwcu 1919 roku powrócił przez Rumunię do Polski.
            </p>
            <br />
            <p>
              <em>
                niepodlegla.gov.pl/o-niepodleglej/jan-kowalewski-kryptolog-do-zadan-specjalnych
              </em>
            </p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Details;
