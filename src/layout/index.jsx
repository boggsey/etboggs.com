import React from "react";
import Helmet from "react-helmet";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import config from "../../data/SiteConfig";

const GlobalStyle = createGlobalStyle`

  html {
      box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
      box-sizing: inherit;
  }

  html,
  body {
      margin: 0;
      padding: 0;
      background-color: #fafafa;
      font-family: "Alegreya Sans";
      letter-spacing: .010em;
      color: #333;
  }

  h1,
  h2,
  h3,
  h4 {
      font-family: "Alegreya";
  }

  .container {
      width: 80%;
      margin: 0 auto;
  }

  .section-header {
      font: 400 30px/25px "Alegreya";
      letter-spacing: .01em;
  }
`;

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Alegreya|Alegreya+Sans:400,700"
            rel="stylesheet"
          />
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <GlobalStyle />
        {children}
        <Contact config={config} />
      </div>
    );
  }
}
