import React from "react";
import { Link } from "react-router-dom";

import "../../styles/subHeader.css";

export default function SubHeader() {
  return (
    <div className="subHeader__container">
      <ul>
        <li>
          <Link to="/Programm">Programm</Link>
        </li>
        <li>
          <Link to="/Contact">Rückmeldung</Link>
        </li>
        <li>
          <Link to="/Infos">Infos</Link>
        </li>
        <li>
          <Link to="/PostWeddingSite">Hochzeitsbildergalerie</Link>
        </li>
      </ul>
    </div>
  );
}
