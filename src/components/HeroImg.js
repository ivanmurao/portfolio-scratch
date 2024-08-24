import "./HeroImg.css";
import React from "react";
import HomeImage from "../assets/homeimg.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="home-img" src={HomeImage} alt="HomeImage" />
      </div>
      <div className="content">
        <p>HI, I'M A SOFTWARE ENGINEER</p>
        <h1>Christian Ivan.</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
