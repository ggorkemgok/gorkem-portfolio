import React from "react";
import "./intro.css";
import bg from "../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../assets/hireme.png";

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I am <span className="introName">Görkem</span> <br />
          Web Developer
        </span>
        <p className="introPara">
          I am a Junior Web Developer, skilled in Front- and Backend. <br /> I
          passionately create easy-to-use webapps and websites.{" "}
        </p>
        <Link>
          <button className="btn">
            {" "}
            <img src={btnImg} alt="" className="btnImg" /> I need job!
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile_picture" className="bg" />
    </section>
  );
}

export default Intro;
