import React from "react";
import { HeroPhoto, FooterBild } from "../assets";
import Navbar from "./Navbar";
import SubHeader from "./components/subHeader";
import HeroSubTitle from "./components/HeroSubTitle";
import ScrollBar from "./components/ScrollBar";
import transition from "../transition";
import "../styles/main.css";
const Home = () => {
  return (
    <>
      <ScrollBar />
      <div className="App">
        <h1 className="hero__title">Bastian & Lilith</h1>
        <div className="hero__background"></div>
        <Navbar />
      </div>
      <HeroSubTitle />
      <SubHeader />
      <img
        className="footerImage"
        src={FooterBild}
        alt="Beschreibung des Bildes"
      />
    </>
  );
};

export default transition(Home);
