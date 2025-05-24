import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0px;
  background-color: rgba(255, 255, 255, 0.788);
  z-index: 100;
`;

const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  font-size: 2.2rem;
  letter-spacing: 2px;
  font-family: sans-serif;
`;

const Animaion1 = keyframes`
  0% {color:#4d4b4b}
  20% {color:#8a8a8a}
  40%{color:#8a8a8a}
  60% {color:#8a8a8a}
  80% {color:#8a8a8a}
  100% {color:#4d4b4b}
`;

const Animaion2 = keyframes`
 0% {color:#8a8a8a}
  20% {color:#4d4b4b}
  40% {color:#4d4b4b}
  60% {color:#8a8a8a}
  80% {color:#8a8a8a}
  100% {color:#8a8a8a}
`;

const Animaion3 = keyframes`
   0% {color:#8a8a8a}
  20% {color:#8a8a8a}
  40% {color:#4d4b4b}
  60% {color:#4d4b4b}
  80% {color:#8a8a8a}
  100% {color:#8a8a8a}
`;

const Animaion4 = keyframes`
  0% {color:#8a8a8a}
  20% {color:#8a8a8a}
  40% {color:#8a8a8a}
  60% {color:#4d4b4b}
  80% {color:#4d4b4b}
  100% {color:#8a8a8a}
`;

const Animaion5 = keyframes`
  0% {color:#8a8a8a}
  20% {color:#8a8a8a}
  40% {color:#8a8a8a}
  60% {color:#8a8a8a}
  80% {color:#4d4b4b}
  100% {color:#4d4b4b}
`;

const Animaion6 = keyframes`
  0% {color:#4d4b4b}
  20% {color:#8a8a8a}
  40% {color:#8a8a8a}
  60% {color:#8a8a8a}
  80% {color:#8a8a8a}
  100% {color:#4d4b4b}
`;

const Span1 = styled.span`
  display: inline-block;
  font-size: 4rem;
  animation: ${Animaion1} 2s ease;
  animation-iteration-count: infinite;
`;

const Span2 = styled.span`
  display: inline-block;
  font-size: 4rem;
  animation: ${Animaion2} 2s ease;
  animation-iteration-count: infinite;
`;

const Span3 = styled.span`
  display: inline-block;
  font-size: 4rem;
  animation: ${Animaion3} 2s ease;
  animation-iteration-count: infinite;
`;

const Span4 = styled.span`
  display: inline-block;
  font-size: 4rem;
  animation: ${Animaion4} 2s ease;
  animation-iteration-count: infinite;
`;

const Span5 = styled.span`
  display: inline-block;
  font-size: 4rem;
  animation: ${Animaion5} 2s ease;
  animation-iteration-count: infinite;
`;

const Span6 = styled.span`
  display: inline-block;
  font-size: 4rem;
  animation: ${Animaion6} 3s ease;
  animation-iteration-count: infinite;
`;

function Spinner() {
  return (
    <>
      <div>
        <Container>
          <SpinnerContainer>
            <h1>
              <Span1>H</Span1>
              <Span2>i,</Span2>
              <Span3>S</Span3>
              <Span4>H</Span4>
              <Span5>O</Span5>
              <Span6>P</Span6>
            </h1>
          </SpinnerContainer>
        </Container>
      </div>
    </>
  );
}

// 🔁 Spinner animation
const spin = keyframes`
   0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const spinColor = keyframes`
  0%   { border-top:3px solid #2e2e2e; }   /* Indigo */
  33%  { border-right:3px solid #2e2e2e; }   /* Green */
  66%  { border-bottom:3px solid #2e2e2e;}   /* Amber */
  100% { border-left:3px solid #2e2e2e; }   /* Back to Indigo */
`;
// 🌀 Styled spinner
const SpinRotate = styled.div`
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  animation: ${spinColor} 0.3s linear infinite;
  margin-right: 10px;
  padding: 0.8rem;
`;

// 🔄 Container for spinner + text
const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #333;
  font-size: 2rem;
  height: 5rem;
`;

const Division = styled.div`
  width: 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 8px 0px #423d4138;
  border-radius: 1rem;
`;

const LoadingText = styled.span`
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-family: sans-serif;
`;

export const Loading = () => {
  return (
    <LoadingWrapper>
      <Division>
        <SpinRotate />
        <LoadingText>loading...</LoadingText>
      </Division>
    </LoadingWrapper>
  );
};

export default Spinner;
