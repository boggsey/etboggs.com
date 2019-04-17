import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import * as PropTypes from "prop-types";
import WorkItem from "../WorkItem/WorkItem";
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
      name: "Eric"
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({ name: "Kelly" });
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
        <WorkItem />
      </section>
    );
  }
}

export default Work;
