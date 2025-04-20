import styled from "styled-components";
import Style from "./UserNav.module.css";
import { NavLink } from "react-router-dom";

const List = styled.ul`
  list-style: none;
  margin-left: 16px;
  padding: 4px 12px;
`;

const ListItem = styled.li`
  margin-bottom: 4px;
  padding: 2px 12px;
`;

const Anchor = styled(NavLink)`
  color: #2e2d2d;
  text-decoration: none;
  font-size: 0.9rem;

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
    <div className={Style.user__nav}>
      <h3>My account</h3>
      <div>
        <h5>about shopping</h5>
        <UserLinks links={myAcc} />
      </div>
      <div>
        <h5>About User</h5>
        <UserLinks links={aboutUser} />
      </div>
    </div>
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
