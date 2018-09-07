import React, { Component } from "react";
import Link from "gatsby-link";
import './Nav.scss';

class Nav extends Component {

  render() {
    return (
      <nav>
        <div className="primary-nav">
          <Link
            to="/#about"
            innerRef={(el) => { this.myLink = el }}
          >
            About
          </Link>
          <Link
            to="/#work"
            innerRef={(el) => { this.myLink = el }}
          >
            Work
          </Link>
          <Link
            to="/#writing"
            innerRef={(el) => { this.myLink = el }}
          >
            writing
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
