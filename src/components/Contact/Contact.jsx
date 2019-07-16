import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import config from "../../../data/SiteConfig";
import UserLinks from "../UserLinks/UserLinks";

const ContactWrapper = styled.section`
  ${tw`w-full justify-between items-center flex flex-col md:flex-row min-h-halfScreen text-white  pt-32 pb-32`};
  background-color: #212121;

  h2 {
    ${tw`text-center uppercase font-sans font-bold text-3xl`};
  }

  .inner-container {
    ${tw`w-full justify-between flex flex-col md:flex-row`};
  }

  .contact-details {
    ${tw`w-full md:w-1/3 flex flex-col text-center md:text-left`};

    h3 {
      ${tw`w-full text-center md:text-left uppercase font-sans font-bold text-2xl mt-0`};
      margin-bottom: 10px;
      letter-spacing: 2px;
    }

    .contact-description {
      ${tw`w-full md:w-4/5 font-serif text-xl text-body mb-0 leading-normal`};
    }

    .contact-email {
      ${tw`text-body font-sans font-bold text-xl mt-0 leading-normal`};
    }

    .line {
      ${tw`w-full text-center md:text-right md:mx-auto`};
      margin-top: 10px;
      width: 30px;
      height: 2px;
    }
  }

  .follow-me {
    ${tw`w-full md:w-1/3 flex flex-col text-center pt-12 pb-12 md:pt-0 md:pb-0`};

    h3 {
      ${tw`w-full text-center uppercase font-sans font-bold text-2xl mt-0`};
      letter-spacing: 2px;
    }

    .social {
      ${tw`w-full flex flex-row justify-center`};
      padding: 20px 0;

      a {
        ${tw`w-auto inline-block text-white pl-4 pr-4`};
      }
    }
  }

  .location {
    ${tw`w-full md:w-1/3 flex flex-col text-center md:text-right md:items-end`};

    h3 {
      ${tw`w-full text-center md:text-right uppercase font-sans font-bold text-2xl mt-0`};
      letter-spacing: 2px;
    }

    .address {
      ${tw`w-full md:w-4/5 font-serif text-xl text-body mb-0 leading-normal`};
    }
  }
`;

export default function Contact() {
  return (
    <ContactWrapper>
      <div className="container">
        <div className="inner-container">
          <div className="contact-details">
            <h3>Contact</h3>
            <p class="contact-description">
              I&apos;m always interested in discussing programming or non-profit
              projects over a cup of coffee. Hit me up.
            </p>

            <p className="contact-email">eric@mlemedia.com</p>
          </div>

          <div className="follow-me">
            <h3>Follow</h3>
            <div className="line" />
            <div className="social">
              <UserLinks size="45" config={config} color="#555" />
            </div>
          </div>

          <div className="location">
            <h3>Location</h3>
            <p className="address">
              1032 Madison Ave
              <br />
              Suite 107,
              <br />
              Covington, KY 41011
            </p>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}
