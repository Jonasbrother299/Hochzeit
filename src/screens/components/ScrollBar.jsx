import React, { useEffect } from 'react';
import "../../styles/components/Scrollbar.css";

export default function ScrollBar() {
  useEffect(() => {
    const progressBar = document.querySelector(".progressbar");
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    const handleScroll = () => {
      const progressHeight = (window.pageYOffset / totalHeight) * 100;
      progressBar.style.height = progressHeight + "%";
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      <div className="progressbar"></div>
      <div className="scrollPath"></div>
    </>
  );
}