import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${(props) => props.size || "2rem"};
  text-align: center;
  margin-bottom: 20px;
`;

export default H1;
