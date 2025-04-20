import styled from "styled-components";
import UserNav from "../components/navbar/UserNav";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  margin: var(--container-margin);
  width: var(--container-width);
  margin-top: 100px;
`;

const Grid = styled.div`
  margin-top: 38px;
  display: grid;
  grid-template-columns: 24% 76%;
  gap: 20px;
`;

function User() {
  return (
    <Container>
      <Grid>
        <div>
          <UserNav />
        </div>
        <div>
          <Outlet />
        </div>
      </Grid>
    </Container>
  );
}

export default User;
