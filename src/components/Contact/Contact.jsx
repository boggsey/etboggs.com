import React, { Component } from "react";
import MapContainer from '../MapContainer/MapContainer'
import config from "../../../data/SiteConfig";
import UserLinks from "../UserLinks/UserLinks";

import "./Contact.scss";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div id="map" className="contact-map">
          <MapContainer />
        </div>
        <div className="contact-details">
          <h3 className="section-header">Let's Talk</h3>
          <p>I'm currently employed by Alchemy in Cincinnati, Ohio. You can find me at the Alchemy offices, an AVFTI space in Covington or Cincinnati or Coffee Emporium.</p>
          <div className="line" />
          <div className="social">
            <UserLinks size="25" config={config} />
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;




