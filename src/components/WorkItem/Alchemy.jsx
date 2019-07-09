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
            At Alchemy, I work to create excellent user experiences on websites
            and mobile applications for Procter and Gamble's Home Care category.
            I work with React and React Native on a day-to-day basis and spend
            the rest of my time working to advance our Front End practice.
          </p>
        </div>
      </WorkItemIndividual>
    );
  }
}

export default Alchemy;
