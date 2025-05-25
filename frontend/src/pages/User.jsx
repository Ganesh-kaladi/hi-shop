import styled from "styled-components";
import UserNav from "../components/navbar/UserNav";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  margin-top: 56px;

  @media (max-width: 486px) {
    margin-top: 40px;
    width: 90%;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    margin-top: 40px;
    width: 90%;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 40px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    width: 90%;
    margin-top: 48px;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 90%;
    margin-top: 52px;
  }
`;

const Grid = styled.div`
  margin-top: 38px;
  display: grid;
  grid-template-columns: 24% 76%;
  gap: 20px;

  @media (max-width: 486px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    grid-template-columns: 32% 68%;
  }
`;

function User() {
  return (
    <Container>
      <Grid>
        <UserNav />
        <div>
          <Outlet />
        </div>
      </Grid>
    </Container>
  );
}

export default User;
