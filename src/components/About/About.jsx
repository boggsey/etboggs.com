import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";

const AboutWrapper = styled.section`
  ${tw`w-full justify-between items-center flex flex-row min-h-screen bg-cover bg-left-bottom md:bg-right-bottom`};
  background-image: url("https://res.cloudinary.com/ericboggs/image/upload/v1563389045/me-full_timtsx.jpg");

  .container {
    ${tw`w-5/6 md:w-full`};
  }

  h2 {
    ${tw`text-center md:text-left uppercase font-sans font-bold mb-0 mt-0 text-2xl`};
  }

  .full-description {
    ${tw`w-full md:w-2/5 flex flex-col items-start justify-center text-xl leading-normal font-sans md:pl-10p`};
  }
`;

class About extends Component {
  render() {
    return (
      <AboutWrapper id="about">
        <div className="container">
          <div className="full-description">
            <h2>History</h2>
            <p>
              Since serving in the United States Marine Corps, I&apos;ve
              committed myself to learning, sharing and crafting technology.
              I've spent half of my time building websites and apps for profit
              and the other half focused on technology that improves
              people&apos;s lives. Since 2012, I have served as a board member
              for AVFTI, a nonprofit organization that helps those affected by
              sexual violence. I've also taught over 150 students about the
              principles of web development through Girl Develop It Cincinnati.
            </p>
          </div>
        </div>
      </AboutWrapper>
    );
  }
}

export default About;
