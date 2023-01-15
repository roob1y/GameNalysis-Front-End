import styled from "styled-components";
import GameNalysisLogo from "../../assets/GameNalysisLogoWhite.png";

export const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  height: 7em;
  border-bottom: 1px solid ${({ theme }) => theme.primaryNeutral};
  background-color: teal;
`;
export const HeaderLogo = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 20em;
  background-image: url(${GameNalysisLogo});
  background-size: contain;
  background-repeat: no-repeat;

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
  outline: ${({theme}) => theme.outline};
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
