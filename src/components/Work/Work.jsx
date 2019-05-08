/* global tw */
import React, { Component } from "react";
import styled from "react-emotion";
import Alchemy from "../WorkItem/Alchemy";
import Avfti from "../WorkItem/Avfti";
import Gdi from "../WorkItem/Gdi";

const WorkWrapper = styled.section`
  ${tw("w-full flex flex-col items-center min-h-screen justify-center")};
  background: #2d2d34;
`;

class Work extends Component {
  render() {
    return (
      <WorkWrapper id="work">
        <Alchemy />
        <Avfti />
        <Gdi />
      </WorkWrapper>
    );
  }
}

export default Work;
