import { Link } from "react-router-dom";
import "./AboutContent.css";
import React1 from "../assets/React1.png";
import React2 from "../assets/React2.png";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I am a Computer Engineering student. Im a react front-end developer and I also do embedded projects.
        </p>
        <Link to="/contact">
         <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={React1} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={React2} className="img" alt="true"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
