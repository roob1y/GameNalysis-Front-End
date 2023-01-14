import { theme } from "../../../theme";
import styled from "styled-components";

const ProfileImg = styled.div`
  background: url(${({ user }) => user.avatar_url});
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  background-size: contain;
  width: 100%;
  height: 100%;
  border: 3px ${theme.primaryNeutral} solid;
  border-radius: 50%;
  padding: 15px;
  background-origin: content-box;
`;

const UserCard = ({ user }) => {
  const altText = `profile of ${user.username}`;
  return (
    <>
      <section
        style={{
          display: "flex",
          width: "20vh",
          height: "20vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProfileImg user={user} alt={altText} />
      </section>
      <section
        style={{
          backgroundColor: theme.primaryLight,
          margin: "5px",
          padding: "1px",
        }}
      >
        <p>{user.username}</p>
        <p>{user.name}</p>
      </section>
    </>
  );
};

export default UserCard;
