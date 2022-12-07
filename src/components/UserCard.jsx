const UserCard = ({ user }) => {
  console.log("user: ", user);
  const altText = `profile of ${user.username}`;
  return (
    <div>
      <section
        style={{
          display: "flex",
          backgroundColor: "black",
          width: "20vh",
          height: "20vh",
          border: "1px black solid",
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
      <section>
        <p>{user.username}</p>
        <p>{user.name}</p>
      </section>
    </div>
  );
};

export default UserCard;
