import { useContext } from "react";
import { UserContext } from "../contexts/User";

import { useState, useRef } from "react";
import styled from "styled-components";
import { Burger, Menu } from "../components";
import { useOnClickOutside } from "../hooks";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  height: 7em;
`;

const HeaderTitle = styled.h1`
  position: relative;
  cursor: pointer;
`;

const NavProfile = styled.div`
  width: 5em;
  height: 5em;
  background: ${({loggedUser}) => `url(${loggedUser.avatar_url})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
  border-radius: 50%;
  border: 1px black solid;
  background-color: white;
  margin 0 auto;
  `;

  const Wrapper = styled.div`
 
  `;
  
  const Header = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
    
    const { loggedUser } = useContext(UserContext);
    
  useOnClickOutside(node, () => setOpen(false));

  return (
    <HeaderContainer ref={node}>
      <Burger style={{border: "1px black solid"}} open={open} setOpen={setOpen} aria-controls={menuId} />
      <Menu open={open} setOpen={setOpen} id={menuId} />
      <HeaderTitle>GameNalysis</HeaderTitle>
      {loggedUser ? (
        <Wrapper>
          <NavProfile loggedUser={loggedUser} alt="user profile" style={{}} />
            <p style={{ margin: "0", paddingTop: "0.2em" }}>{loggedUser.username}</p>
        </Wrapper>
      ) : (
        <span style={{ width: "7em" }}/>
      )}
    </HeaderContainer>
  );
};

export default Header;
