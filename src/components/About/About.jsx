import React, { Component } from "react";
import styled from "react-emotion";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";

const AboutWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: $breakpoint-mobile-max) {
    padding: 40px 0;
  }

  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: stretch;
    width: 80%;

    @media screen and (max-width: $breakpoint-mobile-max) {
      flex-direction: column;
      width: 85%;
    }
  }

  h2 {
    margin: 0;

    @media screen and (max-width: $breakpoint-mobile-max) {
      text-align: center;
      padding: 20px 0;
      margin: 0;
    }
  }

  .about-image {
    width: 400px;

    @media screen and (max-width: $breakpoint-mobile-max) {
      width: 100%;
      order: 1;
    }

    img {
      width: 100%;
    }
  }

  .full-description {
    width: 50%;
    font-size: 18px;
    line-height: 1.5em;

    @media screen and (max-width: $breakpoint-mobile-max) {
      width: 100%;
      order: 2;
    }
  }

  .social {
    a {
      width: auto;
      display: inline-block;
      padding-right: 10px;
      color: $body-copy-dark;
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
              I've always liked to build things. So, it's no surprise that I
              became fiercely interested in teaching myself how to make websites
              as a kid. Around 2000, I poured through the htmlgoodies website
              and built the worst looking site for the metal band that I was in
              at the time. Unfortunately, the rock star life didn't quite pan
              out so I joined the Marine Corps on a whim. After being honorably
              discharged as a Corporal in 2007, I quickly re-discovered a nearly
              forgotten passion for web development.
            </p>

            <p>
              Since then, I've committed to a life-long pursuit of learning,
              sharing and crafting of technology. I spend half of my time
              building it for profit (P&amp;G, Mars, ConAgra, Ford and Eli
              Lilly) and the other half focused on technology that improves
              people's lives. In 2012, I helped co-create a nonprofit
              organization that helps those affected by sexual violence. I've
              traveled the entire United States to share a message of hope and
              healing through compassion, discussion, empathy and understanding.
              You can also find me teaching classes for Girl Develop It
              Cincinnati.
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
