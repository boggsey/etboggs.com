import React, { Component } from "react";
import WorkItemIndividual from "./WorkItemStyles";

class Alchemy extends Component {
  render() {
    return (
      <WorkItemIndividual className="work-item-individual alchemy">
        <div className="work-item-summary">
          <h3>Alchemy</h3>
          <p className="job-title">Software Engineer</p>
          <div className="line" />
          <p>
            Alchemy is reinventing the way that P&amp;G brands connect with and
            deliver value to consumers by building technologies and business
            models that give our partners an unfair competitive advantage in the
            marketplace. My role is to create excellent user experiences on
            websites and mobile applications using the latest technologies with
            a high level of focus on performance, security and maintainability.
          </p>
        </div>
      </WorkItemIndividual>
    );
  }
}

export default Alchemy;
