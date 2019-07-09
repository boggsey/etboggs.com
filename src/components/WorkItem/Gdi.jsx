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
            As a long time instructor for Girl Develop It Cincinnati, I have
            taught more than 150 students about the principles of web
            development. I primarily teach Intermediate level classes which
            focus on the real world implementation of technologies that students
            have learned.
          </p>
        </div>
      </WorkItemIndividual>
    );
  }
}

export default Gdi;
