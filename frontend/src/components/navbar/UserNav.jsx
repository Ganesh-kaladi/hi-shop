import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const UserNavigate = styled.div`
  padding: 1.5rem;
  border: 1px solid #cecacaa4;
  background-color: #f0f0f076;
  height: 520px;

  @media (max-width: 486px) {
    padding: 0;
    border: none;
    background-color: unset;
    height: 0;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    padding: 0;
    border: none;
    background-color: unset;
    height: 0;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    padding: 0;
    border: none;
    background-color: unset;
    height: 0;
  }
`;

const UserNavigateContainer = styled.div`
  @media (max-width: 486px) {
    position: fixed;
    top: 10%;
    left: 0;
    width: 250px;
    height: 80%;
    background-color: #ffffff;
    border-right: 1px solid #ddd;
    box-shadow: 0px 0 5px 2px rgba(65, 62, 62, 0.651);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 10;
    padding: 2rem;

    ${(props) =>
      props.isopen &&
      css`
        transform: translateX(0);
      `}
  }

  @media (min-width: 487px) and (max-width: 576px) {
    position: fixed;
    top: 10%;
    left: 0;
    width: 250px;
    height: 80%;
    background-color: #ffffff;
    border-right: 1px solid #ddd;
    box-shadow: 0px 0 5px 2px rgba(65, 62, 62, 0.651);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 10;
    padding: 2rem;

    ${(props) =>
      props.isopen &&
      css`
        transform: translateX(0);
      `}
  }

  @media (min-width: 577px) and (max-width: 768px) {
    position: fixed;
    top: 10%;
    left: 0;
    width: 250px;
    height: 80%;
    background-color: #ffffff;
    border-right: 1px solid #ddd;
    box-shadow: 0px 0 5px 2px rgba(65, 62, 62, 0.651);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 10;
    padding: 2rem;

    ${(props) =>
      props.isopen &&
      css`
        transform: translateX(0);
      `}
  }
`;

// const H3 = styled.h3`
//   font-weight: lighter;
//   font-family: "Poppins", sans-serif;
//   font-weight: 500;
//   font-style: normal;
// `;

const UserNavigateBlock = styled.div`
  /* padding: 0.8rem; */
`;

const H5 = styled.h5`
  font-weight: lighter;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.1rem;
  margin-bottom: 10px;

  @media (max-width: 486px) {
    font-size: 0.8888rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.8888rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.911rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.966rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.022rem;
  }
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
  font-size: 1rem;
  font-family: "Nunito", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  &:active {
    color: #25678d;
  }

  @media (max-width: 486px) {
    font-size: 0.8188rem;
  }

  @media (min-width: 487px) and (max-width: 576px) {
    font-size: 0.8788rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 0.8911rem;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 0.9116rem;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 0.9612rem;
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 0px;
  right: -28px; /* moves it outside the sidebar */
  width: 30px;
  height: 40px;
  background-color: #fff;
  color: #2c2b2b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  font-size: 20px;
  user-select: none;
  box-shadow: 1px 1px 8px -1px rgba(59, 58, 58, 0.801);
  border-top: 1px solid #6e6b6b7a;
  border-bottom: 1px solid #6e6b6b7a;
  border-right: 1px solid #6e6b6b7a;

  @media (min-width: 769px) and (max-width: 992px) {
    display: none;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    display: none;
  }

  @media (min-width: 1201px) {
    display: none;
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
  const [open, setOpen] = useState(false);
  return (
    <UserNavigate>
      <UserNavigateContainer isopen={open}>
        {/* <H3>My account</H3> */}
        <UserNavigateBlock>
          <H5>About Shopping</H5>
          <UserLinks links={myAcc} setOpen={setOpen} />
        </UserNavigateBlock>
        <UserNavigateBlock>
          <H5>About User</H5>
          <UserLinks links={aboutUser} setOpen={setOpen} />
        </UserNavigateBlock>
        <Icon onClick={() => setOpen((cur) => !cur)}>
          {open ? <FaChevronLeft /> : <FaChevronRight />}
        </Icon>
      </UserNavigateContainer>
    </UserNavigate>
  );
}

function UserLinks({ links, setOpen }) {
  return (
    <List onClick={() => setOpen(false)}>
      {links?.map((el) => (
        <ListItem key={el.id}>
          <Anchor to={el.path}>{el.link}</Anchor>
        </ListItem>
      ))}
    </List>
  );
}

export default UserNav;
