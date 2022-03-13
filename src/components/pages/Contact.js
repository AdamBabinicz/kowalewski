import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import { BiLeftArrow } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Jeden z największych kryptografów w dziejach polskiego wywiadu</h2>
      <h3>
        Był współautorem polskich zwycięstw w Bitwie Warszawskiej i Operacji
        Niemeńskiej. Stanowił wzór dla kolejnego pokolenia polskich
        specjalistów, którzy złamali Enigmę. Senat RP ustanowił 2020 r. Rokiem
        Jana Kowalewskiego jako „uhonorowanie jego zasług, a tym samym osiągnięć
        polskiej nauki i myśli technicznej”.
      </h3>
      <h2>Życiorys</h2>
      <p>
        Urodził się 24 października 1892. Syn Józefa i Zdzisławy z Kowalskich.
        Ukończył Szkołę Handlową Zgromadzenia Kupców w Łodzi. W latach 1909–1912
        studiował na Uniwersytecie w Liège, otrzymując półdyplom z chemii
        technicznej.
      </p>
      <p>
        Po studiach wrócił do Łodzi, a praktyki zawodowe odbywał w fabrykach
        chemicznych w Zgierzu. Jeszcze przed wybuchem wojny został zatrudniony
        na stanowisku inżyniera w Białej Cerkwi na Ukrainie. Znał kilka języków
        obcych: niemiecki, francuski i rosyjski.
      </p>
      <p>
        Po wybuchu I wojny światowej zmobilizowany do armii rosyjskiej i
        skierowany do szkoły oficerskiej w Kijowie. Po ukończeniu szkoły w
        stopniu chorążego przydzielony do zapasowego pułku w Teodozji.
        Uczestniczył w walkach na froncie rumuńskim, w Bukowinie i Mołdawii,
        gdzie został ranny. W 1917 awansował na stopień podporucznika.
      </p>
      <Link to="/">
        <BiLeftArrow className="back" />
      </Link>
    </div>
  );
};

export default Contact;
