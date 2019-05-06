/* global tw */
import React, { Component } from "react";
import styled from "react-emotion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const UserLinksWrapper = styled.div`
  ${tw("w-full items-center justify-center md:justify-start flex flex-wrap")};
`;

class UserLinks extends Component {
  render() {
    const { size } = this.props;
    return (
      <UserLinksWrapper>
        <a href="https://twitter.com/etboggs">
          <FaTwitter size={size} />
        </a>
        <a href="https://www.linkedin.com/in/etboggs/">
          <FaLinkedin size={size} />
        </a>
        <a href="https://github.com/boggsey">
          <FaGithub size={size} />
        </a>
      </UserLinksWrapper>
    );
  }
}

export default UserLinks;
