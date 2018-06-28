import React from "react";
import Link from "gatsby-link";
import "./PostListing.scss";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div id="writing">
        <div className="container">
          <div className="writing-list">
            <h2 className="section-header">Writing</h2>
          </div>
          <article>
            {/* Your post list here. */
            postList.map(post => (
              <div>
              <Link key="" to={post.path} key={post.title}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.excerpt}</p>
              <Link to={post.path} key="1">
                <p>Read more</p>
              </Link>
              </div>
            ))}
          </article>
        </div>
      </div>
    );
  }
}

export default PostListing;
