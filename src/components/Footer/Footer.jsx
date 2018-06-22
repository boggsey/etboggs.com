import React, { Component } from "react";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import Nav from "./../Nav/Nav";
import "./Footer.scss";

class Footer extends Component {
  render() {
    console.log(this.props);
    const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <div className="container">
          <div className="copyright">
            {copyright}
          </div>
          <Nav />
          <UserLinks config={config} labeled />
        </div>
      </footer>
    );
  }
}

export default Footer;
