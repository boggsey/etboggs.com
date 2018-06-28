import React, { Component } from "react";
import ReactModal from 'react-modal';
import LogoAvfti from "./logo-avfti.svg";
import LogoFusion from "./logo-fusion.svg";
import LogoGdi from "./logo-gdi.svg";
import WorkItem from "../WorkItem/WorkItem";
import "./Work.scss";

const work = [
  {
    name: 'Fusion Alliance',
    image: LogoFusion,
    position: 'Web Developer'
  },
  {
    name: 'A Voice for the Innocent',
    image: LogoAvfti,
    position: 'Vice President'
  },
  {
    name: 'Girl Develop It',
    image: LogoGdi,
    position: 'Instructor'
  }
];

const customStyles = {
  content: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    padding: '0',
  }
};

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
    window.location.hash = "#work";
  }

  render() {

    const workItems = work.map((work,index) =>
      (
        <div key={index.toString()} className="work-item-overview" role="button" onClick={this.handleOpenModal}>
          {<img src={work.image} className="icon" alt="" />}
          <h3>{work.name}</h3>
          <p className="position">{work.position}</p>
          <div className="line" />
        </div>
      )
    );

    return (
      <section id="work">
        <h2>Work</h2>
        <div className="container">
          {workItems}
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.handleCloseModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <WorkItem handleCloseModal={this.handleCloseModal} />
        </ReactModal>
      </section>
    );
  }
}

export default Work;