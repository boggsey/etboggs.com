import React, { Component } from "react";
import styled from "styled-components";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const UserLinksWrapper = styled.div``;

class UserLinks extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <UserLinksWrapper>
        <a href="https://twitter.com/etboggs" aria-label="Twitter">
          <FaTwitter size={size} color={color} />
        </a>
        <a href="https://www.linkedin.com/in/etboggs/" aria-label="LinkedIn">
          <FaLinkedin size={size} color={color} />
        </a>
        <a href="https://github.com/boggsey" aria-label="Github">
          <FaGithub size={size} color={color} />
        </a>
      </UserLinksWrapper>
    );
  }
}

export default UserLinks;
