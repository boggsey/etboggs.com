import React, { Component } from "react";
import ReactModal from 'react-modal';
import LogoAvfti from "./logo-avfti.svg";
import LogoFusion from "./logo-fusion.svg";
import LogoGdi from "./logo-gdi.svg";
import WorkItem from "../WorkItem/WorkItem";
import "./Work.scss";

const customStyles = {
  content : {
    top                   : '0',
    left                  : '0',
    right                 : '0',
    bottom                : '0',
    padding               : '0',
  }
};

class Work extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
    window.location.hash = "#work";
  }

  render() {
    return (
      <section id="work">
        <h2>Work</h2>
        <div className="container">  
          <div className="work-item-overview" role="button" onClick={this.handleOpenModal}>
            <img src={LogoFusion} className="icon" alt=""/>
            <h3>Fusion Alliance</h3>
            <p className="position">Web Developer</p>
            <div className="line" />
          </div>

          <div className="work-item-overview" >
            <img src={LogoAvfti} className="icon" alt=""/>
            <h3>A Voice for the Innocent</h3>
            <p className="position">Vice President</p>
            <div className="line" />
          </div>
          
          <div className="work-item-overview" >
            <img src={LogoGdi} className="icon" alt=""/>
            <h3>Girl Develop It</h3>
            <p className="position">Instructor</p>
            <div className="line" />
          </div>
        </div>

        <ReactModal 
          isOpen={this.state.showModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.handleCloseModal}
          style={customStyles}
          appElement={document.getElementById('app')}
        >
          <WorkItem handleCloseModal={this.handleCloseModal} />
        </ReactModal>
      </section>
    );
  }
}

export default Work;