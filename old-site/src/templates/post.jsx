import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Layout from "../layout";
import UserLinks from "../components/UserLinks/UserLinks";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import config from "../../data/SiteConfig";

const PostWrapper = styled.div`
  .post-meta {
    ${tw`w-full flex flex-col justify-center`};
  }

  ${tw`w-full flex flex-col justify-center items-center min-h-screen`};

  .container {
    ${tw`w-5/6 md:w-1/2 flex flex-col md:flex-row justify-between items-stretch`};
    padding: 100px 0;
  }

  .writing-list {
    width: 20%;
    text-align: left;
    padding-right: 50px;

    .post-header {
      ${tw`font-sans text-center md:text-left text-white`};
    }

    a {
      color: black;
      display: inline-block;
      margin-right: 5px;
    }
  }

  article {
    ${tw`w-full text-xl leading-normal`}

    .author {
      ${tw`flex items-center pb-6`}

      .by-line {
        ${tw`m-0 font-sans font-bold text-base`};
      }

      img {
        ${tw`w-32`}
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
      ${tw`text-center text-5xl leading-tight font-sans`};
    }

    h2 {
      ${tw`text-center pt-8 pb-8 font-sans`};
    }

    h3 {
      ${tw`text-left pt-4 pb-0 m-0 font-sans`};
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
          <Header />
          <PostWrapper>
            <div className="container">
              <article>
                <h1 className="post-header">{post.title}</h1>
                <div className="author">
                  <img
                    src="https://res.cloudinary.com/ericboggs/image/upload/v1563397159/author_gtznmy.jpg"
                    alt="Picture of Eric Boggs"
                  />
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
