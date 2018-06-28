import React from "react";
import Helmet from "react-helmet";
import WorkItem from "../components/WorkItem/WorkItem";
import config from "../../data/SiteConfig";

class WorkFusion extends React.Component {
  render() {
    return (
      <div className="Work-container">
        <Helmet />
        <WorkItem />
      </div>
    );
  }
}

export default WorkFusion;