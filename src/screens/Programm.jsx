import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Programm.css";
import transition from "../transition";

const Programm = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className="grid__header">
        <h1> Programm</h1>
        <Link to="/" className="ButtonToHome">
          Startseite
        </Link>
      </div>
      <div className="programm_container">
        <ul>
          <li className="ListHeader">Freitag</li>
          <ul class="nested-list">
            <li class="nested-listText">Ab 12 Uhr Anreise</li>
            <li class="nested-listText">
              Mittagessen (Hot Dog) zwischen 12 und 14 Uhr
            </li>
            <li class="nested-listText">
              Abendessen (Pizza) zwischen 18 und 22 Uhr
            </li>
            <li class="nested-listText">
            Gemütliches Zusammensitzen
            </li>
          </ul>
          <li className="ListHeader">Samstag</li>
          <ul class="nested-list">
            <li class="nested-listText">Frühstücksbuffet ab 8 Uhr</li>
            <li class="nested-listText">Trau- und Taufzeremonie 10:30 Uhr</li>
            <li class="nested-listText">Sektempfang 11:30 Uhr</li>
            <li class="nested-listText">Gemeinsame Bilder</li>
            <li class="nested-listText">
              Mittagessen (Kartoffelsuppe) ab 12:30 Uhr
            </li>
            <li class="nested-listText">
              Kaffee und Kuchen 16 Uhr
            </li>
            <li class="nested-listText">Spiele, Spaß und Freizeit</li>
            <li class="nested-listText">
            Abendessen 18:50 Uhr 
            </li>
            <li class="nested-listText">Party</li>
          </ul>
          <li className="ListHeader">Sonntag</li>
          <ul class="nested-list">
            <li class="nested-listText">Frühstück ab 9 Uhr</li>
            <li class="nested-listText">Abbau gegen 12 Uhr</li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default transition(Programm);
