import React, { Component } from "react";
import Link from "gatsby-link";
import Nav from "./../Nav/Nav";
import "./Header.scss";

class Header extends Component {

  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <Link
              to="/"
              innerRef={(el) => { this.myLink = el }}
            >
              EB
            </Link>
          </div>
          <Nav />
        </div>
      </header>
    );
  }
}

export default Header;
