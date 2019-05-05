import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import * as PropTypes from "prop-types";
import Alchemy from "../WorkItem/Alchemy";
import Avfti from "../WorkItem/Avfti";
import Gdi from "../WorkItem/Gdi";
import "./Work.scss";

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    padding: "0"
  }
};

let work;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: "default"
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(itemName) {
    this.setState({ work: itemName });
    this.renderWorkItem();
  }

  renderWorkItem() {
    if (this.state.work === "Alchemy") {
      return <Alchemy action={this.handleButtonClick} />;
    } else if (this.state.work === "A Voice for the Innocent") {
      return <Avfti action={this.handleButtonClick} />;
    } else if (this.state.work === "Girl Develop It") {
      return <Gdi action={this.handleButtonClick} />;
    }
    return null;
  }

  render() {
    return (
      <section id="work">
        <div className="container">
          <StaticQuery
            query={graphql`
              query WorkQuery {
                allWorkJson {
                  edges {
                    node {
                      id
                      image
                      icon
                      name
                      position
                      mission
                      summary {
                        text
                      }
                    }
                  }
                }
              }
            `}
            render={data => {
              work = data.allWorkJson.edges.map(e => e.node);
              return work.map(item => (
                <React.Fragment>
                  <div
                    key={item.id}
                    className="work-item-overview"
                    role="button"
                    onClick={() => {
                      this.handleButtonClick(item.name);
                    }}
                  >
                    <h3>{item.name}</h3>
                    <p className="position">{item.position}</p>
                    <div className="line" />
                  </div>
                </React.Fragment>
              ));
            }}
          />
        </div>

        {this.renderWorkItem()}
      </section>
    );
  }
}

export default Work;
