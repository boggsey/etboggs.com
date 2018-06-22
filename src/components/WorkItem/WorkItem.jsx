import React, { Component } from "react";
import WorkItemPicture from "./avfti-strength.jpg";
import "./WorkItem.scss";

const sectionStyle = {
  backgroundImage: `url(${WorkItemPicture})`
};

class WorkItem extends Component {


  render() {
    return (
      <section className="work-item-individual" >
        <div className="container">  
          <div className="work-item-image" style={sectionStyle} />
      
          <div className="work-item-summary">
            <h3>A Voice for the Innocent</h3>
            <div className="line" />
            <p>A Voice for the Innocent is a non-profit community dedicated to the support of those affected by rape and sexual abuse. We are a safe and compassionate space to come forward about your story and we use music and technology to provide access to long term resources.</p>
          </div>
          
          <div className="work-item-explanation">
            <a onClick={this.props.handleCloseModal} className="return-to-work">Return to Work</a>
            
            <h3>Co-Founder</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>

            <h3>Technology</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>

            <h3>Strategy</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>

          </div>
        </div>
      </section>
    );
  }
}

export default WorkItem;