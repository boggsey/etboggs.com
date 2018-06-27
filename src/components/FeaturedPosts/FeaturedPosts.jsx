import React, { Component } from "react";
import "./FeaturedPosts.scss";

class FeaturedPosts extends Component {
  render() {
    return (
      <section id="featured-posts">
        <div className="container">
          <div className="writing-list">
            <h2 className="section-header">Writing</h2>
          </div>
          <article>
            <h3>Before you start a nonprofit</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat risus ac quam feugiat accumsan. Donec rhoncus venenatis congue. Nunc sapien felis, luctus ornare porttitor et, congue viverra tellus. Cras ut erat arcu. Nam varius commodo enim, id vehicula lectus fermentum nec. Aenean ac dolor mauris. Praesent eget velit id nunc lobortis gravida non sed nibh. Donec eget sollicitudin odio, elementum faucibus elit. Suspendisse varius ultrices dapibus. Cras suscipit porta risus, a porta libero vulputate a. Etiam scelerisque hendrerit feugiat. In dignissim augue massa. Sed rutrum arcu sollicitudin pharetra consequat. Phasellus tempus id nisi quis facilisis. Duis fringilla libero et lorem placerat cursus.</p>
            <p>Praesent luctus sapien leo. Maecenas mi nisi, rhoncus a ex in, elementum feugiat risus. Vivamus sed sapien mauris. Vestibulum imperdiet massa libero, vel blandit enim vulputate eu. Pellentesque pulvinar efficitur dolor. Nunc cursus purus orci, a porttitor elit interdum in. Morbi eu tellus ante.</p>
          </article>
        </div>
      </section>
    );
  }
}

export default FeaturedPosts;