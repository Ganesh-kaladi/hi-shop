import { Children } from "react";
import styled from "styled-components";

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #fdfdfd;
  font-family: sans-serif;
`;

const Container = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const ShopButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const NoContent = ({ children }) => {
  return (
    <CenteredWrapper>
      <Container>
        <Title>This {children} is not ready.</Title>

        {/* <Message>You haven't shopped yet. Start your journey now!</Message> */}
      </Container>
    </CenteredWrapper>
  );
};

export default NoContent;
