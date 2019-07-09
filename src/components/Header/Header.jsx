import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import theme from "tailwindcss/defaultTheme";
import { Link } from "gatsby";
import Nav from "./../Nav/Nav";

const HeaderWrapper = styled.header`
  ${tw`w-full h-100px absolute z-50`};

  .container {
    ${tw`w-full md:w-95p h-100px justify-between items-center flex flex-col md:flex-row pt-4 md:pt-0`};
  }

  .logo {
    ${tw`w-45px h-45px md:w-full text-black text-center md:text-left`};
    font: 400 45px/55px "gentium book basic";

    a {
      ${tw`no-underline text-white`};
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
        </div>
      </HeaderWrapper>
    );
  }
}

export default Header;
