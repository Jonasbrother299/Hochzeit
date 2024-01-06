import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Programm.css";
import transition from "../transition";

const Programm = () => {
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
              Mittagessen/Snacks zwischen 13 und 15 Uhr
            </li>
            <li class="nested-listText">
              Abendessen (Pizza) voraussichtlich zwischen 18 bis 22 Uhr
            </li>
            <li class="nested-listText">
              Gemütliches zusammen sitzen (IrischerAbend)
            </li>
          </ul>
          <li className="ListHeader">Samstag</li>
          <ul class="nested-list">
            <li class="nested-listText">Frühstück ab 8 Uhr</li>
            <li class="nested-listText">Trauzeremonie ca. 10 Uhr</li>
            <li class="nested-listText">Gemeinsame Bilder</li>
            <li class="nested-listText">
              Mittagessen/Snacks zwischen 13 und 15 Uhr
            </li>
            <li class="nested-listText">Spiele, Spaß und Freizeit</li>
            <li class="nested-listText">
              Abendessen (Maultaschen Variationen) voraussichtlich zwischen 18
              bis 22 Uhr
            </li>
            <li class="nested-listText">Party</li>
          </ul>
          <li className="ListHeader">Sonntag</li>
          <ul class="nested-list">
            <li class="nested-listText">Brunch ab 9 Uhr</li>
            <li class="nested-listText">Abbau gegen 12 Uhr</li>
          </ul>
        </ul>
      </div>
    </>
  );
};
export default transition(Programm);
