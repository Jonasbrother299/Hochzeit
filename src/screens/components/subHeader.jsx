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
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Infos">Infos</Link>
        </li>
        <li>
          <Link to="/PostWeddingSite">Afterwards Programm</Link>
        </li>
      </ul>
    </div>
  );
}
