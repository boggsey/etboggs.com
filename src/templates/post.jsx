import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Layout from "../layout";
import UserLinks from "../components/UserLinks/UserLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const PostWrapper = styled.div`
  .post-meta {
    ${tw`w-full flex flex-col justify-center`};
  }

  #post {
    ${tw`w-full flex flex-col justify-center items-center min-h-screen`};

    .container {
      ${tw`w-5/6 md:w-1/2 flex flex-col md:flex-row justify-between items-stretch`};
      padding: 100px 0;
    }

    .writing-list {
      width: 20%;
      text-align: left;
      padding-right: 50px;

      @media screen and (max-width: $breakpoint-mobile-max) {
        width: 100%;
      }

      .section-header {
        @media screen and (max-width: $breakpoint-mobile-max) {
          text-align: center;
        }
      }

      a {
        color: black;
        display: inline-block;
        margin-right: 5px;
      }
    }

    article {
      width: 100%;
      font-size: 20px;
      line-height: 30px;

      .author {
        display: flex;
        flex-flow: row wrap;
        align-items: center;

        .by-line {
          margin: 0;
          font: 600 17px/18px "gentium book basic";
        }

        img {
          border-radius: 50%;
        }

        .author-summary {
          padding-left: 20px;

          a {
            color: black;
            margin-right: 5px;
          }
        }
      }

      h1 {
        text-align: center;
        font-size: 45px;
        line-height: 55px;
      }

      h2 {
        text-align: center;
        padding: 20px 0;
      }

      @media screen and (max-width: $breakpoint-mobile-max) {
        width: 100%;
      }
    }
  }
`;

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <PostWrapper>
            <div className="container">
              <article>
                <h1 className="section-header">{post.title}</h1>
                <div className="author">
                  <img src="http://placekitten.com/100/100" alt="" />
                  <div className="author-summary">
                    <p className="by-line">by Eric Boggs</p>
                    <UserLinks config={config} />
                  </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              </article>
            </div>
          </PostWrapper>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
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
        date
      }
    }
  }
`;
