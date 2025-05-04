import styled from "styled-components";
import UserNav from "../components/navbar/UserNav";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  margin-top: 60px;
`;

const Grid = styled.div`
  margin-top: 38px;
  display: grid;
  grid-template-columns: 24% 76%;
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

function User() {
  const { width } = useSelector((state) => state.pageWidth);
  console.log(width > 801);
  return (
    <Container>
      <Grid>
        {width > 801 && (
          // <div>
          <UserNav />
          // </div>
        )}
        <div>
          <Outlet />
        </div>
      </Grid>
    </Container>
  );
}

export default User;
