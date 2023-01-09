import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  height: 7em;
  border-bottom: 1px solid ${({theme}) => theme.primaryNeutral};
  background-color: ${({theme}) => theme.primaryPop};

`;

export const HeaderTitle = styled.h1`
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  cursor: pointer;

  &:active {
    background-color: none;
  }
`;

export const NavProfile = styled.div`
  display: flex;
  justify-content: center;
  width: 5em;
  height: 5em;
  background: ${({ loggedUser }) => `url(${loggedUser.avatar_url})`};
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
  cursor: pointer;
  border-radius: 50%;
  border: 1px black solid;
  background-color: white;
  margin 0 auto;

  &:hover {
    background: black;
  }
  `;

export const ProfileSignOut = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  color: white;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

export const Profile = styled.div``;
