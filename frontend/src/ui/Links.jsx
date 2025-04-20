import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Links = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  padding: 6px 20px;

  &:hover {
    color: var(--color-green-500);
  }
`;

export default Links;
