import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const HeroWrapper = styled.section`
  ${tw`w-full justify-center items-center flex flex-col min-h-screen text-white bg-slate`};
  background-color: #2a2c39;

  h1 {
    ${tw`w-4/5 md:w-1/2 text-white text-2xl md:text-4xl leading-normal font-sans text-left mb-0 mt-0`};
  }

  p {
    ${tw`w-4/5 md:w-1/2 mt-0 mb-0 text-white text-xl md:text-3xl leading-normal`};
  }
`;

class Hero extends Component {
  render() {
    return (
      <HeroWrapper>
        <h1 class="name">Hello. I'm Eric Boggs.</h1>
        <p>
          I'm a developer, non-profit co-founder and Marine Corps Veteran that
          is dedicated to social good. I currently work at Alchemy (a P&amp;G
          company) and serve on the board of A Voice for the Innocent, a
          nonprofit dedicated to helping those affected by sexual violence.
        </p>
      </HeroWrapper>
    );
  }
}

export default Hero;
