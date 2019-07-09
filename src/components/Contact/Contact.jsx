import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import config from "../../../data/SiteConfig";
import UserLinks from "../UserLinks/UserLinks";
import MapImage from "../../images/map.jpg";

const ContactWrapper = styled.section`
  ${tw`w-full justify-between items-center flex flex-col md:flex-row min-h-halfScreen text-white`};
  background-color: #212121;

  .contact-map {
    ${tw`w-full md:w-1/2 relative min-h-halfScreen`};

    img {
      ${tw`w-full`};
    }
  }

  .contact-details {
    ${tw`w-full md:w-1/2 min-h-halfScreen flex flex-col items-center md:items-end justify-center text-center md:text-right`};
    padding: 30px 5%;

    h3 {
      ${tw`w-full text-center md:text-right uppercase font-sans font-bold text-2xl`};
      margin-bottom: 10px;
    }

    p {
      ${tw`w-4/5 font-serif text-lg text-body`};
    }

    .line {
      ${tw`w-full text-center md:text-right md:mx-auto`};
      margin-top: 10px;
      width: 30px;
      height: 2px;
    }

    .social {
      ${tw`w-full flex flex-row justify-center md:justify-end`};
      padding: 20px 0;

      a {
        ${tw`w-auto inline-block text-white pl-3`};
      }
    }
  }
`;

export default function Contact() {
  return (
    <ContactWrapper>
      <div id="map" className="contact-map">
        <img src={MapImage} alt="Map of Cincinnati" />
      </div>
      <div className="contact-details">
        <h3>Contact</h3>
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
