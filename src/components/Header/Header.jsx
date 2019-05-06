/* global tw */
import React, { Component } from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import Nav from "./../Nav/Nav";

const HeaderWrapper = styled.header`
  ${tw("w-full h-100px absolute md:fixed z-50")};

  .container {
    ${tw(
      "w-full md:w-95p h-100px justify-between items-center flex flex-col md:flex-row pt-4 md:pt-0"
    )};
  }

  .logo {
    ${tw("w-45px h-45px md:w-full text-black text-center md:text-left")};
    font: 400 45px/55px "gentium book basic";

    a {
      ${tw("no-underline text-black")};
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="container">
          <div className="logo">
            <Link
              to="/"
              innerRef={el => {
                this.myLink = el;
              }}
            >
              EB
            </Link>
          </div>
          <Nav />
        </div>
      </HeaderWrapper>
    );
  }
}

export default Header;
