import React, { Component } from "react";
import WorkItemIndividual from "./WorkItemStyles";

class Gdi extends Component {
  render() {
    return (
      <WorkItemIndividual className="work-item-individual gdi">
        <div className="work-item-summary">
          <h3>Girl Develop It</h3>
          <p className="job-title">Instructor</p>
          <div className="line" />
          <p>
            Girl Develop It is a nonprofit organization that exists to provide
            affordable and judgment-free opportunities for women interested in
            learning web and software development. As a long time instructor for
            Girl Develop It Cincinnati, I have taught nearly 150 students about
            the principles of web development.
          </p>
        </div>
      </WorkItemIndividual>
    );
  }
}

export default Gdi;
