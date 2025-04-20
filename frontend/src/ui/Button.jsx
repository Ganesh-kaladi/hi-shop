import styled, { css } from "styled-components";

const Button = styled.button`
  color: black;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  box-shadow: var(--box-shadow-sm);

  ${(props) =>
    props.type === "secondary" &&
    css`
      font-size: 1.2rem;
      border-radius: 20px;
      margin-top: 20px;
    `}

  &:hover {
    color: #fff;
    background-color: #504f4f;
    cursor: pointer;
    box-shadow: var(--box-shadow-md);
  }
`;

export default Button;
