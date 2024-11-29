import Grid from "@mui/material/Grid2";
import { BoxStyle } from "./style";
import { useEffect, useState } from "react";
import api from "../../services/api";

function Users() {

  const [users, setUsers] = useState([]);

  async function getUsers() {
    const usersApi = await api.get("/users");

    setUsers(usersApi.data.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <p className="info">Usuários com desconto</p>
      {users.map((user) => (
        <BoxStyle key={user.id} sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={4}>
              <span><strong>Nome:</strong> {user.name}</span>
              <p><strong>E-mail:</strong> {user.email}</p>
              <hr></hr>
            </Grid>
          </Grid>
        </BoxStyle>
      ))}
    </>
  );
}

export default Users;
