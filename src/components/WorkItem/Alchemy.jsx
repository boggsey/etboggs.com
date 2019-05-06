import React, { Component } from "react";
import WorkItemPicture from "../../images/avfti-strength.jpg";
import "./WorkItem.scss";

const sectionStyle = {
  backgroundImage: `url(${WorkItemPicture})`
};

class Alchemy extends Component {
  render() {
    const { action } = this.props;
    return (
      <section className="work-item-individual alchemy">
        <div className="container">
          <div className="work-item-summary">
            <h3>Alchemy</h3>
            <div className="line" />
            <p>
              Reinventing the way that P&G brands connect with and deliver value
              to consumers.
            </p>
          </div>

          <div className="work-item-explanation">
            <h3>Web</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>

            <h3>Mobile</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>

            <h3>Tech</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="work-item-image" style={sectionStyle} />
        </div>
      </section>
    );
  }
}

export default Alchemy;