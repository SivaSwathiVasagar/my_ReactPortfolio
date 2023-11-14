import React from "react";
import Fall from "../assets/Fall.jpeg";

export default function Home() {
  function scrollToContact() {
    const contactElement = document.getElementById("contactme");

    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div id="home" className="Home">
      <div className="Intro">
        <h2>Hello!👋, </h2>
        <h2>I'm Siva Swathi Vasagar 😊</h2>
        <h4>
          Crafting seamless digital experiences through the fusion of code and
          creativity as a <span className="Role">UX enthusiast </span>
          <span className="UXBracket">(sometimes)</span> and
          <span className="Role"> front-end web developer </span>
          residing in Farmington,MI.
        </h4>
        <div className="ProfileImage">
          <img src={Fall} alt="swathisimage" />
        </div>
        <button className="button" role="button" onClick={scrollToContact}>
          Contact me
        </button>
      </div>
    </div>
  );
}
