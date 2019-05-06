/* global tw */
import React, { Component } from "react";
import styled from "react-emotion";
import Nav from "./../Nav/Nav";

const FooterWrapper = styled.div`
  ${tw("flex flex-col items-center justify-center")};
  min-height: 20vh;
  background: #111;
  color: #cecece;

  nav {
    ${tw("text-center")};

    a {
      ${tw("no-underline inline-block text-white uppercase")};
      padding: 0 10px;
      font-family: "Roboto";
      text-transform: uppercase;
      font-weight: 600;
      padding-right: 5px;
    }
  }

  .made-with {
    text-align: center;
    color: #555;
    font-size: 10px;
    padding: 5px 0;
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <Nav />
      </FooterWrapper>
    );
  }
}

export default Footer;
