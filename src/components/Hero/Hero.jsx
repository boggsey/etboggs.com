import React, { Component } from "react";
import Background from "./forest.png";
import "./Hero.scss";

var sectionStyle = {
  backgroundImage: `url(${Background})`
};

class Hero extends Component {
  render() {
    return (
      <section className="hero" style={sectionStyle}>
        <ul>
          <li>Web Developer.</li>
          <li>Non-profit Cofounder.</li>
          <li>Tech Instructor.</li>
        </ul>
        <h2 className="name">Hello! I'm Eric Bog<span className="kern">g</span>s, a Cincinnati native and Marine Corps Veteran that is dedicated to social good.</h2>
        <a className="learn-more" href="#about">Learn More</a>
      </section>
    );
  }
}

export default Hero;
