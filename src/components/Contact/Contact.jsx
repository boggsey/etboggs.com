import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import MapContainer from "../MapContainer/MapContainer";
import config from "../../../data/SiteConfig";
import UserLinks from "../UserLinks/UserLinks";

const ContactWrapper = styled.section`
  ${tw`w-full justify-between items-center flex flex-col md:flex-row min-h-screen text-white`};
  background-color: #212121;
  min-height: 50vh;

  .contact-map {
    ${tw`w-full md:w-1/2 relative`};
    min-height: 50vh;
  }

  .contact-details {
    ${tw`w-full md:w-1/2 flex flex-col items-center md:items-end justify-center text-center md:text-right`};
    padding: 30px 5%;

    @media screen and (max-width: $breakpoint-mobile-max) {
      order: 1;
      min-height: 50vh;
    }

    .section-header {
      margin-bottom: 10px;

      @media screen and (max-width: $breakpoint-mobile-max) {
        text-align: center;
        width: 100%;
      }
    }

    p {
      ${tw`w-4/5`};
      color: #666;
      font: 400 14px/22px "Roboto";
    }

    .line {
      margin-top: 10px;
      width: 30px;
      height: 2px;
      background: white;

      @media screen and (max-width: $breakpoint-mobile-max) {
        margin: 0 auto;
      }
    }

    .social {
      ${tw`w-full flex flex-row justify-center md:justify-end`};
      padding: 20px 0;

      a {
        ${tw`w-auto inline-block text-white`};
        padding-left: 10px;
      }
    }
  }
`;

export default function Contact() {
  return (
    <ContactWrapper>
      <div id="map" className="contact-map">
        <MapContainer />
      </div>
      <div className="contact-details">
        <h3 className="section-header">Let&apos;s Talk</h3>
        <p>
          I&apos;m currently employed by Alchemy in Cincinnati, Ohio. You can
          find me at the Alchemy offices, the AVFTI office in Covington
          (CovWorx) or Coffee Emporium.
        </p>
        <div className="line" />
        <div className="social">
          <UserLinks size="25" config={config} />
        </div>
      </div>
    </ContactWrapper>
  );
}
