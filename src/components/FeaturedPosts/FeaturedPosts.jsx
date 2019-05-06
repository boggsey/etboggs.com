import React, { Component } from "react";
import UserInfo from "../UserInfo/UserInfo";
import Disqus from "../Disqus/Disqus";
import PostTags from "../PostTags/PostTags";
import SocialLinks from "../SocialLinks/SocialLinks";
import config from "../../../data/SiteConfig";

import PostListing from "../PostListing/PostListing";
import "./FeaturedPosts.scss";

export default class FeaturedPosts extends Component {
  render() {
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <section id="featured-posts">
        <div className="container">
          <div className="writing-list">
            <h2 className="section-header">Writing</h2>
          </div>
          <article>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
            <UserInfo config={config} />

            <h3>Before you start a nonprofit</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consequat risus ac quam feugiat accumsan. Donec rhoncus venenatis
              congue. Nunc sapien felis, luctus ornare porttitor et, congue
              viverra tellus. Cras ut erat arcu. Nam varius commodo enim, id
              vehicula lectus fermentum nec. Aenean ac dolor mauris. Praesent
              eget velit id nunc lobortis gravida non sed nibh. Donec eget
              sollicitudin odio, elementum faucibus elit. Suspendisse varius
              ultrices dapibus. Cras suscipit porta risus, a porta libero
              vulputate a. Etiam scelerisque hendrerit feugiat. In dignissim
              augue massa. Sed rutrum arcu sollicitudin pharetra consequat.
              Phasellus tempus id nisi quis facilisis. Duis fringilla libero et
              lorem placerat cursus.
            </p>
            <p>
              Praesent luctus sapien leo. Maecenas mi nisi, rhoncus a ex in,
              elementum feugiat risus. Vivamus sed sapien mauris. Vestibulum
              imperdiet massa libero, vel blandit enim vulputate eu.
              Pellentesque pulvinar efficitur dolor. Nunc cursus purus orci, a
              porttitor elit interdum in. Morbi eu tellus ante.
            </p>
          </article>
        </div>

        <PostListing />
      </section>
    );
  }
}
