import React, { Component } from "react";
import MapContainer from '../MapContainer/MapContainer'
import UserLinks from "../UserLinks/UserLinks";
import "./Contact.scss";

class Contact extends Component {


  render() {
    console.log('props', this.props);
    const { config } = this.props;
    return (
      <section id="contact">
        <div id="map" className="contact-map">
          <MapContainer />
        </div>
        <div className="contact-details">
          <h3 className="section-header">Let's Talk</h3>
          <p>I'm currently employed by Fusion Alliance in Blue Ash, OH. You can find me at an AVFTI space in Covington or Cincinnati, Bow Tie or Coffee Emporium.</p>
          <div className="line" />
          <div className="social">
            <UserLinks size="25" />
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;




