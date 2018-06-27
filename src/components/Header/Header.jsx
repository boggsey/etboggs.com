import React, { Component } from "react";
import Link from "gatsby-link";
import Nav from "./../Nav/Nav";
import "./Header.scss";

class Header extends Component {

  render() {
    const {config} = this.props;
    return (
      <header>
        <div className="container">
          <div className="logo">
            EB
          </div>
          <Nav />
        </div>	
      </header>
    );
  }
}

export default Header;