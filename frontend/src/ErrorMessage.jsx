import styled from "styled-components";

const ErrorWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #3d3939;
  font-family: Arial, sans-serif;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    text-align: left;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const ErrorMessage = () => {
  return (
    <ErrorWrapper>
      <p>Something went wrong from server...</p>
      <ul>
        <li>Check your internet connection.</li>
        <li>Try again some time.</li>
      </ul>
    </ErrorWrapper>
  );
};

export default ErrorMessage;
