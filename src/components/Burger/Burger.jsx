import React from 'react';
import { StyledBurger } from './Burger.styled';
import { bool, func } from 'prop-types';

const Burger = ({open, setOpen}) => {
  const isExpanded = open ? true : false
  return (
    <StyledBurger aria-label="Toggle Sidebar" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)}>
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