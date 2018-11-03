import React, { Component } from "react";
import {FaLinkedinSquare, FaTwitter, FaGithub} from 'react-icons/fa';
import "./UserLinks.scss";

class UserLinks extends Component {
  render() {
    return (
      <div>
        <a href="https://twitter.com/etboggs"><FaTwitter size={this.props.size} /></a>
        <a href="https://www.linkedin.com/in/etboggs/"><FaLinkedinSquare size={this.props.size} /></a>
        <a href="https://github.com/boggsey"><FaGithub size={this.props.size} /></a>
      </div>
    );
  }
}

export default UserLinks;
