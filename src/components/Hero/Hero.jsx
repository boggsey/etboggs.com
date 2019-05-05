import React, { Component } from "react";
import Background from "./forest.png";
import "./Hero.scss";

const sectionStyle = {
  backgroundImage: `url(${Background})`
};

class Hero extends Component {
  render() {
    return (
      <section className="hero" style={sectionStyle}>
        <h2 className="name">Eric Boggs</h2>
        <p>
          I'm a developer, nonprofit cofounder and Marine Corps Veteran that is
          dedicated to social good. I currently work at Alchemy (a P&amp;G
          company) and serve on the board of A Voice for the Innocent, a
          nonprofit dedicated to helping those affected by sexual violence.
        </p>
        <a className="learn-more" href="#about">
          Learn More
        </a>
      </section>
    );
  }
}

export default Hero;
