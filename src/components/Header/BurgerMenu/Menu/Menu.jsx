import React from "react";
import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";
import linkedinIcon from "../../../../assets/linkedin-icon.png";
import githubIcon from "../../../../assets/github-icon.png";

const Menu = ({ open }) => {
  const isHidden = open ? true : false;
  return (
    <StyledMenu open={open} aria-hidden={!isHidden}>
      <a href="https://nc-reviews-games.cyclic.app/api">
        <span aria-hidden="true">🗄️</span>
        Back End Server
      </a>
      <a href="https://www.linkedin.com/in/robertjbarron">
        <img
          src={linkedinIcon}
          aria-hidden="true"
          alt="Linkedin Logo"
          style={{ width: "8%", marginRight: "8px" }}
        />
        My LinkedIn
      </a>
      <a href="https://github.com/roob1y">
        <img
          src={githubIcon}
          aria-hidden="true"
          alt="Linkedin Logo"
          style={{ width: "8%", backgroundColor: "white", marginRight: "8px" }}
        />
        My Github
      </a>
      <a href="https://docs.google.com/document/d/1cx1Q0FbcIV8kEQY6I6XIFiydRE7vBOFkXLmwZ8MoQp8/edit?usp=sharing">
        <span aria-hidden="true">📄</span>
        My CV
      </a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
