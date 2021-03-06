import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link } from "gatsby";

const WritingWrapper = styled.section`
  ${tw`w-full min-h-screen justify-center items-center flex flex-col pt-8 pb-8`};

  .container {
    ${tw`w-5/6 md:w-3/4 justify-start items-stretch flex flex-col md:flex-row`};
  }

  .writing-list {
    ${tw`w-full md:w-1/5 text-left`};

    .section-header {
      ${tw`text-center mt-0 uppercase font-sans font-bold`};
      font: 700 24px/28px "Alegreya Sans";
    }
  }

  article {
    ${tw`w-full md:w-2/3 text-xl leading-normal`};
    padding-left: 30px;
    padding-right: 30px;

    h1 {
      ${tw`leading-loose mt-0 font-sans font-bold`};
      font: 700 24px/28px "Alegreya Sans";
    }

    a {
      ${tw`w-full text-black no-underline`};
    }
  }
`;

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <WritingWrapper id="writing">
        <div className="container">
          <div className="writing-list">
            <h2 className="section-header">Writing</h2>
          </div>
          <article>
            {/* Your post list here. */
            postList.map((post, index) => (
              <div key={index.toString()}>
                <Link to={post.path} key={post.title}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.excerpt}</p>
                <Link to={post.path} key={post.title}>
                  <p className="read-more">Read more</p>
                </Link>
              </div>
            ))}
          </article>
        </div>
      </WritingWrapper>
    );
  }
}

export default PostListing;
