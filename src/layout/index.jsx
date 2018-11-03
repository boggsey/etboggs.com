import React from "react";
import Helmet from "react-helmet";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import config from "../../data/SiteConfig";
import "./index.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header />
        {children}
        <Contact config={config} />
        <Footer />
      </div>
    );
  }
}
