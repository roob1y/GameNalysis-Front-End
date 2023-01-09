import { theme } from "../../../theme";

const UserCard = ({ user }) => {
  const altText = `profile of ${user.username}`;

  return (
    <div>
      <section
        style={{
          display: "flex",
          width: "20vh",
          height: "20vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: `url(${user.avatar_url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "white",
            backgroundSize: "contain",
            width: "100%",
            height: "100%",
            border: "1px black solid",
            borderRadius: "50%",
            padding: "15px",
            backgroundOrigin: "content-box",
          }}
          alt={altText}
        />
      </section>
      <section
        style={{ backgroundColor: theme.primaryLight, margin: "5px", padding: "1px" }}
      >
        <p>{user.username}</p>
        <p>{user.name}</p>
      </section>
    </div>
  );
};

export default UserCard;
