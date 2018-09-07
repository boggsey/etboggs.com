import React, { Component } from "react";
import ReactModal from "react-modal";
import * as PropTypes from "prop-types";
import WorkItem from "../WorkItem/WorkItem";
import "./Work.scss";

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
  
  static propTypes = {
    work: PropTypes.shape({
      icon: PropTypes.object,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    }).isRequired,
  }

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
    const { icon, id, name, position } = this.props.work
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
        <h2 className="section-header">Work</h2>
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

export const workFragment = graphql`
  fragment Work_details on WorkJson {
    icon
    id
    name
    position
  }
`