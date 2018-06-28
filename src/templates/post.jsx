import React from "react";
import Helmet from "react-helmet";
import UserLinks from "../components/UserLinks/UserLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.scss";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div id="post">
          <div className="container">
            <article>
              <h1 className="section-header">{post.title}</h1>
              <div className="author">
                <img src="http://placekitten.com/100/100" alt="" />
                <div className="author-summary">
                  <p className="by-line">by Eric Boggs</p>
                  <UserLinks />
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </article>
          </div>      
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`;
