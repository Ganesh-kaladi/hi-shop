import styled from "styled-components";
import { NavLink } from "react-router-dom";

const UserNavigate = styled.div`
  padding: 1.5rem;
  border: 1px solid #cecacaa4;
  background-color: #f0f0f076;
  height: 520px;
`;

const UserNavigateContainer = styled.div``;

const H3 = styled.h3`
  font-weight: lighter;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
`;

const UserNavigateBlock = styled.div`
  /* padding: 0.8rem; */
`;

const H5 = styled.h5`
  font-weight: lighter;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
  margin-bottom: 24px;
  margin-left: 8px;
`;

const ListItem = styled.li`
  background-color: #cff0d1;
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 6px 8px;
  border-left: 4px solid #5c858b;
  cursor: pointer;

  &:hover {
    background-color: #a7c4a9;
  }
`;

const Anchor = styled(NavLink)`
  color: #2e2d2d;
  text-decoration: none;
  font-size: 0.9rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  &:active {
    color: #25678d;
  }
`;

const myAcc = [
  { id: 1001, path: "orders", link: "Orders" },
  { id: 1002, path: "rewards", link: "Rewards" },
  { id: 1003, path: "invite-friend", link: "Invite Friend" },
  { id: 1004, path: "custmorecare", link: "Custmore Care" },
];

const aboutUser = [
  { id: 1005, path: "user-details", link: "user details" },
  { id: 1006, path: "update-user-details", link: "Update User Details" },
  { id: 1007, path: "reset-password", link: "Reset Password" },
  { id: 1008, path: "add-update-address", link: "Add/Update Address" },
  { id: 1009, path: "payments", link: "payments" },
];

function UserNav() {
  return (
    <UserNavigate>
      <UserNavigateContainer>
        {/* <H3>My account</H3> */}
        <UserNavigateBlock>
          <H5>About Shopping</H5>
          <UserLinks links={myAcc} />
        </UserNavigateBlock>
        <UserNavigateBlock>
          <H5>About User</H5>
          <UserLinks links={aboutUser} />
        </UserNavigateBlock>
      </UserNavigateContainer>
    </UserNavigate>
  );
}

function UserLinks({ links }) {
  return (
    <List>
      {links?.map((el) => (
        <ListItem key={el.id}>
          <Anchor to={el.path}>{el.link}</Anchor>
        </ListItem>
      ))}
    </List>
  );
}

export default UserNav;
