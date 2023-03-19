import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import Nav from "./../Nav/Nav";

const FooterWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center`};
  min-height: 20vh;
  background: #111;

  nav {
    ${tw`text-center`};

    a {
      ${tw`no-underline inline-block text-white uppercase pl-4 pr-4 font-semibold`};
      font-family: "Roboto";
    }
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
