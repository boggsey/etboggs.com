import React from "react";
import Helmet from "react-helmet";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";
import config from "../../data/SiteConfig";


class Index extends React.Component {
  render() {
    return (
      <div className="index-container">
        <Helmet />
        <Hero />
        <About />
        <Work />
        <FeaturedPosts />
        <Contact config={config}/>
      </div>
    );
  }
}

export default Index;