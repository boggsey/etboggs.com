import React from "react";
import styled from "react-emotion";
import MapContainer from "../MapContainer/MapContainer";
import config from "../../../data/SiteConfig";
import UserLinks from "../UserLinks/UserLinks";

const ContactWrapper = styled.section`
  background-color: #212121;
  min-height: 50vh;
  display: flex;
  flex-flow: row-wrap;
  justify-content: space-between;
  color: white;

  @media screen and (max-width: $breakpoint-mobile-max) {
    flex-direction: column;
  }

  .contact-map {
    width: 50%;
    position: relative;

    @media screen and (max-width: $breakpoint-mobile-max) {
      order: 2;
      width: 100%;
      min-height: 50vh;
    }
  }

  .contact-details {
    width: 50%;
    text-align: right;
    padding: 30px 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    @media screen and (max-width: $breakpoint-mobile-max) {
      order: 1;
      width: 100%;
      min-height: 50vh;
      text-align: center;
    }

    .section-header {
      margin-bottom: 10px;

      @media screen and (max-width: $breakpoint-mobile-max) {
        text-align: center;
        width: 100%;
      }
    }

    p {
      color: #666;
      width: 80%;
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
      text-transform: uppercase;
      padding: 20px 0;

      @media screen and (max-width: $breakpoint-mobile-max) {
        width: 100%;
      }

      a {
        width: auto;
        display: inline-block;
        padding-left: 10px;
        color: $body-copy-light;
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
