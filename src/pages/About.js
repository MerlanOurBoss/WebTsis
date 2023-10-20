import React from "react";
import ManEatingBurger from "../assets/multipleBurger.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${ManEatingBurger})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        We are Merlan Burger, your source for incredible burgers and gastronomic adventures. 
        Our story began with a simple idea - to create burgers that astound the imagination and satisfy hunger.
        Since then, we have strived for perfection in every detail. 
        </p>
        <p>
        Our team is a collective of talented chefs and passionate food enthusiasts who carefully select ingredients, 
        prepare them with love and creativity, and pay attention to every detail to craft a unique taste. 
        We explore diverse flavor combinations to offer you burgers that will surprise and delight your taste buds.
        </p>
        <p>
        Our promise is not just burgers. It's an encounter with culinary art, a taste symphony, a moment of happiness and pleasure. 
        We believe that a good burger can create special memories and make your days more delicious.
        </p>
        <p>
        We take pride in using only the freshest and highest-quality ingredients to deliver top-notch burgers to you. 
        Welcome to the world of Burger Bliss, where taste and quality are our priorities. We don't just cook burgers; 
        we create flavor journeys, and we're delighted that you're with us
        </p>
      </div>
    </div>
  );
}

export default About;