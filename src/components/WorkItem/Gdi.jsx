import React, { Component } from "react";
import WorkItemPicture from "../../images/avfti-strength.jpg";
import "./WorkItem.scss";

const sectionStyle = {
  backgroundImage: `url(${WorkItemPicture})`
};

class Gdi extends Component {
  render() {
    return (
      <section className="work-item-individual gdi">
        <div className="container">
          <div className="work-item-explanation">
            <h3>Instructor</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>

            <h3>Curriculum</h3>
            <p>
              Development, maintenance and deployment of the organization’s
              website and storytelling platform with an average of 18,000
              monthly visitors.
            </p>

            <h3>Practical Experience</h3>
            <p>
              Responsible for strategies and partnerships that further the
              mission of a national anti-sexual violence non-profit, including
              outreach and fundraising efforts spanning 30 states
            </p>
          </div>

          <div className="work-item-image" style={sectionStyle} />

          <div className="work-item-summary">
            <h3>Girl Develop It</h3>
            <div className="line" />
            <p>
              A Voice for the Innocent is a non-profit community dedicated to
              the support of those affected by rape and sexual abuse. We are a
              safe and compassionate space to come forward about your story and
              we use music and technology to provide access to long term
              resources.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Gdi;
