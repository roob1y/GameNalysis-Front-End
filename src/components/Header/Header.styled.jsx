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

export const LogoContainer = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 20em;
  justify-content: center;
`;

export const Logo = styled.div`
  display: flex;
  cursor: pointer;
  height: 100%;
  width: 100%;
  background-image: url(${GameNalysisLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  &:active {
    background-color: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 12em;
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
  outline: ${({ theme }) => theme.outline};
  background-color: white;
  margin 0 auto;

  &:hover {
    background: black;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 4em;
    height: 4em;
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

export const ProfileUserName = styled.p`
  color: white;
  margin: 0;
  padding-top: 0.2em;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const Profile = styled.div``;
