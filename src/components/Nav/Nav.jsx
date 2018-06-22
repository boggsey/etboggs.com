import React, { Component } from "react";
import Link from "gatsby-link";

class Nav extends Component {

  render() {
    return (
      <nav>
        <div className="primary-nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#writing">Writing</a>
        </div>
      </nav>
    );
  }
}

export default Nav;
