import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const HeroWrapper = styled.section`
  ${tw`w-full justify-center items-center flex flex-col min-h-screen text-white`};
  background-color: #2d2d34;

  p {
    ${tw`w-4/5 md:w-2/5 text-center mt-0`};
    font-size: 20px;
  }

  .name {
    ${tw`w-full md:w-3/4 text-center m0 uppercase leading-normal m0`};
    font: 700 24px/24px "Roboto";

    @media screen and (max-width: 420px) {
      font: 400 25px/35px "Roboto";
    }
  }

  .learn-more {
    ${tw`text-center text-white border-white border-solid border-2 uppercase no-underline`};
    padding: 10px 20px;
    font-family: "Roboto";
  }
`;

class Hero extends Component {
  render() {
    return (
      <HeroWrapper>
        <p>
          I&apos;m a developer, nonprofit cofounder and Marine Corps Veteran
          that is dedicated to social good. I currently work at Alchemy (a
          P&amp;G company) and serve on the board of A Voice for the Innocent, a
          nonprofit dedicated to helping those affected by sexual violence.
        </p>
        <a className="learn-more" href="#about">
          Learn More
        </a>
      </HeroWrapper>
    );
  }
}

export default Hero;
