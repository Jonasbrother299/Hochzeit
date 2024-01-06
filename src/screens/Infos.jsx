import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Infos.css";
import transition from "../transition";

const Infos = () => {
  return (
    <>
      <div className="grid__header">
        <h1> Infos</h1>
        <Link to="/" className="ButtonToHome">
          Startseite
        </Link>
      </div>
      <div className="description">
        <h2 className="descriptionText">Hallo zusammen,</h2>
        <h2 className="descriptionText">
          Schön, dass ihr mit uns feiern wollt!
        </h2>
        <h2 className="descriptionText">
          Viele von euch sehen wir nicht so oft wie wir gerne würden. Sei es
          durch Distanz, unser beschäftigtes Elternleben oder andere Grüne.
          Desswegen wünschen wir uns für unsere Hochzeit vorallem Zeit mit euch.
          Wir wollen in lockerer Atmosphäre das Wochenende mit euch verbringen
          und den Uhlandhof in unseren Hochzeitscampingplatz verwandeln.
        </h2>
      </div>

      <div className="cardContainer">
        <div className="cardWrapper">
          <div className="card">
            <div className="content">
              <h3>Allgemeine Infos:</h3>
              <ul className="listUL">
                <li> Datum: 23.-25.8.2024</li>
                <li>
                  Location: Uhlandhof (Uhlandhof 1; 73110 Hattenhofen)
                  <a href="https://www.google.com/maps/place/Uhlandhof+1,+73110+Hattenhofen/@48.658989,9.5633567,17z/data=!3m1!4b1!4m6!3m5!1s0x4799a2b0ccab9485:0xd6022570cb58c59b!8m2!3d48.658989!4d9.565937!16s%2Fg%2F11cplcg1kb?entry=ttu">
                    Google Maps
                  </a>
                </li>
                <li> Kleidung: Leger. Unbedingt Wetterabhängig</li>
                <li>Geschenke: Text folgt</li>
              </ul>
              <p></p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h3>Unterstützung während dem Fest</h3>
              <p className="contentText">
                Text dass jeder mithelfen muss …und das es Pläne gibt wo man
                sich für Dienste einträgt.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h3>Camping Informationen</h3>
              <ul className="listUL">
                <li>...</li>
                <li>...</li>
                <li>... </li>
                <li>...</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h3>Selbst Mitgestalten</h3>
              <p className="contentText">
                Wir freuen uns sehr über Beiträge zu Programm, Spielideen oder
                kleine Überraschungen. Dies bitte unbedingt mit Liliths
                Trauzeugin Jenny absprchen. -- email + Telefonnummer von Jenny.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(Infos);
