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
                  <a target="_blank"  className="link"href="https://www.google.com/maps/place/Uhlandhof+1,+73110+Hattenhofen/@48.658989,9.5633567,17z/data=!3m1!4b1!4m6!3m5!1s0x4799a2b0ccab9485:0xd6022570cb58c59b!8m2!3d48.658989!4d9.565937!16s%2Fg%2F11cplcg1kb?entry=ttu">
                    Google Maps
                  </a>
                </li>
                <li> Kleidung: Leger. Unbedingt Wetterabhängig</li>
                <li>Geschenk: Unser Haushalt ist komplett, darum wäre es sehr nett, wenn ihr an unsere Zukunft denkt,
                    und uns Futter für das Sparschwein schenkt 😉
                    </li>
              </ul>
              <p></p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h3>Unterstützung während dem Fest</h3>
              <p className="contentText">
              Da ein solch großes Fest über mehrere Tage nicht ohne Helfer funktioniert wird es vor Ort Helferlisten geben (Tisch decken/abräumen, spülen und andere allgemeine Punkte) in die sich eingetragen werden soll. Vielen Dank dafür schonmal im Voraus.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h3>Camping Informationen</h3>
              <ul className="listUL">
                <li>Es gibt genügend Platz für eurer Zelte, Camper und Autos.</li>
                <li>Bitte alles, was Ihr zum Campen benötigt (Schlafsack, Isomatte, Zelt….) selber mitbringen</li>
                <li>Es wird verschiede Camping-Bereiche geben (Für diejenigen die es gerne ruhiger hätten und für die, die direkt von der Festscheune in den Schlafsack hüpfen wollen). </li>
                <li>Es wird wahrscheinlich keinen Strom an den Campingplätzen direkt geben.</li>
                <li>Es gibt ausreichen Toiletten und Waschbecken aber keine richtigen duschen (Campingduschen / Eimer etc. können verwendet werden 😉).</li>
                <li>Hunde sind in den Campingbereichen erlaubt, jedoch nicht in den Festlocations</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h3>Selbst Mitgestalten</h3>
              <p className="contentText">
                Wir freuen uns sehr über Beiträge zu Programm, Spielideen oder
                kleine Überraschungen. Dies bitte unbedingt mit Liliths
                Trauzeugin Jenni absprechen Email: <a href="mailto:jbenedikt@gmx.de">jbenedikt@gmx.de</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(Infos);
