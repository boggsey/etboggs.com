import React, { Component } from "react";
import Nav from "./../Nav/Nav";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Nav />
        <p className="made-with">Made in Cincinnati with amusement &amp; mild annoyance</p>
      </footer>
    );
  }
}

export default Footer;
