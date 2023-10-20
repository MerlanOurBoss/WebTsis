import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Bannerburger.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Merlan's Burgers </h1>
        <p>DELICIOUS EVERY TIME</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;