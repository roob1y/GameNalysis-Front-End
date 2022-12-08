import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({open}) => {
  const isHidden = open ? true : false;
  return (
    <StyledMenu open={open} aria-hidden={!isHidden}>
      <a href="/">
        <span aria-hidden="true">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        Sign Out
      </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;