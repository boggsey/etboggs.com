/* global tw */
import React, { Component } from "react";
import styled from "react-emotion";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";

const AboutWrapper = styled.section`
  ${tw(
    "w-full justify-between items-center flex flex-row min-h-screen pt-12 pb-12"
  )};

  .container {
    ${tw(
      "sm:w-5/6 med:w-4/5 justify-between items-stretch flex flex-col lg:flex-row"
    )};
  }

  h2 {
    ${tw("m0 text-center md:text-left")};
    font: 700 24px/28px "Alegreya Sans";
    text-transform: uppercase;
  }

  .about-image {
    ${tw("w-full md:w-1/2 flex justify-end items-center")};

    @media screen and (max-width: $breakpoint-mobile-max) {
      order: 1;
    }

    img {
      ${tw("w-full md:w-3/4")};
    }
  }

  .full-description {
    ${tw(
      "w-full md:w-1/2 flex flex-col items-start justify-center text-lg leading-normal"
    )};

    @media screen and (max-width: $breakpoint-mobile-max) {
      order: 2;
    }
  }

  .social {
    a {
      ${tw("w-auto inline-block pr-4 text-black")};
    }
  }
`;

class About extends Component {
  render() {
    return (
      <AboutWrapper id="about">
        <div className="container">
          <div className="full-description">
            <h2 className="section-header">About</h2>
            <p>
              After being honorably discharged from the United States Marine
              Corps as a Corporal in 2007, I&apos;ve committed to a life-long
              pursuit of learning, sharing and crafting of technology. I spend
              half of my time building it for profit (P&amp;G, Mars, ConAgra,
              Ford and Eli Lilly) and the other half focused on technology that
              improves people&apos;s lives. In 2012, I helped co-create a
              nonprofit organization that helps those affected by sexual
              violence. I&apos;ve traveled the entire United States to share a
              message of hope and healing through compassion, discussion,
              empathy and understanding. You can also find me teaching classes
              for Girl Develop It Cincinnati.
            </p>
            <div className="social">
              <UserLinks size={20} config={config} />
            </div>
          </div>
          <div className="about-image">
            <img src="http://placehold.it/400x400" alt="" />
          </div>
        </div>
      </AboutWrapper>
    );
  }
}

export default About;
