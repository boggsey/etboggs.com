import React, { Component } from "react";
import {
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";
import "./About.scss";

class About extends Component {
  render() {
    const { mobile } = this.props;
    const iconColor = '#333333';
    const iconBg = 'fill:#ffffff';
    const iconSize = mobile ? 25 : 30;
  
    return (
      <section id="about">
        <div className="container">  
          <div className="full-description">
            <h2>About</h2>
            <p>I've always liked to build things. So, it's no surprise that I became fiercely interested in teaching myself how to make websites as a kid. Around 2000, I poured through the htmlgoodies website and built the worst looking site for the metal band that I was in at the time. Unfortunately, the rock star life didn't quite pan out so I joined the Marine Corps on a whim. After being honorably discharged as a Corporal in 2007, I quickly re-discovered a nearly forgotten passion for web development. Since then, I've committed to a life-long pursuit of learning, sharing and crafting of technology. I spend half of my time building it for profit (P&G, Mars, ConAgra, Ford and Eli Lilly) and the other half focused on technology that improves people's lives. In 2012, I helped co-create a nonprofit organization that helps those affected by sexual violence. I've traveled the entire United States to share a message of hope and healing through compassion, discussion, empathy and understanding. You can also find me teaching classes for Girl Develop It Cincinnati.</p>
            <div className="social">
              <TwitterIcon size={iconSize} logoFillColor={iconColor} />
              <LinkedinIcon size={iconSize} logoFillColor={iconColor} />
              <EmailIcon size={iconSize} logoFillColor={iconColor} />
            </div>
          </div>
          
          <div className="about-image">
            <img src="http://placehold.it/400x400" alt=""/>
          </div>
          
        </div>
      </section>
    );
  }
}

export default About;