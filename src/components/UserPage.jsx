import { useState, useEffect } from "react";
import { getUsers } from "../utils/api";
import UserCard from "../components/UserCard"


const UserPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);

  return (
    <>
      <h1>Welcome!</h1>
      <section style={{display: "inline-flex", justifyContent: "space-around", width: "100%"}}>
        {users.map((user) => (
        <div key={user.name} style={{width: "20vh", backgroundColor:"green"}}>
            <UserCard user={user}></UserCard>
          </div>
          ))}
      </section>
    </>
  );
};

export default UserPage;
