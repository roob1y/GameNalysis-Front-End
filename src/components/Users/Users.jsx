import { useState, useEffect, useContext } from "react";
import { getUsers } from "../../utils/api";
import UserCard from "./UserCard";
import { UserContext } from "../../contexts/User";
import PageNotFound from "../Error/PageNotFound";
import { theme } from "../../theme";
import styled from "styled-components";

const Users = () => {
  const { setLoggedUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setErr(null);
    setIsLoading(true);
    getUsers()
      .then(({ users }) => {
        setIsLoading(false);
        setUsers(users);
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);

  const CardContainer = styled.div`
  background-color: ${theme.primaryPop};
  cursor: pointer;
  border-radius: 10px;
  padding: 0.5em;
  margin: 0 0.5em;
  outline: ${theme.outline};

  :hover {
    box-shadow: 0 0 12px 7px ${({theme}) => theme.primaryHover};
  }
  `


  if (err) {
    return <PageNotFound status={err.response.status} />;
  }
  if (!isLoading) {
    return (
      <>
        <h1>Welcome!</h1>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {users.map((user) => (
            <CardContainer
              onClick={() => setLoggedUser(user)}
              key={user.name}
            >
              <UserCard user={user} />
            </CardContainer>
          ))}
        </section>
      </>
    );
  } else {
    <p>is loading...</p>;
  }
};

export default Users;
