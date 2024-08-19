import React, { useState, useEffect } from "react";
import { HeroPhoto, FooterBild, FooterBildSmall } from "../assets"; // Ensure you have imported the small version of the image
import Navbar from "./Navbar";
import SubHeader from "./components/subHeader";
import HeroSubTitle from "./components/HeroSubTitle";
import ScrollBar from "./components/ScrollBar";
import transition from "../transition";
import "../styles/main.css";

const Home = () => {
  // State to hold the current footer image
  const [currentFooterImage, setCurrentFooterImage] = useState(FooterBild);

  useEffect(() => {
    const updateImageBasedOnScreenWidth = () => {
      // Check if the screen width is less than a certain number of pixels
      if (window.innerWidth < 768) { // 768px is a common breakpoint for mobile devices
        setCurrentFooterImage(FooterBildSmall); // Use the small image when the screen is narrow
      } else {
        setCurrentFooterImage(FooterBild); // Use the original image for larger screens
      }
    };

    // Call the function initially and also set it up to run on window resize
    updateImageBasedOnScreenWidth();
    window.addEventListener("resize", updateImageBasedOnScreenWidth);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", updateImageBasedOnScreenWidth);
  }, []); // Empty array means this effect runs once on mount

  return (
    <>
      <ScrollBar />
      <div className="App">
        <h1 className="hero__title">Bastian & Lilith</h1>
        {/* <h2 className="hero__title__date"> 23-25.8.2024</h2> */}
        <h2 className="hero__title__Rückmeldung">Bald ist es soweit. Wetter spannend aus. Wir haben ein paar Infos aktualisiert. Wir freuen uns auf euch. </h2>
        <div className="hero__background"></div>
        <Navbar />
      </div>
      <HeroSubTitle />
      <SubHeader />
      <img
        className="footerImage"
        src={currentFooterImage}
        alt="Beschreibung des Bildes"
      />
    </>
  );
};

export default transition(Home);