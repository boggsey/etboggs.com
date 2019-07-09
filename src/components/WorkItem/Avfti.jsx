import React, { Component } from "react";
import WorkItemIndividual from "./WorkItemStyles";

class Avfti extends Component {
  render() {
    return (
      <WorkItemIndividual className="work-item-individual avfti">
        <div className="work-item-summary">
          <h3>A Voice for the Innocent</h3>
          <p className="job-title">Co-Founder</p>
          <div className="line" />
          <p>
            In 2012, I co-founded A Voice for the Innocent wgucg is a non-profit
            community dedicated to the support of those affected by sexual
            violence. We use technology to provide access to long term
            resources. My primary focus is the development and growth of the
            storytelling and resource platforms.
          </p>
        </div>
      </WorkItemIndividual>
    );
  }
}

export default Avfti;
