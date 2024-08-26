import React from 'react'
import { Link } from "react-router-dom";
import transition from "../transition";
import "../styles/components/Bilder.css";

const PostWeddingSite = () => {

  return (
    <>
    <div className="grid__header">
    <h1>Bildergalerie</h1>
    <Link to="/" className="ButtonToHome">
      Startseite
    </Link>
  </div>
  <div className='albumLinkContainer'>
   <h2>Hochzeitsalbum von Lilith und Bastian</h2>
   <h3>Album-Link:</h3>
   <p><a target="_blank" href="http://www.weddies.de/Lilith+Bastian">www.weddies.de/Lilith+Bastian</a></p>
  </div>
  </>
  )
}
export default transition(PostWeddingSite);