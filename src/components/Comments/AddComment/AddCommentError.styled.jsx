import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: absolute;
  transform: translate(-50%, 0);
  left: 50;
  box-shadow: 0 0 3em 0.5em gray;
  padding : 1em;
  background-color: red;
  color:  white;
  
  // enter from
  &.fade-enter {
    opacity: 0;
  }

  // enter to
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 0.3s linear;
  }

  // exit from
  &.fade-exit {
    opacity: 1;
  }

  // exit to 
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 0.3s linear;
  }

  &.fade-exit-done {
    opacity: 0;
  }
}`