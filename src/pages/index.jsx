import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import PostListing from "../components/PostListing/PostListing";
import Work from "../components/Work/Work";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet />
        <SEO postEdges={postEdges} />
        <Hero />
        <About />
        <Work />
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 400)
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;