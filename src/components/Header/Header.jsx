import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link } from "gatsby";

const HeaderWrapper = styled.header`
  ${tw`w-full h-100px absolute md:fixed z-50 text-center flex justify-center md:justify-start`};

  .logo {
    ${tw`flex justify-center text-center bg-slate`};
    margin-left: 2.5%;
    padding: 20px 50px;
    width: 100px;
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
      </HeaderWrapper>
    );
  }
}

export default Header;
