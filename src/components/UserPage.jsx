import { useState, useEffect, useContext } from "react";
import { getUsers } from "../utils/api";
import UserCard from "../components/UserCard";
import { UserContext } from "../contexts/User";

const UserPage = () => {
  const {setUser} = useContext(UserContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);

  return (
    <>
      <h1>Welcome!</h1>
      <section
        style={{
          display: "inline-flex",
          justifyContent: "space-around",
          width: "85%",
        }}
      >
        {users.map((user) => (
          <div
            onClick={() => setUser(user.username)}
            key={user.name}
            style={{ width: "20vh", backgroundColor: "gray" }}
          >
            <UserCard user={user}></UserCard>
          </div>
        ))}
      </section>
    </>
  );
};

export default UserPage;
