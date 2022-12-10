import React from 'react';
import { StyledBurger } from './Burger.styled';
import { bool, func } from 'prop-types';

const Burger = ({open, setOpen}) => {
  const isExpanded = open ? true : false
  return (
    <StyledBurger style={{width: "7em"}} open={open} onClick={() => setOpen(!open)} aria-label="Toggle Sidebar" aria-expanded={isExpanded}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;