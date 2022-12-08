import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({open}) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        Sign Out
      </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;