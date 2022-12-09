import { useState, useRef } from "react";
import styled from "styled-components";
import { Burger, Menu } from "../components";
import { useOnClickOutside } from "../hooks";

const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 2%;
height: 4em;
`;

const HeaderTitle = styled.h1`

`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <HeaderContainer ref={node}>
      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
      <Menu open={open} setOpen={setOpen} id={menuId} />
      <HeaderTitle>GameNalysis</HeaderTitle>
      <br />
    </HeaderContainer>
  );
};

export default Header;
